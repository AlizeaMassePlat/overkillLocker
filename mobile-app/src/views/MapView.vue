<template>
  <ion-page>
    <ion-content :scroll="false">
      <div class="map-container">
        <img :src="mapImage" alt="Map" class="map-image" ref="map" />
        <div
          v-for="pin in pins"
          :key="pin.id"
          class="pin"
          :style="getPinStyle(pin)"
          @click="handlePinClick(pin)"
        >
          {{ pin.number }}
        </div>
      </div>
      <Filter />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import Filter from '@/components/ButtonFilter.vue';
import mapImage from '../../public/mobileMap.jpg';

export default defineComponent({
  name: 'CustomMap',
  components: {
    IonPage,
    IonContent,
    Filter,
  },
  setup() {
    const map = ref<HTMLImageElement | null>(null);

    const pins = ref([
      { id: 1, number: 37, x: 43, y: 25 },
      { id: 2, number: 12, x: 33, y: 50 },
      { id: 3, number: 21, x: 60, y: 70 },
      { id: 4, number: 28, x: 80, y: 66 },
    ]);

    const handlePinClick = (pin) => {
      alert(`Pin with number ${pin.number} clicked`);
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
      handlePinClick,
      mapImage,
      getPinStyle,
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
