<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>{{ title }}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <p>{{ value }}</p>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  }
});
</script>

<style scoped>
/* Styles personnalisés si nécessaire */
</style>
