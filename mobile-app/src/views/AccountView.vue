<template>
  <ion-page>
    <BackArrow @click="$emit('close')" />
    <ion-content class="profile-overlay">
      <div class="profile-container" v-if="currentUser">
        <ion-avatar class="avatar">
          <img :src="currentUser.gravatarUrl" alt="Avatar" />
        </ion-avatar>
        <h2>{{ currentUser.name }}</h2>
        <p>{{ currentUser.email }} | {{ currentUser.phone }}</p>
        <div class="profile-actions">
          <div class="action-box">
            <ion-item button @click="goToEditAccountView(currentUser.id)">
              <ion-icon slot="start" :icon="createOutline"></ion-icon>
              <ion-label>Compléter mon profil</ion-label>
            </ion-item>
            <ion-item>
              <ion-icon slot="start" :icon="notificationsOutline"></ion-icon>
              <ion-label>Notifications</ion-label>
              <ion-toggle slot="end" checked></ion-toggle>
            </ion-item>
            <ion-item>
              <ion-icon slot="start" :icon="mailOutline"></ion-icon>
              <ion-label>Emails</ion-label>
              <ion-toggle slot="end" checked></ion-toggle>
            </ion-item>
          </div>
          <div class="action-box">
            <ion-item button @click="goToReservationsView">
              <ion-icon slot="start" :icon="listOutline"></ion-icon>
              <ion-label>Mes réservations</ion-label>
            </ion-item>
            <ion-item button @click="goToSupportView">
              <ion-icon slot="start" :icon="warningOutline"></ion-icon>
              <ion-label>Aide et Support</ion-label>
            </ion-item>
            <ion-item button>
              <ion-icon slot="start" :icon="lockClosedOutline"></ion-icon>
              <ion-label>Politique de confidentialité</ion-label>
            </ion-item>
          </div>
          <div class="action-box standalone">
            <ion-item button @click="signOut">
              <ion-icon slot="start" :icon="logOutOutline"></ion-icon>
              <ion-label>Déconnexion</ion-label>
            </ion-item>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { IonPage, IonContent, IonItem, IonIcon, IonLabel, IonToggle, IonAvatar } from "@ionic/vue";
import { createOutline, notificationsOutline, mailOutline, listOutline, warningOutline, lockClosedOutline, logOutOutline } from 'ionicons/icons';
import BackArrow from "@/components/ButtonBackArrow.vue";
import md5 from "md5";

const router = useRouter();

const currentUserId = 1;

const users = ref([
  {
    id: 1,
    name: 'Jane Doe',
    email: 'smart@locker.fr',
    phone: '06 62 34 56 78',
    gravatarUrl: `https://www.gravatar.com/avatar/${md5('smart@locker.fr'.trim().toLowerCase())}`
  },
  {
    id: 2,
    name: 'John Smith',
    email: 'john@example.com',
    phone: '07 12 34 56 78',
    gravatarUrl: `https://www.gravatar.com/avatar/${md5('john@example.com'.trim().toLowerCase())}`
  }
]);

const currentUser = computed(() => users.value.find(user => user.id === currentUserId));

const goToEditAccountView = (id) => {
  router.push({ name: 'EditAccountView', params: { id } });
};

const goToReservationsView = () => {
  router.push({ name: 'MyReservationsView' });
};

const goToSupportView = () => {
  router.push({ name: 'ReportIncidentView' });
};

const signOut = () => {
  router.push({ name: 'LoginView' });
};
</script>

<style scoped>
.profile-overlay {
  position: fixed;
  left: 0;
  top: 7%;
  width: 100%;
  background: white;
  z-index: 20;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow-y: hidden;
}
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
}

.profile-actions {
  width: 100%;
  padding: 15px;
}

.action-box {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
  padding: 10px;
}

ion-item {
  --border-color: transparent;
}
</style>
