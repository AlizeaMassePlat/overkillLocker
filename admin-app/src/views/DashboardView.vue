<template>
  <div>
    <h1>Dashboard</h1>
    <div class="stats">
      <CardComponent>
        <template v-slot:header>
          <p>Utilisateur</p>
        </template>
        <template v-slot:body>
          <p>2244</p>
        </template>
      </CardComponent>
      <CardComponent>
        <template v-slot:header>
          <p>Reservations</p>
        </template>
        <template v-slot:body>
          <p>44</p>
        </template>
      </CardComponent>
      <CardComponent>
        <template v-slot:header>
          <p>Casiers</p>
        </template>
        <template v-slot:body>
          <p>120</p>
        </template>
      </CardComponent>
      <CardComponent>
        <template v-slot:header>
          <p>Rapports</p>
        </template>
        <template v-slot:body>
          <p>4</p>
        </template>
      </CardComponent>
    </div>

  </div>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue';

export default {
  name: 'DashboardView',
  components: {
    CardComponent
  }
 
};
</script>

<style scoped>
.stats {
  display: flex;
  margin-bottom: 20px;
  justify-content: space-around;
  
}
</style>
