<template>
  <ion-page>
    <ion-content>
      <div class="register-container">
        <h2>Definir nouveau mot de passe</h2>

        <FormInputComponent
          id="email"
          label="Email"
          type="email"
          v-model="email"
          :error="emailError">
        </FormInputComponent>

        <FormInputComponent
          id="password"
          label="Mot de passe"
          type="password"
          v-model="password"
          :error="passwordError">
        </FormInputComponent>

        <FormInputComponent
          id="passwordConfirmation"
          label="Confirmer le mot de passe"
          type="password"
          v-model="passwordConfirmation"
          :error="passwordConfirmationError">
        </FormInputComponent>

        <ButtonComponent type="lg" @click="register">Confirmer</ButtonComponent>

      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import FormInputComponent from '@/components/FormInputComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';


const email = ref('');
const password = ref('');
const passwordConfirmation = ref('');

const emailError = ref('');
const passwordError = ref('');
const passwordConfirmationError = ref('');

onMounted(() => {
  console.log('Component mounted');
});

function register() {
  // Logic for registration
  console.log('Register clicked', { email: email.value, password: password.value });
}
</script>

<style scoped>
.register-container {
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
.login-link {
  margin-top: 16px;
  text-align: center;
}
</style>
