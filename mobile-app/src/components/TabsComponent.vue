<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button class="custom-tab-button" tab="mes-reservations" href="/mes-reservations">
          <ion-icon :icon="list" />
          <ion-label>Réservations</ion-label>
        </ion-tab-button>

        <ion-tab-button class="custom-tab-button" tab="mon-compte" href="/mon-compte">
          <ion-icon :icon="person" />
          <ion-label>Compte</ion-label>
        </ion-tab-button>

        <ion-tab-button class="custom-tab-button" tab="signaler-un-incident" href="/signaler-un-incident">
          <ion-icon :icon="warning" />
          <ion-label>Support</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';
import { list, person, warning } from 'ionicons/icons';

export default defineComponent({
  components: {
    IonPage,
    IonTabs,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonLabel,
    IonIcon,
  },
  data() {
    return {
      list,
      person,
      warning,
    };
  },
});
</script>


<style scoped>

.custom-tab-button {
  --color-selected: var(--ion-color-custom-tab-selected);
}

.custom-tab-button:hover {
  --color: var(--ion-color-custom-tab-hover);
}
</style>
