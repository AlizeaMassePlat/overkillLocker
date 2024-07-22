<template>
	<ion-item class="form-input">
	  <ion-label :for="id" position="fixed">{{ label }}</ion-label>
	  <ion-input
		:type="type"
		:id="id"
		v-model="inputValue"
		@ionInput="emitInput"
		clearInput
	  ></ion-input>
	  <p v-if="error" class="error">{{ error }}</p>
	</ion-item>
  </template>
  
  <script setup>
  import { ref, watch, defineProps, defineEmits } from 'vue';
  import { IonItem, IonLabel, IonInput } from '@ionic/vue';
  
  const props = defineProps({
	id: String,
	label: String,
	type: {
	  type: String,
	  default: 'text'
	},
	value: [String, Number],
	error: String
  });
  
  const emit = defineEmits(['input']);
  
  const inputValue = ref(props.value);
  
  // Watch for changes in props.value and update inputValue
  watch(() => props.value, (newValue) => {
	inputValue.value = newValue;
  });
  
  // Emit input event with the updated value
  const emitInput = (event) => {
	const target = event.target;
	emit('input', target.value);
	console.log('FormInput value:', target.value);
  };
  </script>
  
  <style scoped>
  .form-input {
	border-radius: 8px;
	--background: white;
	width: 310px;
	height: 45px;
	display: flex;
	justify-content: left;
	align-items: center;
	color: #212121;
	font-size: 14px;
	margin-top: 34px;
  }
  
  .error {
	color: red;
	font-size: 12px;
  }
  </style>
  