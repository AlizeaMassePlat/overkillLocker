<template>
  <ion-page>
    <ion-content class="reservations-overlay">
      <div class="reservations-container">
        <h2>Mes réservations</h2>
        <div
          v-for="reservation in reservations"
          :key="reservation.id"
          :class="[
            'reservation-item',
            { 'active-reservation': reservation.status === 1 },
          ]"
          @click="openReservationDetails(reservation.id)"
        >
          <div class="icon-container">
            <img :src="reservation.image" alt="Icon" class="reservation-icon" />
          </div>
          <div class="reservation-details">
            <h3>{{ reservation.number }}</h3>
            <p>{{ reservation.date }}</p>
          </div>
          <ion-icon :icon="chevronForward" class="chevron-icon"></ion-icon>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { IonPage, IonContent, IonIcon } from "@ionic/vue";
import equipmentImg from "/equipment.png";
import lockerImg from "/locker.png";
import { chevronForward } from "ionicons/icons";

const router = useRouter();

const reservations = ref([
  { id: 1, number: "N°125689", date: "en cours", status: 1, image: lockerImg },
  { id: 2, number: "N°125688", date: "12 mai 2024", status: 0, image: lockerImg },
  { id: 3, number: "N°125687", date: "23 mars 2024", status: 0, image: equipmentImg },
  { id: 4, number: "N°125686", date: "15 janvier 2024", status: 0, image: lockerImg },
  { id: 5, number: "N°125685", date: "14 janvier 2024", status: 0, image: equipmentImg },
  { id: 6, number: "N°125684", date: "1 octobre 2023", status: 0, image: lockerImg },
  { id: 7, number: "N°125683", date: "13 octobre 2023", status: 0, image: lockerImg },
]);

const openReservationDetails = (id) => {
  console.log(`Opening details for reservation id: ${id}`);
  router.push({ name: 'ReservationDetailView', params: { id } });
};
</script>

<style scoped>
.reservations-overlay {
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 90%;
  background: white;
  z-index: 20;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow-y: auto;
}

.reservations-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 20px;
}

.reservation-item {
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 5px 0;
  cursor: pointer;
}

.reservation-item.active-reservation {
  background-color: #ffc576;
  border-color: #ffc576;
}

.icon-container {
  width: 50px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
}

.reservation-icon {
  max-width: 100%;
  max-height: 100%;
  height: auto;
}

.reservation-details {
  flex-grow: 1;
  text-align: left;
}

.chevron-icon {
  font-size: 24px;
  color: #000;
}
</style>
