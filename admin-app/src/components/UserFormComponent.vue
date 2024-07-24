<template>
  <div>
    <h1>Ajouter un utilisateur</h1>
    <main>
      <form @submit.prevent="handleSubmit" class="form">
        <div class="form-group">
          <label class="input-label">Rôle *</label>
          <select v-model="user.role" required>
            <option value="0" selected="selected">Étudiant</option>
            <option value="1">Équipe péda</option>
            <option value="2">Externe</option>
          </select>
        </div>
        <div class="form-group-inline">
          <div class="form-group">
            <label class="input-label">Nom *</label>
            <input type="text" v-model="user.nom" required />
          </div>
          <div class="form-group">
            <label class="input-label">Prénom *</label>
            <input type="text" v-model="user.prenom" required />
          </div>
        </div>
        
        <div class="form-group">
          <label class="input-label">Email *</label>
          <input type="email" v-model="user.email" required />
        </div>
        <div v-if="user.role == '0'" class="form-group">
          <label class="input-label">Adresse</label>
          <input type="tel" v-model="user.adress"  />
        </div>
        <div class="form-group">
          <label class="input-label">Carte</label>
            <select v-model="user.card_number" required class="limited-select">
              <option v-for="card in cards" :key="card.id" :value="card.id">{{ card.card_identifier }}</option>
            </select>
        </div>
        <div v-if="user.role == '0'" class="form-group">
          <label class="input-label">Promotion</label>
            <select v-model="user.school_prom" required>
              <option disabled value="">Sélectionner</option>
              <option>CS1</option>
              <option>CS2</option>
              <option>MSC1</option>
              <option>MSC2</option>
              <option>B1</option>
              <option>B2</option>
              <option>B3</option>
            </select>
        </div>
        <div class="add-button">
          <ButtonComponent type="sm" label="Ajouter" />
        </div>
      </form>
    </main>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import ButtonComponent from './ButtonComponent.vue';
import axios from 'axios';

const user = ref({
  nom: "max",
  prenom: "max",
  email: "max@gmail.com",
  adress: "Rue Marseille",
  school_prom: "",
  role: "0",
  card_number: ""
});

const cards = ref([]);

const fetchCards = async () => {
  try {
    let response = await axios.get('http://localhost:3000/card/notUsed');
    cards.value = response.data;
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  fetchCards()
});

const handleSubmit = async () => {

  console.log("Submitted user:", user.value);

  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:',.<>?/";
  let password = "";
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  try {

    let response = await axios.post('http://localhost:3000/user/register', {
      password: password,
      firstname: user.value.prenom,
      lastname: user.value.nom,
      email: user.value.email,
      adress: user.value.adress,
      role: user.value.role,
      school_prom: user.value.school_prom,
      card_number: Number(user.value.card_number),
      create_date:  new Date().toISOString()
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped>
h1 {
  margin-top: 16px;
  text-align: center;
}

.form {
  width: 400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 16px;
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  box-sizing: border-box;
  border: 2px solid #ffdac1;
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
  font-size: 10px;
  top: 4px;
  color: #98928f;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="number"],
select {
  width: 100%;
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

.limited-select {
  max-height: 100px;
  overflow-y: auto;
}

button {
  cursor: pointer;
}
</style>
