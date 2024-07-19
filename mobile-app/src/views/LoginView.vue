<template>
  <ion-page>
    <ion-content>
      <div class="login-container">
        <h2>Heureux de vous revoir</h2>
        <form-input-component
          id="email"
          label="Email"
          type="email"
          v-model="email"
          :error="emailError">
        </form-input-component>

        <form-input-component
          id="password"
          label="Mot de passe"
          type="password"
          v-model="password"
          :error="passwordError">
        </form-input-component>

        <ButtonComponent type="lg" @click="login">Login</ButtonComponent>
        <div class="link">
          <router-link @click="retrievePwd" to="">Mot de passe oublié ?</router-link>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

import ButtonComponent from '@/components/ButtonComponent.vue';

import FormInputComponent from '@/components/FormInputComponent.vue';

const email = ref('');
const password = ref('');
const emailError = ref('');
const passwordError = ref('');

async function login() {
  console.log('login clicked', { email: email.value, password: password.value });
  
}
async function retrievePwd() {
  console.log('retrievePwd clicked', { email: email.value });
}
</script>

<style scoped>
.login-container {
  padding: 16px;
  background-color: #2e2c2b;
  height: 100vh;
  width: 100vw;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.link {
  text-decoration: none;
  color: #CDC7C9;
  margin-top: 10%;
  font-size: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
