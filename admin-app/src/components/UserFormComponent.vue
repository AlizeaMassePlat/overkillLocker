<template>
  <div>
    <header>
      <h1>Ajouter un utilisateur</h1>
    </header>
    <main>
      <form @submit.prevent="handleSubmit" class="form">
        <div class="form-group">
          <label class="input-label">Nom</label>
          <input type="text" v-model="user.nom" required />
        </div>
        <div class="form-group">
          <label class="input-label">Prénom</label>
          <input type="text" v-model="user.prenom" required />
        </div>
        <div class="form-group">
          <label class="input-label">Email</label>
          <input type="email" v-model="user.email" required />
        </div>
        <div class="form-group">
          <label class="input-label">Téléphone</label>
          <input type="tel" v-model="user.telephone" required />
        </div>
        <div class="form-group-inline">
          <div class="form-group">
            <label class="input-label">Date de naissance</label>
            <input type="date" v-model="user.date" required />
          </div>
          <div class="form-group">
            <label class="input-label">Genre</label>
            <select v-model="user.genre" required>
              <option disabled value="">Sélectionner</option>
              <option>Masculin</option>
              <option>Féminin</option>
              <option>Autre</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label class="input-label">Rôle</label>
          <select v-model="user.role" required>
            <option disabled value="">Sélectionner</option>
            <option>Étudiant</option>
            <option>Intervenant</option>
            <option>Externe</option>
          </select>
        </div>
        <div class="add-button">
          <button type="submit" class="submit-button">Ajouter</button>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  name: "UserFormComponent",
  data() {
    return {
      user: {
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        date: "",
        genre: "",
        role: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      // Handle save logic here
      console.log("Save user", this.user);
    },
  },
};
</script>

<style scoped>
/* Styles pour le formulaire d'utilisateur */
h1 {
  text-align: center;
  margin-bottom: 20px;
}
.form {
  max-width: 342px;
  margin: 0 auto;
  padding: 20px;
}
.form-group {
  margin-bottom: 15px;
  position: relative;
  width: 100%;
  padding: 21px 8px 8px 8px;
  border: 2px solid #ffdac1;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 16px;
  margin-top: 10px;
  background-color: #ecf0ff;
}
.form-group-inline {
  display: flex;
  justify-content: space-between;
}
.form-group-inline .form-group {
  flex: 1;
  margin-right: 10px;
  position: relative;
}
.form-group-inline .form-group:last-child {
  margin-right: 0;
}
.input-label {
  position: absolute;
  font-size: 10px;
  top: 4px;
  color: #98928f;
}
input[type="text"],
input[type="email"],
input[type="tel"],
input[type="number"],
select {
  width: 100%s;
  border: none;
  background: none;
  outline: none;
}
.add-button {
  display: flex;
  justify-content: center;
}
input[type="date"] {
  border: none;
  background: none;
  outline: none;
}
button.submit-button {
  width: 66%;
  padding: 16px;
  margin: 8%;
  border: none;
  border-radius: 5px;
  background-color: #ff9c33;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
}
button.submit-button:hover {
  background-color: #e08c2d;
}
</style>
