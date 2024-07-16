<template>
  <ion-modal :is-open="visible" @didDismiss="close">
    <ion-header>
      <ion-toolbar>
        <ion-title>
          <slot name="header">Default Header</slot>
        </ion-title>
        <ion-buttons slot="end">
          <ion-button @click="close">X</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <section class="modal-body">
        <slot>Default Body</slot>
      </section>
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        <slot name="footer">
          <ion-button expand="full" @click="close">Close</ion-button>
        </slot>
      </ion-toolbar>
    </ion-footer>
  </ion-modal>
</template>

<script>
import { defineComponent } from 'vue';
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonFooter } from '@ionic/vue';

export default defineComponent({
  name: 'ModalComponent',
  components: {
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
    IonFooter
  },
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
});
</script>

<style scoped>
.modal-body {
  padding: 16px;
}
</style>
