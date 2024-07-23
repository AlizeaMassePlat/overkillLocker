<template>
	<ion-input
		:class="class"
		ref="input"
		:type="type"
		:fill="fill"
		:label="label"
		label-placement="floating"
		:helper-text="helper-text"
		:counter="counter"
		:maxlength="maxlength"
		:error-text="error - text"
		@ionInput=""
		@ionBlur=""
		:placeholder="placeholder"
		:disabled="disabled"
		:minlength="minlength">
	</ion-input>
</template>

<script lang="ts"></script>

<style>
ion-input.custom {
	--color: #fff;
	--placeholder-color: #ddd;
	--placeholder-opacity: 0.8;
	--highlight-color-focused: #ffa62b;
}
</style>
