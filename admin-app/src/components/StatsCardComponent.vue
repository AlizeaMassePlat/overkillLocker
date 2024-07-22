<template>
  <div class="stats-card">
    <p>{{ title }}</p>
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
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

.stats-card {
  padding: 4px 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.234);
}

.stats-card p:nth-child(1) {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
}

.stats-card p:nth-child(2) {
  font-family: 'Roboto', sans-serif;
  font-size: 36px;
  margin: 16px;
  width: 100px;
}
</style>