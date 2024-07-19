<template>
  <ion-page>
    <ion-content>
      <div class="start-container">
        <img :src="smartLogo" alt="Logo" />
        <ButtonComponent type="sm" @click="goToLogin">C'est parti !</ButtonComponent>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import smartLogo from '../../public/SmartLocker.svg';
import ButtonComponent from '@/components/ButtonComponent.vue';

const router = useRouter();

function goToLogin() {
  router.push('/login');
}
</script>

<style scoped>
.start-container {
  padding: 16px;
  background-color: #2e2c2b;
  height: 100vh;
  width: 100vw;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>
