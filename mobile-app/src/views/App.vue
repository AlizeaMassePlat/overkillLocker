<template>
  <ion-app>
    <router-view></router-view>
  </ion-app>
</template>

<script>
import { defineComponent } from 'vue';
import { IonApp } from '@ionic/vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp
  }
});
</script>
