<template>
  <div>
    <h1>Dashboard</h1>
    <div class="stats">
      <StatsCard title="Users" :value="132" />
      <StatsCard title="Reservations" :value="5042" />
      <StatsCard title="Lockers" :value="148" />
      <StatsCard title="Groups" :value="34" />
    </div>
    <CampusMap />
  </div>
</template>

<script>
import StatsCard from '../components/StatsCardComponent.vue';
import CampusMap from '../components/CampusMapComponent.vue';

export default {
  name: 'DashboardView',
  components: {
    StatsCard,
    CampusMap
  }
};
</script>

<style scoped>
.stats {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}
</style>
