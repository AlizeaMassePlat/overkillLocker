<template>
  <ion-content>
    <ion-grid>
      <ion-row>
        <ion-col size="auto"><strong>ID</strong></ion-col>
        <ion-col><strong>Name</strong></ion-col>
        <ion-col><strong>Email</strong></ion-col>
        <ion-col size="auto"><strong>Actions</strong></ion-col>
      </ion-row>
      <ion-row v-for="user in users" :key="user.id">
        <ion-col size="auto">{{ user.id }}</ion-col>
        <ion-col>{{ user.name }}</ion-col>
        <ion-col>{{ user.email }}</ion-col>
        <ion-col size="auto">
          <ion-button size="small" @click="viewDetails(user.id)">View</ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
</template>

<script>
import { defineComponent } from 'vue';
import { IonContent, IonGrid, IonRow, IonCol, IonButton } from '@ionic/vue';

export default defineComponent({
  name: 'UsersTableComponent',
  components: {
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton
  },
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  methods: {
    viewDetails(id) {
      // Emit an event to the parent component to view details
      this.$emit('view-details', id);
    }
  }
});
</script>

<style scoped>
/* Add your styles here */
ion-grid {
  width: 100%;
}

ion-col {
  border-bottom: 1px solid #ddd;
  padding: 8px;
}

ion-row:first-of-type ion-col {
  border-bottom: 2px solid #ddd;
  font-weight: bold;
}

ion-button {
  --padding-start: 0;
  --padding-end: 0;
}
</style>
