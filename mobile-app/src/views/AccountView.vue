<template>
    <ion-page>
      <ion-content>
        <div class="account-container">
          <ion-avatar>
            <img src="https://via.placeholder.com/150" alt="Avatar">
          </ion-avatar>
          <h2>Jane Doe</h2>
          <ion-list>
            <ion-item>
              <ion-label>Email: smart@locker.com</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Phone: 06 34 56 78 90</ion-label>
            </ion-item>
            <ion-button expand="full" @click="editAccount">Edit Account</ion-button>
          </ion-list>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  export default {
    name: 'AccountView',
    methods: {
      editAccount() {
        this.$router.push('/account/edit');
      }
    }
  };
  </script>
  
  <style scoped>
  .account-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
  }
  </style>
  