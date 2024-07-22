<template>
  <div class="users-view">
    <div class="content">
      <button class="back-button">Retour</button>
      <h1>Utilisateurs</h1>
      <UserFormComponent 
      />
    </div>
  </div>
</template>

<script>
import UserFormComponent from '../components/UserFormComponent.vue';

export default {
  name: 'UsersView',
  components: {
    UserFormComponent
  }
};
</script>

<style scoped>
/* Styles pour la vue principale */
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
