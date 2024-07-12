<template>
  <Button @click="handleClick">Click here 2</Button>
</template>

<script>
import Button from '../../../shared-components/Button.vue'

export default {
  name: 'TestView',
  components: {
    Button
  },
  methods: {
    handleClick() {
      console.log('Cliqué depuis l\'application web test');
    }
  }
}
</script>

<style>
#app {

}
</style>


