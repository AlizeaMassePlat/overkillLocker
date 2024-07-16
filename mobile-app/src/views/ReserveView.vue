<template>
    <ion-page>
      <ion-content>
        <div class="reserve-container">
          <h2>Would you like to reserve in Building A, location 1?</h2>
          <p>Number of available lockers:</p>
          <ion-button expand="full" @click="reserve">RESERVE</ion-button>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  export default {
    name: 'ReserveView',
    methods: {
      reserve() {
        // Logic for reservation
      }
    }
  };
  </script>
  
  <style scoped>
  .reserve-container {
    display: flex;
    flex-direction: column;
    padding: 16px;
    text-align: center;
  }
  </style>
  