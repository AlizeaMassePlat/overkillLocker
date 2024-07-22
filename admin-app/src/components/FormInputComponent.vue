<template>
  <div class="form-input">
    <label :for="id">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      v-model="inputValue"
      @input="emitInput"
      class="input-field"
    />
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    label: String,
    type: {
      type: String,
      default: 'text'
    },
    value: [String, Number],
    error: String
  },
  data() {
    return {
      inputValue: this.value
    };
  },
  watch: {
    value(newValue) {
      this.inputValue = newValue;
    }
  },
  methods: {
    emitInput(event) {
      this.$emit('input', event.target.value);
    }
  }
};
</script>

<style scoped>
.form-input {
  border-radius: 8px;
  background-color: white;
  width: 300px;
  height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: #212121;
  font-size: 14px;
  padding-left: 9px;
  margin-top: 34px;
}
.input-field {
  width: 96%;
  height: 100%;
  border: none;
  outline: none;
}
.error {
  color: red;
  font-size: 12px;
}
</style>
