<template>
  <ion-app>
    <ion-content>
      <router-link to="/test">
        <Button primary>Cliquez ici mobile</Button>
      </router-link>
    </ion-content>
  </ion-app>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TestView',
});
</script>
