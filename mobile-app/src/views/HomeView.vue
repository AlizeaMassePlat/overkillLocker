<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-button class="button" @click="navigateTo('StartView')">Start</ion-button>
      <ion-button class="button" @click="navigateTo('LoginView')">Login</ion-button>
      <ion-button class="button" @click="navigateTo('RegisterView')">Register</ion-button>
      <ion-button class="button" @click="navigateTo('MapView')">Map</ion-button>
      <ion-button class="button" @click="navigateTo('ReserveView')">Reserve</ion-button>
      <ion-button class="button" @click="navigateTo('MyReservationsView')">My Reservations</ion-button>
      <ion-button class="button" @click="navigateTo('ReservationDetailView', { id: 1 })">Reservation Detail</ion-button>
      <ion-button class="button" @click="navigateTo('AccountView')">Account</ion-button>
      <ion-button class="button" @click="navigateTo('EditAccountView')">Edit Account</ion-button>
      <ion-button class="button" @click="navigateTo('ReportIncidentView')">Report Incident</ion-button>
      <ButtonComponent type="primary" @click="onButtonClick">Primary Button</ButtonComponent>
      <ButtonComponent type="secondary" @click="onButtonClick">Secondary Button</ButtonComponent>
      <ButtonComponent type="danger" @click="onButtonClick">Danger Button</ButtonComponent>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import ButtonComponent from '@/components/ButtonComponent.vue';

const router = useRouter();

function navigateTo(routeName: string, params: Record<string, any> = {}) {
  router.push({ name: routeName, params });
}

function onButtonClick() {
  console.log('Button clicked');
}
</script>

<style scoped>
.button {
  margin: 20px;
}
/* Ajoutez vos styles ici */
</style>
