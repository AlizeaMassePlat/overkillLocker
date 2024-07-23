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
  width: 100%;
}
/* Add your styles here */
.users-view {
  display: flex;
}

.content {
  flex-grow: 1;
  padding: 20px;
}

.back-button {
  background-color: #ffa62b;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  margin-bottom: 20px;
}

.back-button:hover {
  background-color: #e59426;
}
</style>
