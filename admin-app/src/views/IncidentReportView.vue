<template>
  <div class="main_container">
    <div class="component_container">
      
      <div v-if="error && error.user">
        <div class="sub_component_container">
          <div class="report_incident_container">
            <h2>Rapport d'incident</h2>
            <div class="grid_incident">
              <div>
                <p>Nom</p>
                <p>{{ error.user.firstname }} {{ error.user.lastname }}</p>
              </div>
              <div>
                <p>Email</p>
                <p>{{ error.user.email }}</p>
              </div>
              <div>
                <p>N° de réservation</p>
                <p>{{ error.reservation?.id }}</p>
              </div>
              <div>
                <p>Type d'incident</p>
                <p>{{ error.type }}</p>
              </div>
              <div>
                <p>Etat</p>
                <p v-if="error.state === 0">A traiter</p>
                <p v-else-if="error.state === 1">En cours</p>
                <p v-else-if="error.state === 2">Résolue</p>
              </div>
              <div>
                <p>Date</p>
                <p>{{ formatDate(error.date_create) }}</p>
              </div>
              <div>
                <p>Message</p>
                <p>{{ error.body }}</p>
              </div>
              <div>
                <p>Média</p>
                <img src="../../public/lockerdirty.jpg" alt="Incident Media" />
              </div>
            </div>
          </div>
          <div class="answer_button_container">
            <button class="answer_button">Répondre</button>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Chargement...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, defineProps } from 'vue';
import axios from 'axios';

const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

const error = ref(null);  // Initialiser error à null pour vérifier la présence des données plus tard

const fetchErrors = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/error/incident/${props.id}`);
    console.log('API Response:', response.data);  // Debug log
    error.value = response.data;
  } catch (err) {
    console.error('Error fetching errors:', err);
  }
};

onMounted(() => {
  fetchErrors();
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR');
};



</script>

<style scoped>
* {
  margin: 0;
  font-family: "Roboto", sans-serif;
}

.main_container {
  display: flex;
  flex-direction: row;
  height: 100vh;
  overflow: hidden;
}

.component_container {
  width: 100%;
}

.sub_component_container {
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

h1 {
  margin-left: 16px;
  margin-top: 32px;
}

.report_incident_container {
  background-color: #f1f1f1;
  border: 2px solid #e3e0df;
  margin: 16px auto;
  border-radius: 10px;
  padding: 32px;
}

.report_incident_container h2 {
  padding-top: 16px;
  text-align: center;
}

.grid_incident {
  display: grid;
  grid-template-columns: repeat(2, 450px);
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  gap: 16px;
  font-size: 13px;
}

.grid_incident div {
  background-color: #e4e4e4;
  text-align: left;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 16px;
}

.grid_incident div:nth-child(7), .grid_incident div:nth-child(8) {
  height: 200px;
}

.grid_incident div p:nth-child(1) {
  font-size: 11px;
  color: #808080;
}

.grid_incident div img {
  align-self: baseline;
  height: 170px;
  object-fit: contain;
}

.answer_button_container {
  display: flex;
  justify-content: center;  
  width: 100%;
}

.answer_button {
  background: #FFA62B;
  border: none;
  padding: 12px 40px;
  border-radius: 6px;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
}

.answer_button:hover {
  opacity: .9;
}



</style>
