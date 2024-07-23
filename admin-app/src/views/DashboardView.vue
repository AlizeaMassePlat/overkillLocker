<template>
  <div class="dashboard">
    <div class="titleContainer">
      <h1>Dashboard</h1>
    </div>
    <div class="mainContainer">
      <div class="alertContainer">
        <AlertInputComponent />
      </div>
      <div class="statsContainer">
        <StatsCardComponent />
      </div>
      <div class="mapContainer">
        <CampusMapComponent />
      </div>
    </div>
  </div>
</template>

<script>
import StatsCardComponent from '@/components/StatsCardComponent.vue';
import CampusMapComponent from '@/components/CampusMapComponent.vue';
import AlertInputComponent from '@/components/AlertInputComponent.vue';

export default {
  name: 'DashboardView',
  components: {
    StatsCardComponent,
    CampusMapComponent,
    AlertInputComponent

  }

};
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  
}
.titleContainer {
  width: 90%;
  display: flex;
  justify-content: start;
  margin-bottom: 3%;
}
.mainContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  
  width: 100%;
}

.alertContainer, .statsContainer, .mapContainer {
  width: 90%;
  max-width: 1200px; /* Vous pouvez ajuster cela selon vos besoins */
}

.statsContainer {
  margin-top: 3%;
  margin-bottom: 3%;
}

.mapContainer {
  margin-bottom: 3%; /* Ajouté pour un peu d'espacement en bas */
}

</style>
