<template>
  <ion-page>
      <div class="login-container">
        <h2>Bienvenue !</h2>
          <ion-input
            class="custom"
            ref="emailInput"
            type="email"
            fill="outline"
            label="Email"
            label-placement="floating"
            placeholder="smart@locker.fr"
            :value="email"
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
            :value="password"
            @ionInput="updatePassword"
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

          <ion-input
            class="custom"
            ref="confirmPasswordInput"
            :type="showPassword ? 'text' : 'password'"
            fill="outline"
            label="Confirmer le mot de passe"
            label-placement="floating"
            placeholder="Confirmer le mot de passe"
            :value="confirmPassword"
            @ionInput="updateConfirmPassword"
            @ionFocus="confirmPasswordFocused = true"
            @ionBlur="confirmPasswordFocused = false"
          >
            <ion-button
              v-if="confirmPasswordFocused"
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

        <ButtonComponent type="lg" @click="register">Définir mon mot de passe</ButtonComponent>
        
      </div>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IonInput, IonItem, IonButton, IonIcon, IonPage } from "@ionic/vue";
import { eye, eyeOff, checkmarkCircle, closeCircle } from "ionicons/icons";
import ButtonComponent from "@/components/ButtonComponent.vue";

const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const emailError = ref("");
const showPassword = ref(false);
const emailTouched = ref(false);
const emailValid = ref(false);
const passwordFocused = ref(false);
const confirmPasswordFocused = ref(false);

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

const updatePassword = (event: Event) => {
  password.value = (event.target as HTMLInputElement).value;
};

const updateConfirmPassword = (event: Event) => {
  confirmPassword.value = (event.target as HTMLInputElement).value;
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const register = async () => {
  if (password.value !== confirmPassword.value) {
    alert("Les mots de passe ne correspondent pas.");
    return;
  }

  console.log("Register clicked", {
    email: email.value,
    password: password.value,
  });
  // Add your registration logic here
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