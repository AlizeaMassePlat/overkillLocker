<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Register</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="register-container">
        <h2>Create an Account</h2>
        <ion-item>
          <ion-label position="floating">Last Name</ion-label>
          <ion-input v-model="lastName"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">First Name</ion-label>
          <ion-input v-model="firstName"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input type="email" v-model="email"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Password</ion-label>
          <ion-input type="password" v-model="password"></ion-input>
        </ion-item>
        <ion-button expand="full" @click="register">REGISTER</ion-button>
        <div class="login-link">
          <router-link to="/login">Already registered?</router-link>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';

const lastName = ref('');
const firstName = ref('');
const email = ref('');
const password = ref('');

function register() {
  // Logic for registration
  console.log('Register clicked', { lastName: lastName.value, firstName: firstName.value, email: email.value, password: password.value });
}
</script>

<style scoped>
.register-container {
  display: flex;
  flex-direction: column;
  padding: 16px;
}
.login-link {
  margin-top: 16px;
  text-align: center;
}
</style>
