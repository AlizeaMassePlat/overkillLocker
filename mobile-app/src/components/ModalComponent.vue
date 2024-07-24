<template>
  <ion-modal :is-open="isOpen" @didDismiss="closeModal" class="custom-modal">
    <ion-content class="modal-content">
      <slot></slot>
    </ion-content>
  </ion-modal>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { IonModal, IonContent } from '@ionic/vue';

const props = defineProps({
  isOpen: Boolean,
  title: String
});

const emit = defineEmits(['didDismiss']);

const closeModal = () => {
  emit('didDismiss');
};
</script>

<style scoped>
.custom-modal {
  --border-radius: 16px;
  --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.modal-content {
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
