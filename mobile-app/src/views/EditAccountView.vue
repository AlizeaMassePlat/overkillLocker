<template>
    <ion-page>
      <ion-content>
        <div class="edit-account-container">
          <h2>Complete my profile</h2>
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
            <ion-label position="floating">Phone</ion-label>
            <ion-input type="tel" v-model="phone"></ion-input>
          </ion-item>
          <ion-button expand="full" @click="updateAccount">UPDATE</ion-button>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  export default {
    name: 'EditAccountView',
    data() {
      return {
        lastName: '',
        firstName: '',
        email: '',
        phone: ''
      };
    },
    methods: {
      updateAccount() {
        // Logic for updating account
      }
    }
  };
  </script>
  
  <style scoped>
  .edit-account-container {
    display: flex;
    flex-direction: column;
    padding: 16px;
  }
  </style>
  