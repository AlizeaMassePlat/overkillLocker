<template>
    <button @click="deleteUser"><img src="@/assets/deluser.png" class="deluserimg" /></button>
  </template>
  
  <script>
  export default {
    name: 'ActionButton',
    props: {
      userId: Number
    },
    methods: {
      deleteUser() {
        this.$emit('deleteUser', this.userId);
      }
    }
  };
  </script>
  
  <style scoped>
  button {
  all: unset;
  display: inline-block; /* Assure que le bouton reste en ligne */
}

    .deluserimg {
        width: 30px;
        height: 30px;
        
    }
  
  
  </style>
  