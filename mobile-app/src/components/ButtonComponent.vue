<template>
  <ion-button :class="buttonClass" @click="handleClick">
    <slot></slot>
  </ion-button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { IonButton } from '@ionic/vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'lg'
  }
});

const emit = defineEmits(['click']);

const buttonClass = computed(() => ({
  'btn-lg': props.type === 'lg',
  'btn-sm': props.type === 'sm'
}));

const handleClick = (event: MouseEvent) => {
  emit('click', event);
};
</script>

<style scoped>
.btn-lg {
  border-radius: 8px;
  --background: #ffa62b;
  width: 310px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 34px;
}
.btn-sm {
  border-radius: 8px;
  --background: #ffa62b;
  width: 180px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 34px;
}
</style>
