<template>
  <div class="mainContainer">
    <div class="formContainer">
      <UserFormComponent />
    </div>
  </div>
</template>

<script>
import UserFormComponent from '@/components/UserFormComponent.vue';
import NavigationComponent from '@/components/NavigationComponent.vue';

export default {
  name: 'CreateUserView',
  components: {
    UserFormComponent,
    NavigationComponent
  }
};
</script>

<style scoped>
.mainContainer {
  display: flex;
  flex-direction: row;
  width: 100%;
}
/* Add your styles here */
</style>
