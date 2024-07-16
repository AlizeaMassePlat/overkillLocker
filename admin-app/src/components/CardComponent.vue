<template>
    <div class="card">
      <header class="card-header">
        <slot name="header"></slot>
      </header>
      <section class="card-body">
        <slot></slot>
      </section>
      <footer class="card-footer">
        <slot name="footer"></slot>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardComponent'
  };
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    background: white;
  }
  .card-header, .card-footer {
    margin-bottom: 8px;
  }
  </style>
  