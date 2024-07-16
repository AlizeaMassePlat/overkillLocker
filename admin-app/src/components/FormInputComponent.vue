<template>
    <div class="form-input">
      <label :for="id">{{ label }}</label>
      <input :type="type" :id="id" v-model="value" @input="$emit('input', value)" />
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FormInputComponent',
    props: {
      id: String,
      label: String,
      type: {
        type: String,
        default: 'text'
      },
      value: [String, Number],
      error: String
    }
  };
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
  