<template>
  <div class="stats-card">
    <h3>{{ title }}</h3>
    <p>{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: 'StatsCardComponent',
  props: {
    title: String,
    value: Number
  }
};
</script>

<style scoped>
.stats-card {
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
</style>