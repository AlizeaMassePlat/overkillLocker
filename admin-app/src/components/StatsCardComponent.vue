<template>
  <div class="stats">
      <CardComponent>
        <template v-slot:header>
          <p>Utilisateur</p>
          </template>
          <template v-slot:img>
          <img src="@/assets/user.png" alt="user" class="card-image" />
          </template>
          <template v-slot:body>
          <p>2244</p>
        </template>
      </CardComponent>
      <CardComponent>
        <template v-slot:header>
          <p>Reservations</p>
          </template>
          <template v-slot:img>
          <img src="@/assets/resa.png" alt="reservations" class="card-image" />
          </template>
          <template v-slot:body>
          <p>22</p>
        </template>
      </CardComponent>
      <CardComponent>
        <template v-slot:header>
          <p>Casiers</p>
          </template>
          <template v-slot:img>
          <img src="@/assets/lock.png" alt="lock" class="card-image" />
          </template>
          <template v-slot:body>
          <p>44</p>
        </template>
      </CardComponent>
      <CardComponent>
        <template v-slot:header>
          <p>Rapports</p>
          </template>
          <template v-slot:img>
          <img src="@/assets/priority.png" alt="priority" class="card-image" />
          </template>
          <template v-slot:body>
          <p>4</p>
        </template>
      </CardComponent>
      
    </div>
</template>

<script>

import CardComponent from '@/components/CardComponent.vue';

export default {
  name: 'StatsCardComponent',
  components: {
    CardComponent
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
</style>