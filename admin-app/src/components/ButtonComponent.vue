<template>
    <button :class="buttonClass" @click="handleClick">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    name: 'ButtonComponent',
    props: {
      type: {
        type: String,
        default: 'primary'
      }
    },
    computed: {
      buttonClass() {
        return {
          'btn-primary': this.type === 'primary',
          'btn-secondary': this.type === 'secondary',
          'btn-danger': this.type === 'danger'
        };
      }
    },
    methods: {
      handleClick(event) {
        this.$emit('click', event);
      }
    }
  };
  </script>
  
  <style scoped>
  .btn-primary {
    background-color: blue;
    color: white;
  }
  .btn-secondary {
    background-color: gray;
    color: white;
  }
  .btn-danger {
    background-color: red;
    color: white;
  }
  </style>
  