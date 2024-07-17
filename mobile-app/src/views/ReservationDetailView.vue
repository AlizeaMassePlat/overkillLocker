<template>
  <ion-page>
    <ion-content>
      <div class="reservation-detail-container">
        <h2>Reservation n°{{ route.params.id }}</h2>
        <p>Date: 2024-07-15</p>
        <ion-button expand="full" @click="returnLocker">Return my locker</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { IonPage, IonContent, IonButton } from '@ionic/vue';

const route = useRoute();

function returnLocker() {
  // Logic for returning locker
  console.log('Returning locker for reservation', route.params.id);
}
</script>

<style scoped>
.reservation-detail-container {
  padding: 16px;
  text-align: center;
}
</style>
