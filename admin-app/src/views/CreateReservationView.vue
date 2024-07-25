<template>
  <div>
    <div class="header-container">
      <button class="back" @click="handleBackClick">Retour</button>
    </div>
    <div>
      <V2MapComponentReservation mapSize="500px" :needHeader="false" />
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';
import V2MapComponentReservation from '@/components/v2MapComponentReservation.vue';



// Event handlers
const handleBackClick = () => {
  // Emit an event or call a function to update the parent state
  emit('update:showCreateReservation', false);
};

// Define the emit function to communicate with parent
const emit = defineEmits(['update:showCreateReservation']);
</script>

<style scoped>
/* Add your styles here */
</style>
