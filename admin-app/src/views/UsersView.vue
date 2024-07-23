<template>
  <div class="users-view">
    <div class="content">
      <div class="buttonContainer">
        <div v-if="showCreateUser" class="left-button">
          <ButtonComponent type="sm" @click="hideCreateUserForm" label="Retour" />
        </div>
        <div class="right-button">
          <ButtonComponent v-if="!showCreateUser" type="sm" label="+ Ajouter un utilisateur" @click="showCreateUserForm" />
        </div>
      </div>
      <div v-if="showCreateUser">
        <CreateUserView />
      </div>
      <div v-else class="tableContainer">
        <UsersTableComponent />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
import UsersTableComponent from '@/components/UsersTableComponent.vue';
import CreateUserView from '@/views/CreateUserView.vue';

export default {
  name: 'UsersView',
  components: {
    UsersTableComponent,
    ButtonComponent,
    CreateUserView
  },
  data() {
    return {
      showCreateUser: false
    };
  },
  methods: {
    showCreateUserForm() {
      this.showCreateUser = true;
    },
    hideCreateUserForm() {
      this.showCreateUser = false;
    }
  }
};
</script>

<style scoped>
/* Styles pour la vue principale */

.content {
  flex-grow: 1;
  padding: 20px;
}

.buttonContainer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-button {
  order: 1;
}

.right-button {
  order: 2;
  margin-left: auto;
}

.back-button:hover {
  background-color: #e59426;
}
.tableContainer {
  margin-top: 10%;
}
</style>
