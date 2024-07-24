<template>
  <ion-page>
    <div class="login-container">
      <h2>Heureux de vous revoir</h2>
      <ion-input
        class="custom"
        ref="emailInput"
        type="email"
        fill="outline"
        label="Email"
        label-placement="floating"
        placeholder="smart@locker.fr"
        v-model="email"
        @ionInput="validateEmail"
        @ionBlur="markTouched"
        :error-text="emailError"
      >
        <ion-icon
          v-if="emailTouched"
          slot="end"
          :icon="emailValid ? checkmarkCircle : closeCircle"
          :color="emailValid ? 'success' : 'danger'"
          aria-hidden="true"
        ></ion-icon>
      </ion-input>

      <ion-input
        class="custom"
        ref="passwordInput"
        :type="showPassword ? 'text' : 'password'"
        fill="outline"
        label="Mot de passe"
        label-placement="floating"
        placeholder="Mot de passe"
        v-model="password"
        @ionFocus="passwordFocused = true"
        @ionBlur="passwordFocused = false"
      >
        <ion-button
          v-if="passwordFocused"
          slot="end"
          fill="clear"
          @mousedown.prevent="togglePasswordVisibility"
        >
          <ion-icon
            :icon="showPassword ? eyeOff : eye"
            slot="icon-only"
          ></ion-icon>
        </ion-button>
      </ion-input>

      <ButtonComponent type="lg" @click="login">Connexion</ButtonComponent>
      <div class="link">
        <router-link to="/motdepasse">Mot de passe oublié ?</router-link>
      </div>
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from 'axios';
import { IonInput, IonButton, IonIcon, IonPage } from "@ionic/vue";
import { eye, eyeOff, checkmarkCircle, closeCircle } from "ionicons/icons";
import ButtonComponent from "@/components/ButtonComponent.vue";

const email = ref("");
const password = ref("");
const emailError = ref("");
const showPassword = ref(false);
const emailTouched = ref(false);
const emailValid = ref(false);
const passwordFocused = ref(false);
const router = useRouter();

const validateEmail = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  email.value = value;

  const emailPattern =
    /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  emailValid.value = emailPattern.test(value);

  emailTouched.value = true;
  emailError.value = emailValid.value ? "" : "Email invalide";
};

const markTouched = () => {
  emailTouched.value = true;
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const login = async () => {
  try {
    const response = await axios.post('http://localhost:3000/user/login', {
      email: email.value,
      password: password.value,
    });

    const user = response.data;
    localStorage.setItem('user', JSON.stringify(user));

    console.log("Login successful", user);
    router.push('/');  
  } catch (error) {
    console.error('Login error:', error);
  }
};
</script>

<style scoped>
.login-container {
  color: #e5e1e2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  background-color: #212121;
  gap: 40px;
}

ion-input.custom {
  width: 310px;
  height: 45px;
  --color: #fff;
  --placeholder-color: #ddd;
  --placeholder-opacity: 0.8;
  --highlight-color-focused: #ffa62b;
}

ion-icon {
  color: #ffa62b;
}

.link a {
  text-decoration: none;
  color: #a8a5a6;
  margin-top: -20px;
  font-size: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
