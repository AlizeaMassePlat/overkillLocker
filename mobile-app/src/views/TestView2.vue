<template>
  <ion-app>
    <ion-content>
      <Button primary @click="handleClick">Cliquez ici mobile 2</Button>
    </ion-content>
  </ion-app>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TestView2',
  methods: {
    handleClick() {
      alert('Button clicked 2!');
    },
  },
});
</script>
