<template>
  <ion-page>
    <ion-content>
      <div class="map-container">
        <Filter/>
        <p>je suis la map qui me permet de booker</p>
        <ion-button expand="full" @click="clickPin">Pin</ion-button>

        <!-- Map implementation here -->
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { IonPage, IonContent, IonButton } from '@ionic/vue';  
import { onMounted } from 'vue';
import Filter from "@/components/ButtonFilter.vue";

const router = useRouter();

function clickPin() {
  router.push('/reserver');
}

onMounted(() => {
  // Initialize map
});
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 100%;
}
</style>
