<template>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <button @click="viewDetails(user.id)">View</button>
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  export default {
    name: 'UsersTableComponent',
    props: {
      users: Array
    },
    methods: {
      viewDetails(id) {
        // Emit an event to the parent component to view details
        this.$emit('view-details', id);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  