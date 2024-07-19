<template>
	<ion-item class="form-input">
	  <ion-label :for="id" position="fixed">{{ label }}</ion-label>
	  <ion-input
		:type="type"
		:id="id"
		:value="modelValue"
		@input="$emit('update:modelValue', $event.target.value)"
		
	  ></ion-input>
	  <p v-if="error" class="error">{{ error }}</p>
	</ion-item>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  import { IonItem, IonLabel, IonInput } from '@ionic/vue';
  
  const props = defineProps({
	id: {
	  type: String,
	  required: true,
	},
	label: {
	  type: String,
	  required: true,
	},
	type: {
	  type: String,
	  required: true,
	},
	modelValue: {
	  type: String,
	  required: true,
	},
	error: {
	  type: String,
	  required: false,
	},
  });
  
  const emit = defineEmits(['update:modelValue']);

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
  