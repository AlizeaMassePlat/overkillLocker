<template>
  <table>
    <thead>
      <tr>
        <th v-for="header in headers" :key="header">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows" :key="row.id">
        <td v-for="(value, key) in row" :key="key">
          <template v-if="key === 'action'">
            <ActionButton :userId="value" @deleteUser="handleDeleteUser" />
          </template>
          <template v-else>
            {{ value }}
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import ActionButton from './ActionButton.vue';

export default {
  name: 'TableComponent',
  components: {
    ActionButton
  },
  props: {
    headers: Array,
    rows: Array
  },
  methods: {
    handleDeleteUser(userId) {
      this.$emit('deleteUser', userId);
    }
  }
};
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 18px;
  text-align: center;
}

th {
  background-color: white ;
}

tbody tr:nth-child(odd) {
  background-color: #FFDAC1;
}

tbody tr:nth-child(even) {
  background-color: #ffffff;
}
</style>
