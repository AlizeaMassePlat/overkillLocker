<template>
	<ion-input
		:label="label"
		label-placement="floating"
		class="custom"
		:type="type"
		:value="modelValue"
		:fill="fill"
		:maxlength="maxlength"
		:readonly="readonly"
		:placeholder="placeholder"
		:counter="counter"
		:auto-grow="autoGrow"
		:rows="rows"
		:error-text="errorText"
		:helper-text="helperText"
		@ionInput="$emit('update:modelValue', $event.target.value)">
	</ion-input>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
	modelValue: String,
	type: String,
	fill: String,
	label: String,
	errorText: String,
	helperText: String,
	counter: Boolean,
	maxlength: Number,
	readonly: Boolean,
	placeholder: String,
	autoGrow: Boolean,
	rows: Number,
});

const emit = defineEmits(["update:modelValue"]);
</script>

<style scoped>
ion-input.custom {
	--color: #000; 
	--placeholder-color: #ddd;
	--placeholder-opacity: 0.8;
	--highlight-color-focused: #ffa62b;
}
</style>
