<!-- shared-components/Button.vue -->
<template>
    <button class="shared-button" @click="handleClick">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    methods: {
      handleClick() {
        this.$emit('click');
      }
    }
  };
  </script>
  
  <style scoped>
  .shared-button {
    background-color: blueviolet;
  }
  </style>
  

  