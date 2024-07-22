<template>
  <div class="login-container">
    <h2>Heureux de vous revoir</h2>
    <FormInputComponent
      id="email"
      label="Email"
      type="email"
      v-model="email"
      :error="emailError"
    >
    </FormInputComponent>

    <FormInputComponent
      id="password"
      label="Mot de passe"
      type="password"
      v-model="password"
      :error="passwordError"
    >
    </FormInputComponent>

    <div class="register-link">
      <router-link to="/register">Mot de passe oublier</router-link>
    </div>
    <ButtonComponent type="lg" @click="login">Login</ButtonComponent>
  </div>
</template>

<script>
import { ref } from "vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import FormInputComponent from "@/components/FormInputComponent.vue";

export default {
  components: {
    ButtonComponent,
    FormInputComponent,
  },
  setup() {
    const email = ref("");
    const password = ref("");
    const emailError = ref("");
    const passwordError = ref("");

    function login() {
      // Logic for login
      console.log("Login with", email.value, password.value);
    }

    return {
      email,
      password,
      emailError,
      passwordError,
      login,
    };
  },
};
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
  justify-content: center;
  align-items: center;
}
.register-link {
  margin-top: 16px;
  text-align: center;
}
a{
  color: white;
  text-decoration: none;
}
</style>
