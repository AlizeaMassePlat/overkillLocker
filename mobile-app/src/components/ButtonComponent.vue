<template>
  <ion-button :class="buttonClass" @click="handleClick">
    <slot></slot>
  </ion-button>
</template>

<script>
import { defineComponent } from 'vue';
import { IonButton } from '@ionic/vue';

export default defineComponent({
  name: 'ButtonComponent',
  components: {
    IonButton
  },
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
});
</script>

<style scoped>
.btn-primary {
  --background: blue;
  --color: white;
}

.btn-secondary {
  --background: gray;
  --color: white;
}

.btn-danger {
  --background: red;
  --color: white;
}
</style>
