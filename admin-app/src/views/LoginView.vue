<template>
  <div>
    <h1>Login</h1>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '../components/LoginFormComponent.vue';

export default {
  name: 'LoginView',
  components: {
    LoginForm
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
