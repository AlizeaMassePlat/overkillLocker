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
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    
  }
  .card-header {
    background: #f0f0f0;
    padding: 10px;
    font-size: 18px;
  }
  .card-body {
    display: flex;
    font-size: 32px;
    justify-content: end;
    font-weight: bold;
  }
  </style>
  