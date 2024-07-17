<template>
  <ion-page>
    <ion-content>
      <div class="reservations-container">
        <h2>My Reservations</h2>
        <ion-list>
          <ion-item v-for="reservation in reservations" :key="reservation.id" @click="viewDetails(reservation.id)">
            <ion-label>
              <h3>{{ reservation.id }}</h3>
              <p>{{ reservation.date }}</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const reservations = ref([
  // Example data
  { id: '125689', date: '2024-07-15' },
  { id: '125688', date: '2024-07-14' }
]);

function viewDetails(id: string) {
  router.push(`/my-reservations/detail/${id}`);
}
</script>

<style scoped>
.reservations-container {
  padding: 16px;
}
</style>
