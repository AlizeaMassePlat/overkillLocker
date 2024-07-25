<template>
  <div class="map-container">
    <div class="header-container" v-if="needHeader">
      <button class="back" @click="handleBackClick" v-if="!showReports">Retour</button>
      <!-- Affiche le bouton "Enregistrer" et "Ajouter une zone" si le mode draggable est activé -->
      <div class="actions" v-if="draggable">
        <button @click="handleAddMarker" class="action">+ Poser un curseur</button>
        <button @click="handleSave" class="action">Enregistrer</button>
      </div>
      <!-- Affiche le bouton "+ Ajouter une zone" si le mode draggable n'est pas activé -->
      <p v-else @click="setIsAddingZone" class="action">+ Ajouter une zone</p>
    </div>

    <div class="map">
      <!-- Bandeau de mode édition -->
      <div v-if="draggable" class="edit-mode-banner">
        Mode édition
      </div>

      <mgl-map
        :map-style="style"
        :center="center"
        :zoom="zoom"
        :pitch="pitch"
        :bearing="bearing"
        :maxBounds="maxBounds"
        :height="mapSize"
        ref="mapRef"
      >
        <mgl-navigation-control />

        <!-- Marqueurs dynamiques -->
        <mgl-marker
          v-for="(marker, index) in markers"
          :key="index"
          :coordinates="marker.coordinates"
          :draggable="draggable"
          @dragstart="() => onDragStart(index)"
          @drag="() => onDrag(index)"
          @dragend="() => onDragEnd(index)"
          :color="getMarkerColor(marker.type)"
        >
          <div v-if="!draggable">
            <mgl-popup >
              <h3>Bâtiment : {{  marker.place }}</h3>
              <p>Type : {{  marker.type }}</p>
              <p>Nombre de casiers : {{ marker.lockers ? marker.lockers.length : "" }}</p>
            </mgl-popup>
          </div>
          <div  v-else>
            <mgl-popup>
              <div class="flex-pop-up-mgl">
                <b>Bâtiment : </b>
                <input type="text" v-model="marker.place">
              </div>
              <div class="flex-pop-up-mgl">
                <p>Type : </p>
                <select v-model="marker.type">
                  <option value="Chargeur">Chargeur</option>
                  <option value="Equipements">Equipements</option>
                  <option value="Technique">Technique</option>
                </select>
              </div>
              <div class="flex-pop-up-mgl">
                <p>Casiers : </p>
                <input type="number" v-model.number="marker.locker_count" :min="minLockerCount(marker)" />
              </div>
            </mgl-popup>
          </div>
        </mgl-marker>
      </mgl-map>
    </div>

    <div>
      Marker coordinates:
      {{ markers.map(marker => marker.coordinates).join(', ') }}
    </div>
  </div>
</template>

<script setup>
import {
  MglMap,
  MglNavigationControl,
  MglMarker,
  MglPopup
} from '@indoorequal/vue-maplibre-gl';
import axios from 'axios';
import { ref, defineEmits, defineProps, onMounted } from 'vue';

// Map configuration
const style = 'https://api.maptiler.com/maps/streets/style.json?key=cQX2iET1gmOW38bedbUh';
const center = [-71.1167, 42.3770];
const zoom = 8;
const pitch = 45;
const bearing = -17.6;
const maxBounds = [
  [-71.1197, 42.3750], // South-West
  [-71.1147, 42.3790]  // North-East
];

// Marker coordinates
const markers = ref([]);

// Draggable state
const draggable = ref(false);

// Map reference
const mapRef = ref(null);

const groupLocker = ref([]);

// Props and emits
const props = defineProps({
  showList: Boolean,
  showReports: Boolean,
  needHeader: Boolean,
  mapSize: String
});

console.log(props);

const emit = defineEmits(['update:showList']);

const handleBackClick = () => {
  emit('update:showList', true);
};

const setIsAddingZone = () => {
  draggable.value = true; // Toggle draggable mode
};

const handleSave = async () => {
  draggable.value = false; // Disable draggable mode after saving
  await updateMarkers();
};

const handleAddMarker = () => {
  const newMarker = { 
    coordinates: [...center], 
    locker_count: 0, 
    initial_locker_count: 0, // Initialize initial locker count
    type: 'Chargeur', 
    place: '', 
    group_id: null  // Initialize with null to indicate a new marker
  };
  markers.value.push(newMarker); // Add new marker at the center of the map
  center.value = newMarker.coordinates; // Center the map on the new marker
};

const onDragStart = (index) => console.log(`Marker ${index + 1} dragstart`);
const onDrag = (index) => console.log(`Marker ${index + 1} drag`);
const onDragEnd = (index) => console.log(`Marker ${index + 1} dragend`);

