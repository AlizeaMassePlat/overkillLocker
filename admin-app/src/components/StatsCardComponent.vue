<template>
  <div class="stats">
    <CardComponent>
      <template v-slot:header>
        <p class="header_card">Utilisateur</p>
      </template>
      <template v-slot:img>
        <img src="@/assets/user.png" alt="user" class="card-image" />
      </template>
      <template v-slot:body>
        <p>{{ stats.utilisateur }}</p>
      </template>
    </CardComponent>
    <CardComponent>
      <template v-slot:header>
        <p class="header_card">Reservations</p>
      </template>
      <template v-slot:img>
        <img src="@/assets/resa.png" alt="reservations" class="card-image" />
      </template>
      <template v-slot:body>
        <p>{{ stats.reservations }}</p>
      </template>
    </CardComponent>
    <CardComponent>
      <template v-slot:header>
        <p class="header_card">Casiers</p>
      </template>
      <template v-slot:img>
        <img src="@/assets/lock.png" alt="lock" class="card-image" />
      </template>
      <template v-slot:body>
        <p>{{ stats.casiers }}</p>
      </template>
    </CardComponent>
    <CardComponent>
      <template v-slot:header>
        <p class="header_card">Rapports</p>
      </template>
      <template v-slot:img>
        <img src="@/assets/priority.png" alt="priority" class="card-image" />
      </template>
      <template v-slot:body>
        <p>{{ stats.rapports }}</p>
      </template>
    </CardComponent>
  </div>
</template>

<script>
import axios from 'axios';
import CardComponent from '@/components/CardComponent.vue';

export default {
  name: 'StatsCardComponent',
  components: {
    CardComponent
  },
  data() {
    return {
      stats: {
        utilisateur: 0,
        reservations: 0,
        casiers: 0,
        rapports: 0,
      }
    };
  },
  mounted() {
    this.fetchStats();
  },
  methods: {
    async fetchStats() {
      try {
        const [utilisateurRes, reservationsRes, casiersRes, rapportsRes] = await Promise.all([
          axios.get('http://localhost:3000/user/count'), // Remplacez par l'URL de votre API
          axios.get('http://localhost:3000/reservation/count'), // Remplacez par l'URL de votre API
          axios.get('http://localhost:3000/locker/count'), // Remplacez par l'URL de votre API
          axios.get('http://localhost:3000/log/count') // Remplacez par l'URL de votre API
        ]);

        console.log('utilisateurRes:', utilisateurRes.data);
        console.log('reservationsRes:', reservationsRes.data);
        console.log('casiersRes:', casiersRes.data);
        console.log('rapportsRes:', rapportsRes.data);

        this.stats.utilisateur = utilisateurRes.data;
        this.stats.reservations = reservationsRes.data;
        this.stats.casiers = casiersRes.data;
        this.stats.rapports = rapportsRes.data;
      } catch (error) {
        console.error('Erreur lors de la récupération des statistiques:', error);
      }
    }
  }
};
</script>

<style scoped>
.stats {
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
}

.card-image {
  width: 40px;
  height: 40px;
}

.header_card {
  margin: 0;
}
</style>
