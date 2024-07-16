<template>
    <ion-page>
      <ion-content>
        <div class="start-container">
          <img src="" alt="Logo" />
          <ion-button expand="full" @click="goToLogin">LET'S GO!</ion-button>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  export default {
    name: 'StartView',
    methods: {
      goToLogin() {
        this.$router.push('/login');
      }
    }
  };
  </script>
  
  <style scoped>
  .start-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
  }
  </style>
  