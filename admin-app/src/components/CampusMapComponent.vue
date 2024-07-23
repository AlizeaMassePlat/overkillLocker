<template>
  <div class="map-container">
    <img :src="mapImage" alt="Map" class="map-image" ref="map" />
    <div
      v-for="pin in pins"
      :key="pin.id"
      class="pin"
      :style="getPinStyle(pin)"
      @click="pinClicked(pin)">
      {{ pin.number }}
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import mapImage from '@/assets/mobileMap.jpg';

export default defineComponent({
  name: 'MapComponent',
  components: {},
  setup(_, { emit }) {
    const map = ref(null);
    const pins = ref([
      { id: 1, number: 37, x: 43, y: 25 },
      { id: 2, number: 12, x: 33, y: 50 },
      { id: 3, number: 21, x: 60, y: 70 },
      { id: 4, number: 28, x: 80, y: 66 },
    ]);

    const pinClicked = (pin) => {
      emit('pin-clicked', pin);
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
      pinClicked,
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
  display: flex;
  justify-content: center;
}

.map-image {
  width: 100%;
  height: 50vh;
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
