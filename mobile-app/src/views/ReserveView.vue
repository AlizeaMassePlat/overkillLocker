<template>
  <ion-page>
    <ion-content>
      <div class="reserve-container">
        <h2>Would you like to reserve in Building A, location 1?</h2>
        <p>Number of available lockers:</p>
        <ion-button expand="full" @click="reserve">RESERVE</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonButton } from '@ionic/vue';

function reserve() {
  // Logic for reservation
  console.log('Reserve button clicked');
}
</script>

<style scoped>
.reserve-container {
  display: flex;
  flex-direction: column;
  padding: 16px;
  text-align: center;
}
</style>
