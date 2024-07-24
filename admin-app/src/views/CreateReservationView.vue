<template>
  <div>
    <h1>Create Reservation</h1>
    <div>
      <CampusMapComponent />
    </div>
  </div>
</template>

<script>
import CampusMapComponent from '@/components/CampusMapComponent.vue';

export default {
  name: 'CreateReservationView',
  components: {
    CampusMapComponent
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
