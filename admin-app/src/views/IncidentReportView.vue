<template>
  <div>
    <h1>Incident Report</h1>
    <p>Incident ID: {{ $route.params.id }}</p>
    <!-- Incident report details here -->
  </div>
</template>

<script>
export default {
  name: 'IncidentReportView',
  props: ['id']
};
</script>

<style scoped>
/* Add your styles here */
</style>
