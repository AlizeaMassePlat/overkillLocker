<template>
  <ion-page>
    <ion-content class="summary-overlay">
      <div class="summary-container">
        <Close @click="$emit('close')"/>
        <h2>Félicitations !</h2>
        <p>Vous avez réservé<br>1 casier<br>bâtiment A<br>emplacement B</p>
        <img :src="qrCode" alt="QR Code" class="qr-code" />
        <p>code pin : <strong>4567</strong></p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import Close from '@/components/ButtonClose.vue'
import qrCode from '/qrcode.png';

</script>

<style scoped>
.summary-overlay {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 80%;
  height: 70%;
  background: white;
  z-index: 30;
  border-radius: 20px;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.summary-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 20px;
}

.close-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
}

.qr-code {
  width: 150px;
  height: 150px;
  margin: 20px 0;
}
</style>
