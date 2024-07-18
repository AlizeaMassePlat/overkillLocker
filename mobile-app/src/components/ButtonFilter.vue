<template>
  <ion-fab vertical="top" horizontal="end" slot="fixed" @click="filterMap">
    <ion-fab-button class="custom-fab-button">
      <ion-icon :icon="tennisball" class="custom-icon"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonFab, IonFabButton, IonIcon } from '@ionic/vue';
import { tennisball } from 'ionicons/icons';

export default defineComponent({
  components: {
    IonFab,
    IonFabButton,
    IonIcon,
  },
  setup() {
    const filterMap = () => {
      console.log('Filter button clicked');
      // Logic to filter the map goes here
    };

    return {
      tennisball,
      filterMap,
    };
  },
});
</script>

<style scoped>
ion-fab {
  position: absolute;
  width: 50px;
  height: 60px;
  left: 300px;
  top: 200px;
}

.custom-fab-button {
  --background: #FFA62B;
  --box-shadow: none;
  --border-radius: 20px;
  width: 100%;
  height: 100%;
}

.custom-icon {
  color: black;
  font-size: 22px;
}
</style>
