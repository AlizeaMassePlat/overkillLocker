<template>
  <ion-page>
    <ion-content :scroll="false">
      <MapComponent />
      <BackArrow v-if="isProfileModalOpen || isEditProfileModalOpen" @click="handleBackArrowClick" />
      
      <ModalComponent 
        :is-open="isProfileModalOpen" 
        @didDismiss="closeProfileModal" 
        :initial-breakpoint="0.92"
        :breakpoints="[0, 0.92, 1]"
      >
        <ion-content class="profile-overlay">
          <div class="profile-container" v-if="currentUser">
            <ion-avatar class="avatar">
              <img :src="currentUser?.gravatarUrl" alt="Avatar" />
            </ion-avatar>
            <h2>{{ currentUser?.name }}</h2>
            <p>{{ currentUser?.email }} | {{ currentUser?.phone }}</p>
            <div class="profile-actions">
              <div class="action-box">
                <ion-item button @click="openEditProfileModal">
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
                  <ion-label>Déconnexion</ion-item>
                </ion-item>
              </div>
            </div>
          </div>
        </ion-content>
      </ModalComponent>

      <!-- Edit Profile Modal -->
      <ModalComponent :is-open="isEditProfileModalOpen" @didDismiss="closeEditProfileModal" :initial-breakpoint="0.94"
        :breakpoints="[0, 0.94, 1]">
        <ion-content class="edit-profile-overlay">
          <div class="edit-profile-container">
            <h2>Compléter mon profil</h2>
            <!-- Add your edit profile form or content here -->
            <ion-item>
              <ion-label>Nom</ion-label>
              <ion-input v-model="currentUser?.name"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>Email</ion-label>
              <ion-input v-model="currentUser?.email"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>Téléphone</ion-label>
              <ion-input v-model="currentUser?.phone"></ion-input>
            </ion-item>
            <ButtonComponent @click="saveProfile">Sauvegarder</ButtonComponent>
          </div>
        </ion-content>
      </ModalComponent>
    </ion-content>
  </ion-page>
</template>


<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { IonPage, IonContent, IonItem, IonIcon, IonLabel, IonToggle, IonAvatar } from "@ionic/vue";
import { createOutline, notificationsOutline, mailOutline, listOutline, warningOutline, lockClosedOutline, logOutOutline } from "ionicons/icons";
import BackArrow from "@/components/ButtonBackArrow.vue";
import md5 from "md5";
import MapComponent from "@/components/MapComponent.vue";
import ModalComponent from "@/components/ModalComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";

const router = useRouter();
const route = useRoute();

const currentUserId = 1;

const users = ref([
  {
    id: 1,
    name: "Jane Doe",
    email: "smart@locker.fr",
    phone: "06 62 34 56 78",
    gravatarUrl: `https://www.gravatar.com/avatar/${md5("smart@locker.fr".trim().toLowerCase())}`,
  },
  {
    id: 2,
    name: "John Smith",
    email: "john@example.com",
    phone: "07 12 34 56 78",
    gravatarUrl: `https://www.gravatar.com/avatar/${md5("john@example.com".trim().toLowerCase())}`,
  },
]);

const currentUser = computed(() => users.value.find((user) => user.id === currentUserId) || { name: '', email: '', phone: '', gravatarUrl: '' });

const isProfileModalOpen = ref(true);
const isEditProfileModalOpen = ref(false);

const openEditProfileModal = () => {
  isProfileModalOpen.value = false;
  isEditProfileModalOpen.value = true;
};

const closeProfileModal = () => {
  isProfileModalOpen.value = false;
  router.push('/');
};

const closeEditProfileModal = () => {
  isEditProfileModalOpen.value = false;
  isProfileModalOpen.value = true;
};

const handleBackArrowClick = () => {
  if (isEditProfileModalOpen.value) {
    closeEditProfileModal();
  } else {
    closeProfileModal();
  }
};

const goToReservationsView = () => {
  closeProfileModal();
  router.push({ name: "BookingsView" });
};

const goToSupportView = () => {
  closeProfileModal();
  router.push({ name: "ReportIncidentView" });
};

const signOut = () => {
  closeProfileModal();
  router.push({ name: "LoginView" });
};

const saveProfile = () => {
  // Save the profile changes
  closeEditProfileModal();
};

onMounted(() => {
  if (route.path === "/mon-compte") {
    isProfileModalOpen.value = true;
  }
});

watch(
  () => route.fullPath,
  (newPath) => {
    if (newPath === "/mon-compte") {
      isProfileModalOpen.value = true;
    }
  }
);
</script>


<style scoped>
.profile-overlay, .edit-profile-overlay {
  position: fixed;
  left: 0;
  top: 5%;
  width: 100%;
  background: white;
  z-index: 20;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow-y: hidden;
}

.profile-container, .edit-profile-container {
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
