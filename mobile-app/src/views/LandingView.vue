<template>
  <ion-page>
    <ion-content :scroll="false">
      <MapComponent @pin-clicked="handlePinClicked" />
      <BackArrow
        v-if="isBookModalOpen"
        :is-open="isBookModalOpen"
        @click="closeModal" />
      <ModalComponent
        :is-open="isBookModalOpen"
        @didDismiss="closeModal"
        class="book-modal"
        :initial-breakpoint="0.5"
        :breakpoints="[0, 0.5, 1]">
        <div class="book-container">
          <h2>Voulez-vous réserver dans le Batiment A, emplacement B ?</h2>
          <p>Nombre de casiers disponibles:<br />{{ selectedPin?.number }}</p>
          <ButtonComponent type="sm" @click="openSummaryModal"
            >Réserver</ButtonComponent>
        </div>
      </ModalComponent>
      <ModalComponent
        :is-open="isSummaryModalOpen"
        @didDismiss="closeSummaryModal"
        class="summary-modal">
        <div class="summary-container">
          <Close @click="closeSummaryModal" />
          <h2>Félicitations !</h2>
          <p>
            Vous avez réservé<br />1 casier<br />bâtiment {{ reservation?.building }}<br />emplacement {{ reservation?.position }}
          </p>
          <Qrcode v-if="qrData" :value="qrData" class="qr-code" />
          <div v-else>
            <p>Chargement de la réservation...</p>
          </div>
          <p>code pin : <strong>4567</strong></p>
        </div>
      </ModalComponent>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { IonPage, IonContent } from "@ionic/vue";
import MapComponent from "@/components/MapComponent.vue";
import BackArrow from "@/components/ButtonBackArrow.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import Close from "@/components/ButtonClose.vue";
import ModalComponent from "@/components/ModalComponent.vue";
import axios from 'axios';
import Qrcode from '@chenfengyuan/vue-qrcode';

// Define a type for the pin
interface Pin {
  id: number;
  number: number;
  x: number;
  y: number;
}

export default defineComponent({
  name: "LandingView",
  components: {
    IonPage,
    IonContent,
    MapComponent,
    BackArrow,
    ButtonComponent,
    Close,
    ModalComponent,
    Qrcode,
  },
  setup() {
    const isBookModalOpen = ref(false);
    const isSummaryModalOpen = ref(false);
    const selectedPin = ref<Pin | null>(null); 

    const reservation = ref<any>(null);
    const qrData = ref<string>(''); 

    const handlePinClicked = (pin: Pin) => { 
      selectedPin.value = pin;
      isBookModalOpen.value = true;
    };

    const closeModal = () => {
      isBookModalOpen.value = false;
      selectedPin.value = null;
    };

    const openSummaryModal = async () => {
      isBookModalOpen.value = false;
      isSummaryModalOpen.value = true;
      try {
        // Récupération de la réservation
        const reservationResponse = await axios.get('http://localhost:3000/reservation/7');
        reservation.value = reservationResponse.data;

        // Mise à jour de l'état du casier
        const lockerId = reservationResponse.data.id_locker; // Récupérer l'ID du casier depuis la réponse de réservation
        await axios.patch(`http://localhost:3000/locker/${lockerId}`, {
          is_open: false,
        });

        // Récupération des données du casier mis à jour
        const lockerResponse = await axios.get(`http://localhost:3000/locker/${lockerId}`);
        qrData.value = JSON.stringify(lockerResponse.data); // Mettre à jour qrData avec les informations du casier

        // Vérification des données
        console.log('Réponse de la réservation :', reservationResponse.data);
        console.log('Réponse du casier mis à jour :', lockerResponse.data);
        console.log('qrData:', qrData.value);

      } catch (error) {
        console.error('Erreur lors de la récupération ou de la mise à jour:', error);
      }
    };

    const closeSummaryModal = () => {
      isSummaryModalOpen.value = false;
    };

    return {
      isBookModalOpen,
      isSummaryModalOpen,
      selectedPin,
      handlePinClicked,
      closeModal,
      openSummaryModal,
      closeSummaryModal,
      reservation,
      qrData,
    };
  },
});
</script>

<style scoped>
.book-modal {
  --height: 100%;
  --border-radius: 16px 16px 0 0;
  --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.summary-modal {
  --height: 70%;
  --width: 80%;
  --border-radius: 16px;
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
  --margin: auto;
}

.book-modal .ion-content,
.summary-modal .ion-content {
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.book-container,
.summary-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 20px;
}

.summary-container {
  justify-content: center;
  height: 100%;
}

.qr-code {
  width: 170px !important;
  height: 170px !important;
  margin: 20px 0;
}
</style>
