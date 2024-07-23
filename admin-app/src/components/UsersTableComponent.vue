<template>
  <div class="tableContainer">
    <TableComponent :headers="headers" :rows="formattedUsers" @deleteUser="deleteUser" />
  </div>
</template>

<script>
import TableComponent from './TableComponent.vue';

export default {
  name: 'UsersTableComponent',
  components: {
    TableComponent
  },
  data() {
    return {
      users: [
        {  firstname: 'John', lastname: 'Doe', email: 'john@example.com', promotion: '2022', role: 'Admin', card_number: '1234-5678' },
        {  firstname: 'Jane', lastname: 'Smith', email: 'jane@example.com', promotion: '2021', role: 'User', card_number: '2345-6789' },
        {  firstname: 'Jack', lastname: 'White', email: 'jack@example.com', promotion: '2020', role: 'Moderator', card_number: '3456-7890' },
        {  firstname: 'Jill', lastname: 'Brown', email: 'jill@example.com', promotion: '2019', role: 'User', card_number: '4567-8901' },
        {  firstname: 'James', lastname: 'Green', email: 'james@example.com', promotion: '2018', role: 'User', card_number: '5678-9012' },  
      ],
      headers: ['Firstname', 'Lastname', 'Email', 'Promotion', 'Role', 'Card Number', 'Action']
    };
  },
  computed: {
    formattedUsers() {
      return this.users.map(user => ({
        ...user,
        action: user.id
      }));
    }
  },
  methods: {
    deleteUser(userId) {
      this.users = this.users.filter(user => user.id !== userId);
    }
  }
};
</script>

<style>


</style>
