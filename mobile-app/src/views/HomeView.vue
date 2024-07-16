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
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton
  },
  methods: {
    navigateTo(routeName, params = {}) {
      this.$router.push({ name: routeName, params });
    }
  }
});
</script>


<style scoped>
.button{
  margin: 20px;
}
/* Ajoutez vos styles ici */
</style>