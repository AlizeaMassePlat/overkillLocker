<template>
  <ion-page>
    <ion-content class="summary-overlay">
      <div class="summary-container" v-if="reservation">
        <Close @click="$emit('close')" class="close-icon"/>
        <h2>Félicitations !</h2>
        <p>
          Vous avez réservé<br>
          1 casier<br>
          Bâtiment {{ reservation.building }}<br>
          Emplacement {{ reservation.position }}
        </p>
        <Qrcode v-if="qrData" :value="qrData" class="qr-code" />
        <p>Code PIN : <strong>{{ pinCode }}</strong></p>
      </div>
      <div v-else>
        <p>Chargement de la réservation...</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Qrcode from '@chenfengyuan/vue-qrcode';
import { IonPage, IonContent } from '@ionic/vue';
import Close from '@/components/ButtonClose.vue';

// Déclaration des variables réactives
const reservation = ref<any>(null);
const qrData = ref<string>(''); // Initialisez avec une chaîne vide
const pinCode = '4567'; // Vous pouvez ajuster ou rendre cela dynamique si nécessaire

onMounted(async () => {
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
});
</script>

<style scoped>
.summary-overlay {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 80%;
  height: 70%;
  background: white;
  z-index: 30;
  border-radius: 20px;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.summary-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 20px;
}

.close-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
}

.qr-code {
  width: 150px;
  height: 150px;
  margin: 20px 0;
}
</style>
