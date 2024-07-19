<template>
  <ion-fab vertical="top" horizontal="start" slot="fixed" @click="goHome">
    <ion-fab-button class="custom-fab-button">
      <ion-icon :icon="arrowBack" class="custom-icon"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { IonFab, IonFabButton, IonIcon } from '@ionic/vue';
import { arrowBack } from 'ionicons/icons';

export default defineComponent({
  components: {
    IonFab,
    IonFabButton,
    IonIcon,
  },
  setup() {
    const router = useRouter();

    const goHome = () => {
      router.push('/');
    };

    return {
      arrowBack,
      goHome,
    };
  },
});
</script>

<style scoped>
.custom-fab-button {
  --background: black;
  --box-shadow: none;
  --border-radius: 50%;
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 8px;
  --padding-bottom: 8px;
  width: 40px;
  height: 40px;
}

.custom-icon {
  color: white;
  font-size: 20px;
}
</style>
