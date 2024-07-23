<template>
  <div>
    <header>
      <h1>Login</h1>
    </header>
    <main>
      <form @submit.prevent="handleSubmit" class="form">
        <div class="form-item">
          <label for="username">Email</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div class="form-item">
          <label for="password">Mot de passe</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <button type="submit">Connexion</button>
      </form>
    </main>
  </div>
</template>

<script>
export default {
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
.form {
  padding: 16px;
}
</style>