<template>
  <ion-card>
    <ion-card-header>
      <slot name="header"></slot>
    </ion-card-header>
    <ion-card-content>
      <slot></slot>
    </ion-card-content>
    <ion-footer>
      <slot name="footer"></slot>
    </ion-footer>
  </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonCardHeader, IonCardContent, IonFooter } from '@ionic/vue';
</script>

<style scoped>
/* Ajoutez des styles personnalisés si nécessaire */
</style>
