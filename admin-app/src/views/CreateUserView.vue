<template>
  <div class="mainContainer">
    <div class="formContainer">
      <UserFormComponent />
    </div>
  </div>
</template>

<script>
import UserFormComponent from '@/components/UserFormComponent.vue';

export default {
  name: 'CreateUserView',
  components: {
    UserFormComponent,
  }
};

</script>

<style scoped>
.mainContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

</style>
