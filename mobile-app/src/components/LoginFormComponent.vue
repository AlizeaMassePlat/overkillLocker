<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <form @submit.prevent="handleSubmit" class="form">
        <ion-item>
          <ion-label position="floating" for="username">Username</ion-label>
          <ion-input type="text" id="username" v-model="username"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating" for="password">Password</ion-label>
          <ion-input type="password" id="password" v-model="password"></ion-input>
        </ion-item>
        <ion-button expand="full" type="submit">Login</ion-button>
      </form>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';

export default defineComponent({
  name: 'LoginFormComponent',
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
    const username = ref('');
    const password = ref('');

    const handleSubmit = () => {
      // Handle login logic here
      console.log('Login with', username.value, password.value);
    };

    return {
      username,
      password,
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
