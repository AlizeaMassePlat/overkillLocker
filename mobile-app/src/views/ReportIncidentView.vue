<template>
  <ion-page>
    <ion-content>
      <div class="report-incident-container">
        <h2>Report an incident</h2>
        <ion-item>
          <ion-label position="floating">Locker Number</ion-label>
          <ion-input v-model="lockerNumber"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Message</ion-label>
          <ion-textarea v-model="message"></ion-textarea>
        </ion-item>
        <ion-button expand="full" @click="reportIncident">SEND</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonPage, IonContent, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from '@ionic/vue';

const lockerNumber = ref('');
const message = ref('');

function reportIncident() {
  // Logic for reporting incident
  console.log('Incident reported', { lockerNumber: lockerNumber.value, message: message.value });
}
</script>

<style scoped>
.report-incident-container {
  display: flex;
  flex-direction: column;
  padding: 16px;
}
</style>
