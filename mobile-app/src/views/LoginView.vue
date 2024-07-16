<template>
    <ion-page>
      <ion-content>
        <div class="login-container">
          <h2>Happy to see you again</h2>
          <ion-item>
            <ion-label position="floating">Email</ion-label>
            <ion-input type="email" v-model="email"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Password</ion-label>
            <ion-input type="password" v-model="password"></ion-input>
          </ion-item>
          <ion-button expand="full" @click="login">LOGIN</ion-button>
          <div class="register-link">
            <ion-router-link to="/register">Not registered yet?</ion-router-link>
          </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  export default {
    name: 'LoginView',
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Logic for login
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    flex-direction: column;
    padding: 16px;
  }
  .register-link {
    margin-top: 16px;
    text-align: center;
  }
  </style>
  