<template>
  <div class="card">
    <div class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot name="img"></slot>
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
.card {
  width: 200px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}

.card-body {
  display: flex;
  justify-content: space-around;
  align-items: center; 
  font-weight: bold;
  font-size: 20px;

}

.card-body img {
  width: 20px;
  height: 20px;
}
</style>
