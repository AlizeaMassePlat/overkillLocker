<template>
  <div class="map-container">
    <mgl-map
      :map-style="style"
      :center="center"
      :zoom="zoom"
      :pitch="pitch"
      :bearing="bearing"
      :maxBounds="maxBounds"
    >
      <mgl-navigation-control />
      <mgl-marker
        :coordinates="coordinates1"
        :draggable="draggable"
        @dragstart="onDragStart('Marker 1')"
        @drag="onDrag('Marker 1')"
        @dragend="onDragEnd('Marker 1')"
      />
      <mgl-marker
        :coordinates="coordinates2"
        :draggable="draggable"
        @dragstart="onDragStart('Marker 2')"
        @drag="onDrag('Marker 2')"
        @dragend="onDragEnd('Marker 2')"
      />
      <mgl-marker
        :coordinates="coordinates3"
        :draggable="draggable"
        @dragstart="onDragStart('Marker 3')"
        @drag="onDrag('Marker 3')"
        @dragend="onDragEnd('Marker 3')"
      />
      <mgl-marker
        :coordinates="coordinates4"
        :draggable="draggable"
        @dragstart="onDragStart('Marker 4')"
        @drag="onDrag('Marker 4')"
        @dragend="onDragEnd('Marker 4')"
      />
    </mgl-map>
  </div>
</template>

<script setup>
import {
  MglMap,
  MglNavigationControl,
  MglMarker
} from '@indoorequal/vue-maplibre-gl';
import { ref } from 'vue';

const style = 'https://api.maptiler.com/maps/streets/style.json?key=cQX2iET1gmOW38bedbUh';
const center = [-71.1167, 42.3770];
const zoom = 8;
const draggable = ref(true);
const pitch = 45;
const bearing = -17.6;

// Coordonnées pour les quatre marqueurs
const coordinates1 = ref([-71.1174, 42.3774]);
const coordinates2 = ref([-71.1163, 42.3771]);
const coordinates3 = ref([-71.1184, 42.37645]);
const coordinates4 = ref([-71.1162, 42.37625]);

// Définir les limites autour de Harvard
const maxBounds = [
  [-71.1197, 42.3750], // Sud-Ouest
  [-71.1147, 42.3790]  // Nord-Est
];

// Fonctions de gestion des événements de drag
const onDragStart = (marker) => console.log(`${marker} dragstart`);
const onDrag = (marker) => console.log(`${marker} drag`);
const onDragEnd = (marker) => console.log(`${marker} dragend`);
</script>

<style lang="css">
@import "maplibre-gl/dist/maplibre-gl.css";

.map-container {
  position: relative;
  width: 100%;
  height: 100%; /* Ajustez la hauteur selon vos besoins */
}
</style>
