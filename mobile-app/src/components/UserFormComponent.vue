<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>User Form</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <form @submit.prevent="handleSubmit" class="form">
        <ion-item>
          <ion-label position="floating" for="name">Name</ion-label>
          <ion-input type="text" id="name" v-model="name"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating" for="email">Email</ion-label>
          <ion-input type="email" id="email" v-model="email"></ion-input>
        </ion-item>
        <ion-button expand="full" type="submit">Save</ion-button>
      </form>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';

export default defineComponent({
  name: 'UserFormComponent',
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton
  },
  setup() {
    const name = ref('');
    const email = ref('');

    const handleSubmit = () => {
      // Handle save logic here
      console.log('Save user', name.value, email.value);
    };

    return {
      name,
      email,
      handleSubmit
    };
  }
});
</script>

<style scoped>
.form {
  padding: 16px;
}
</style>
