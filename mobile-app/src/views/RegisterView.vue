<template>
    <ion-page>
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
            <ion-router-link to="/login">Already registered?</ion-router-link>
          </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  export default {
    name: 'RegisterView',
    data() {
      return {
        lastName: '',
        firstName: '',
        email: '',
        password: ''
      };
    },
    methods: {
      register() {
        // Logic for registration
      }
    }
  };
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
  