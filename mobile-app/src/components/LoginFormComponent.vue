<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <form @submit.prevent="handleSubmit" class="form">
        <ion-item>
          <ion-label position="floating" for="username">Username</ion-label>
          <ion-input type="text" id="username" v-model="username"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating" for="password">Password</ion-label>
          <ion-input type="password" id="password" v-model="password"></ion-input>
        </ion-item>
        <ion-button expand="full" type="submit">Login</ion-button>
      </form>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';

const username = ref('');
const password = ref('');

function handleSubmit() {
  // Handle login logic here
  console.log('Login with', username.value, password.value);
}
</script>

<style scoped>
.form {
  padding: 16px;
}
</style>
