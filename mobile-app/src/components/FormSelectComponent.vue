<template>
  <ion-select
    :class="class"
    ref="select"
    :interface="interface"
    :label="label"
    label-placement="floating"
    :helper-text="helperText"
    :error-text="errorText"
    :placeholder="placeholder"
    :disabled="disabled"
    :multiple="multiple"
    :value="value"
    cancel-text="Annuler"
    @ionChange="handleChange"
    @ionBlur="handleBlur"
  >
    <ion-select-option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.label }}
    </ion-select-option>
  </ion-select>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';
import { IonSelect, IonSelectOption } from '@ionic/vue';

const props = defineProps({
  class: String,
  interface: {
    type: String,
    default: 'action-sheet'
  },
  label: String,
  helperText: String,
  errorText: String,
  placeholder: String,
  disabled: Boolean,
  multiple: Boolean,
  options: {
    type: Array,
    default: () => []
  },
  value: [String, Number, Array]
});

const emits = defineEmits(['update:value', 'blur']);

const handleChange = (event: Event) => {
  const value = (event.target as HTMLIonSelectElement).value;
  emits('update:value', value);
};

const handleBlur = () => {
  emits('blur');
};
</script>

<style>
ion-select.custom {
  --color: #fff;
  --placeholder-color: #ddd;
  --placeholder-opacity: 0.8;
  --highlight-color-focused: #ffa62b;
}
</style>
