<template>
  <div class="dashboard">
    <h1>Tableau de bord</h1>
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
* {
  margin: 0;
  font-family: "Roboto", sans-serif;
}

.mainContainer {
  display: flex;
  flex-direction: column; 
  justify-content: center;
  width: 100%;
  margin-top: 32px
}

.alertContainer, .statsContainer, .mapContainer {
  max-height: 12vh;
}

.statsContainer {
  margin-top: 32px;
  margin-bottom: 3%;
}

.mapContainer {
  margin-top: 16px;
}

</style>
