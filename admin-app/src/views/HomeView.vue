<template>
  <div>
    <ButtonComponent v-model:value="test" :onClick="handleButtonClick" />
    <p>Test value in parent: {{ test }}</p>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import ButtonComponent from '../components/ButtonComponent.vue'; 

export default defineComponent({
  name: "HomeView",
  components: {
    ButtonComponent,
  },
  setup() {
    const test = ref("toto"); 

    const handleButtonClick = () => {
      console.log('Button clicked in parent component');
    };

    return {
      test,
      handleButtonClick,
    };
  },
});
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>
