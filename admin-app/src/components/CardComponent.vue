<template>
    <div class="card">
      <div>
        <slot name="header"></slot>
      </div>
      <div class="card-body">
        <slot name="body"></slot>
      </div>
    </div>
</template>
  
  <script>
  export default {
    name: 'CardComponent'
  };
  </script>
  
  <style scoped>
  .card{
    width: 230px;
    padding: 10px;
    height : 120px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;    
  }
  .card-header {
    background: #f0f0f0;
    padding: 10px;
    
  }
  .card-body {
    display: flex;
    justify-content: end;
    font-weight: bold;
    font-size: 22px;
  }
  </style>
  