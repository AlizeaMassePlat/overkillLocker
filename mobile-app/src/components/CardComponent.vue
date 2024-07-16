<template>
  <ion-card>
    <ion-card-header>
      <slot name="header"></slot>
    </ion-card-header>
    <ion-card-content>
      <slot></slot>
    </ion-card-content>
    <ion-card-footer>
      <slot name="footer"></slot>
    </ion-card-footer>
  </ion-card>
</template>

<script>
import { defineComponent } from 'vue';
import { IonCard, IonCardHeader, IonCardContent, IonCardFooter } from '@ionic/vue';

export default defineComponent({
  name: 'CardComponent',
  components: {
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardFooter
  }
});
</script>

<style scoped>
/* Ajoutez des styles personnalisés si nécessaire */
</style>
