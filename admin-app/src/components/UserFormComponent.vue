<template>
  <div class="user-form">
    <h2>Ajouter un utilisateur</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="nom">Nom</label>
        <input type="text" id="nom" v-model="user.nom" />
      </div>
      <div class="form-group">
        <label for="prenom">Prénom</label>
        <input type="text" id="prenom" v-model="user.prenom" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="user.email" />
      </div>
      <div class="form-group">
        <label for="telephone">Téléphone</label>
        <input type="tel" id="telephone" v-model="user.telephone" />
      </div>
      <div class="form-group">
        <label for="age">Âge</label>
        <input type="number" id="age" v-model="user.age" />
      </div>
      <div class="form-group">
        <label for="genre">Genre</label>
        <select id="genre" v-model="user.genre">
          <option value="masculin">Masculin</option>
          <option value="feminin">Féminin</option>
          <option value="feminin">Autre</option>
        </select>
      </div>
      <div class="form-group">
        <label for="role">Rôle</label>
        <select type="text" id="role" v-model="user.role" >
          <option value="etudiant">Etudiant</option>
          <option value="prof">Prof</option>
          <option value="externe">Externe</option>
        </select>
      </div>
      <button type="submit">Ajouter</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserFormComponent',
  data() {
    return {
      user : {
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        age: '',
        genre: '',
        role: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      // Handle save logic here
      console.log('Save user', this.nom, this.email);
    }
  }
};
</script>

<style scoped>
/* Styles pour le formulaire d'utilisateur */
.user-form {
  padding: 16px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 400px;
  margin: auto;
}

.user-form h2 {
  text-align: center;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
}

.form-group input,
.form-group select {
  width: 96%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  display: block;
  width: 100%;
  padding: 12px;
  background-color: #ffa62b;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #e59426;
}
</style>
