<template>
  <ion-page>
    <ion-content :scroll="false">
      <div :class="{ 'blurred': showReserveView || showSummaryView }" class="map-container">
        <img :src="mapImage" alt="Map" class="map-image" ref="map" />
        <div
          v-for="pin in pins"
          :key="pin.id"
          class="pin"
          :class="{ 'blurred': showReserveView || showSummaryView }"
          :style="getPinStyle(pin)"
          @click="openReserveView(pin)"
        >
          {{ pin.number }}
        </div>
        <Filter />
      </div>
      <ReserveView v-if="showReserveView" @close="closeAllModals" @openSummary="openSummaryView" />
      <SummaryView v-if="showSummaryView" @close="closeAllModals" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import Filter from '@/components/ButtonFilter.vue';
import ReserveView from '@/views/ReserveView.vue';
import SummaryView from '@/views/SummaryView.vue';
import mapImage from '/mobileMap.jpg';

export default defineComponent({
  name: 'MapView',
  components: {
    IonPage,
    IonContent,
    Filter,
    ReserveView,
    SummaryView,
  },
  setup() {
    const map = ref<HTMLImageElement | null>(null);
    const showReserveView = ref(false);
    const showSummaryView = ref(false);

    const pins = ref([
      { id: 1, number: 37, x: 43, y: 25 },
      { id: 2, number: 12, x: 33, y: 50 },
      { id: 3, number: 21, x: 60, y: 70 },
      { id: 4, number: 28, x: 80, y: 66 },
    ]);

    const openReserveView = () => {
      showReserveView.value = true;
    };

    const closeAllModals = () => {
      showReserveView.value = false;
      showSummaryView.value = false;
    };

    const openSummaryView = () => {
      showReserveView.value = false;
      showSummaryView.value = true;
    };

    const getPinStyle = (pin) => {
      return {
        position: 'absolute',
        top: `${pin.y}%`,
        left: `${pin.x}%`,
        transform: 'translate(-50%, -50%)',
      };
    };

    return {
      map,
      pins,
      showReserveView,
      showSummaryView,
      openReserveView,
      closeAllModals,
      openSummaryView,
      getPinStyle,
      mapImage,
    };
  },
});
</script>

<style scoped>
.map-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.map-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  pointer-events: none;
}

.blurred {
  filter: blur(2px); /* Estompe l'image et les pins */
}

.pin {
  position: absolute;
  background-color: black;
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 2px solid white;
}
</style>
