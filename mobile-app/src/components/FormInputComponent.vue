<template>
  <ion-item class="form-input">
    <ion-label :for="id" position="floating">{{ label }}</ion-label>
    <ion-input :type="type" :id="id" v-model="inputValue" @ionInput="emitInput" clearInput></ion-input>
    <p v-if="error" class="error">{{ error }}</p>
  </ion-item>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { IonItem, IonLabel, IonInput } from '@ionic/vue';

export default defineComponent({
  name: 'FormInputComponent',
  components: {
    IonItem,
    IonLabel,
    IonInput
  },
  props: {
    id: String,
    label: String,
    type: {
      type: String,
      default: 'text'
    },
    value: [String, Number],
    error: String
  },
  setup(props, { emit }) {
    const inputValue = ref(props.value);

    const emitInput = (event) => {
      emit('input', event.target.value);
    };

    return {
      inputValue,
      emitInput
    };
  }
});
</script>

<style scoped>
.form-input {
  margin-bottom: 16px;
}
.error {
  color: red;
  font-size: 12px;
}
</style>
