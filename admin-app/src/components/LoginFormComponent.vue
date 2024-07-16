<template>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username">
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password">
      </div>
      <button type="submit">Login</button>
    </form>
  </template>
  
  <script>
  export default {
    name: 'LoginFormComponent',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      handleSubmit() {
        // Handle login logic here
        console.log('Login with', this.username, this.password);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  