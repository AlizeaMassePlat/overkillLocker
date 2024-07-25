<template>
  <div class="map-container">
    <div class="map">

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
          :color="getMarkerColor(marker.type)"
        >
          <mgl-popup >
            <div class="pop-up-content">
              <h3>Bâtiment : {{  marker.place }}</h3>
              <p>Type : {{  marker.type }}</p>
              <p>
                <label for="userSelect">Utilisateur : </label>
                <select id="userSelect" v-model="selectedUserId">
                  <option v-for="user in users" :key="user.id" :value="user.id">
                    {{ user.firstname }} {{ user.lastname }}
                  </option>
                </select>
              </p>
              <p>Nombre de casiers : {{ marker.lockers ? marker.lockers.length : "" }}</p>
              <p @click="reserveLocker(marker.group_id)" class="action-pop-up">Réserver</p>
            </div>
          </mgl-popup>
        </mgl-marker>
      </mgl-map>
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
import { ref, defineProps, onMounted } from 'vue';

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

// Map reference
const mapRef = ref(null);

const groupLocker = ref([]);

const users = ref([]);
const selectedUserId = ref(null);

// Props and emits
const props = defineProps({
  showList: Boolean,
  showReports: Boolean,
  needHeader: Boolean,
  mapSize: String
});

console.log(props);


const fetchGroupLockers = async () => {
  try {
    const response = await axios.get('http://localhost:3000/group-locker/find/all/free');
    groupLocker.value = response.data;

    let userResponse = await axios.get('http://localhost:3000/user');
    users.value = userResponse.data

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

const reserveLocker = async (groupId) => {
  try {
    // Trouver le groupe de casiers correspondant à l'ID fourni
    const group = markers.value.find(marker => marker.group_id === groupId);

    if (!group) {
      alert('Groupe de casiers non trouvé.');
      return;
    }

    // Filtrer les casiers disponibles (état différent de 3)
    const availableLockers = group.lockers.filter(locker => locker.state !== 3);

    if (availableLockers.length === 0) {
      alert('Aucun casier disponible dans ce groupe.');
      return;
    }

    // Prendre le premier casier disponible pour la réservation
    const lockerToReserve = availableLockers[0];
    const reservationData = {
      state: 0, // Par exemple, état de la réservation
      reserve_type: 'Type de réservation',
      is_delete: false,
      id_locker: lockerToReserve.id,
      id_user: parseInt(selectedUserId.value), // Remplacez par l'ID de l'utilisateur connecté
    };

    const test = await axios.post('http://localhost:3000/reservation', reservationData);
    console.log(test);
    alert('Réservation créée avec succès.');
  } catch (error) {
    console.error('Erreur lors de la réservation:', error);
    alert('Erreur lors de la réservation.');
  }
};

console.log(users);
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

.pop-up-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
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

.flex-pop-up-mgl input {
  width: 100px;
}


</style>