const fetchGroupLockers = async () => {
  try {
    const response = await axios.get('http://localhost:3000/group-locker/find/all');
    groupLocker.value = response.data;

     // Transform the data to match the marker format
     markers.value = groupLocker.value.map(locker => {
      const [lng, lat] = locker.coordinate.split(',').map(Number);
      return {
        coordinates: [lng, lat],
        locker_count: locker.lockers.length,
        initial_locker_count: locker.lockers.length, // Store the initial locker count
        type: locker.locker_type,
        place: locker.name_place,
        group_id: locker.id,  // Include the group_id to track existing markers
        lockers: locker.lockers
      };
    });

    console.log(response.data);
  } catch (error) {
    console.error('Error fetching group lockers:', error);
  }
};

const updateMarkers = async () => {
  try {
    for (const marker of markers.value) {
      if (marker.group_id) {
        // Existing group locker
        const group = groupLocker.value.find(g => g.id === marker.group_id);
        if (group) {
          console.log(`Updating group locker with ID ${marker.group_id}`);
          console.log(`Marker locker count: ${marker.locker_count}`);
          console.log(`Initial locker count: ${marker.initial_locker_count}`);
          console.log(`Difference: ${marker.locker_count - marker.initial_locker_count}`);

          if (
            marker.place !== group.name_place ||
            marker.type !== group.locker_type ||
            marker.locker_count !== group.lockers.length
          ) {
            // Update group locker details in the database
            await axios.patch(`http://localhost:3000/group-locker/${group.id}`, {
              id: marker.group_id,
              name_place: marker.place,
              locker_type: marker.type,
              locker_count: marker.locker_count, // Update locker count as well
              coordinate: marker.coordinates.join(','),
            });

            const difference = marker.locker_count - marker.initial_locker_count;

            // If there are more lockers now, create the additional ones
            if (difference > 0) {
              for (let i = 0; i < difference; i++) {
                await axios.post('http://localhost:3000/locker', {
                  state: 0,
                  position: '',
                  is_open: false,
                  is_delete: false,
                  groupLocker: marker.group_id
                });
              }
            }

            // If there are fewer lockers now, delete the excess ones
            if (difference < 0) {
              const lockersToRemove = group.lockers.slice(difference);
              for (const locker of lockersToRemove) {
                await axios.delete(`http://localhost:3000/locker/${locker.id}`);
              }
            }
          }
        }
      } else {
        // New group locker
        const response = await axios.post('http://localhost:3000/group-locker/create', {
          name_place: marker.place,
          locker_type: marker.type,
          coordinate: marker.coordinates.join(','),
          locker_count: marker.locker_count, // Initialize with the locker count
        });
        const newGroupId = response.data.id;
        marker.group_id = newGroupId;  // Update the marker with the new group ID
        // Create lockers for the new group locker
        for (let i = 0; i < marker.locker_count; i++) {
          await axios.post('http://localhost:3000/locker/create', {
            group_id: newGroupId,
          });
        }
      }
    }
    console.log('Markers updated successfully.');
  } catch (error) {
    console.error('Error updating markers:', error);
  }
};

// Helper function to get marker color
const getMarkerColor = (type) => {
  switch (type) {
    case 'Chargeur':
      return '#42b0ca'; // Blue for Chargeur
    case 'Equipements':
      return '#ED7F10'; // Orange for Equipements
    default:
      return '#0000cc'; // Default blue
  }
};

// Center the map on the newly added marker when the map is mounted
onMounted(() => {
  if (mapRef.value) {
    // Ensure the map reference is available
    fetchGroupLockers();
    console.log('Map reference is set.');
  }
});

// Function to get minimum locker count for each marker
const minLockerCount = (marker) => {
  return marker.initial_locker_count;
};
</script>


<style lang="css">
@import "maplibre-gl/dist/maplibre-gl.css";

* {
  margin: 0;
  font-family: "Roboto", sans-serif;
}

.map-container {
  width: 100%;
  height: 100%;
}

.header-container {
  display: flex;    
  justify-content: space-between;
  align-items: center;
}

.edit-mode-banner {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 24px;
  background-color: #4a4a4a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  z-index: 100;
}

.map {
  position: relative;
  margin: 16px auto;
  height: calc(100% - 15px); /* Ajuste la hauteur en fonction du bandeau */
}

.action {
  border-radius: 8px;
  background-color: #ffa62b;
  color: white;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  padding: 8px 24px;
  font-size: 14px;
  cursor: pointer;
}

.actions {
  display: flex;
  gap: 16px;
}

.back {
  margin: 16px;
  background-color: #FFA62B;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  display: inline-block;
  border: none;
  cursor: pointer;
}

.marker-chargeur {
  background-color: blue;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
}

.marker-relais {
  background-color: red;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
}

.marker-other {
  background-color: green;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
}

.action-pop-up {
  text-align: center;
  border-radius: 8px;
  background-color: #ffa62b;
  color: white;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 16px;
}

.flex-pop-up-mgl {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
}

.flex-pop-up-mgl b {
  font-size: 14px;
} 

.flex-pop-up-mgl input {
  width: 100px;
}

.select-locker {
  width: 100%;
  border : 1px solid #FFA62B;
  background: #ECF0FF;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: start;
}



</style>
