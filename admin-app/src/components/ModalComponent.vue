<template>
    <div v-if="visible" class="modal-overlay">
      <div class="modal">
        <header class="modal-header">
          <slot name="header">Default Header</slot>
          <button @click="close">X</button>
        </header>
        <section class="modal-body">
          <slot>Default Body</slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <button @click="close">Close</button>
          </slot>
        </footer>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ModalComponent',
    props: {
      visible: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      close() {
        this.$emit('close');
      }
    }
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal {
    background: white;
    padding: 20px;
    border-radius: 8px;
    min-width: 300px;
  }
  .modal-header, .modal-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  </style>
  