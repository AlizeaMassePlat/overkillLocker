<template>
  <button :class="buttonClass" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'lg'
    }
  },
  computed: {
    buttonClass() {
      return {
        'btn-lg': this.type === 'lg',
        'btn-sm': this.type === 'sm'
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
.btn-lg {
  border-radius: 8px;
  background-color: #ffa62b;
  width: 310px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 34px;
}
.btn-sm {
  border-radius: 8px;
  background-color: #ffa62b;
  width: 180px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 34px;
}
</style>
