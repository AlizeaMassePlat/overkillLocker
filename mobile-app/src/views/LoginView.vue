<template>
  <ion-page>
    <ion-content>
      <div class="login-container">
        <h2>Happy to see you again</h2>
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
        <div class="register-link">
          <router-link to="/register">Not registered yet?</router-link>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import FormInputComponent from '@/components/FormInputComponent.vue';

const email = ref('');
const password = ref('');
const emailError = ref('');
const passwordError = ref('');

function login() {
  // Logic for login
  console.log('Login with', email.value, password.value);
}
</script>

<style scoped>
.login-container {
  padding: 16px;
  background-color: #2e2c2b;
  height: 100vh;
  width: 100vw;
  color: white;
}
.register-link {
  margin-top: 16px;
  text-align: center;
}
</style>
