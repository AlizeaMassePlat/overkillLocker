<template>
  <ion-page>
    <BackArrow @click="$emit('close')" />
    <ion-content class="reserve-overlay">
      <div class="reserve-container">
        <h2>Voulez-vous réserver dans le Batiment A, emplacement 1 ?</h2>
        <p>Nombre de casiers disponibles:<br />37</p>
        <ButtonComponent type="sm" @click="reserve">Réserver</ButtonComponent>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import BackArrow from "@/components/ButtonBackArrow.vue";
import ButtonComponent from '@/components/ButtonComponent.vue';

const emit = defineEmits(['close', 'openSummary']);

function reserve() {
  emit('openSummary');
  console.log("Reserve button clicked");
}
</script>

<style scoped>
.reserve-overlay {
  position: fixed;
  top: 50%;
  left: 0;
  width: 100%;
  height: 50%;
  background: white;
  z-index: 20;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.reserve-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}
</style>
