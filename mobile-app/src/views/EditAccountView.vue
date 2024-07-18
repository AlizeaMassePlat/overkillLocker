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
          <ion-button expand="full" @click="editAccount">Sauvegarder les modifications</ion-button>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { IonAvatar, IonContent, IonItem, IonLabel, IonList, IonPage, IonButton } from '@ionic/vue';

const router = useRouter();

function editAccount() {
  router.push('/account/edit');
}
</script>

<style scoped>
.account-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
}
</style>
