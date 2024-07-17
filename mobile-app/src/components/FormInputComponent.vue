<template>
  <ion-item class="form-input">
    <ion-label :for="id" position="floating">{{ label }}</ion-label>
    <ion-input
      :type="type"
      :id="id"
      v-model="inputValue"
      @ionInput="emitInput"
      clearInput></ion-input>
    <p v-if="error" class="error">{{ error }}</p>
  </ion-item>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue';
import { IonItem, IonLabel, IonInput } from '@ionic/vue';
import { TextFieldTypes } from '@ionic/core';

const props = defineProps({
  id: String,
  label: String,
  type: {
    type: String as () => TextFieldTypes,
    default: 'text'
  },
  value: [String, Number],
  error: String
});

const emit = defineEmits(['input']);

const inputValue = ref(props.value);

watch(() => props.value, (newValue) => {
  inputValue.value = newValue;
});

const emitInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('input', target.value);
};
</script>

<style scoped>
.form-input {
  border-radius: 8px;
  background-color: white;
  /* border: 1px solid #ffa62b; */
  width: 300px;
  height: 45px;
  display: flex;
  justify-content: left;
  align-items: center;
  color: #212121;
  font-size: 14px;
  padding-left: 9px;
  margin-top: 34px;
  /* margin-bottom: 2%; */
}
.error {
  color: red;
  font-size: 12px;
}
</style>
