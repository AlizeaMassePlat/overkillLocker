<template>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name">
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email">
      </div>
      <button type="submit">Save</button>
    </form>
  </template>
  
  <script>
  export default {
    name: 'UserFormComponent',
    data() {
      return {
        name: '',
        email: ''
      };
    },
    methods: {
      handleSubmit() {
        // Handle save logic here
        console.log('Save user', this.name, this.email);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  