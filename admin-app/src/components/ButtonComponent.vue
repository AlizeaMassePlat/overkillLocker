<template>
  <button :class="buttonClass" @click="handleClick">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'lg'
    },
    label: {
      type: String,
      default: 'Button'
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
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
.btn-sm {
  border-radius: 8px;
  background-color: #ffa62b;
  width: 180px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;}
</style>
