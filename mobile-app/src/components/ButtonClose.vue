<template>
  <ion-fab vertical="top" horizontal="end" slot="fixed" @click="closeModal">
    <ion-fab-button class="custom-fab-button">
      <ion-icon :icon="close" class="custom-icon"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { modalController } from '@ionic/vue';
import { IonFab, IonFabButton, IonIcon } from '@ionic/vue';
import { close } from 'ionicons/icons';

export default defineComponent({
  components: {
    IonFab,
    IonFabButton,
    IonIcon,
  },
  setup() {
    const closeModal = async () => {
      await modalController.dismiss();
    };

    return {
      close,
      closeModal,
    };
  },
});
</script>

<style scoped>
.custom-fab-button {
  --background: black;
  --box-shadow: none;
  --border-radius: 50%;
  --padding-start: 4px;
  --padding-end: 4px;
  --padding-top: 4px;
  --padding-bottom: 4px;
  width: 40px;
  height: 40px;
}

.custom-icon {
  color: white;
  font-size: 18px;
}
</style>
