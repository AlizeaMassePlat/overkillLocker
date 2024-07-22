<template>
  <div class="homepage">
    <div class="navContainer">
      <NavigationComponent 
        :logo="require('../../public/img/SmartLocker.svg')" 
        :greyDot="require('../../public/img/greyDot.png')"
        :orangeDot="require('../../public/img/orangeDot.png')" 
        :links="navLinks"
        :activeLink="activeLink"
        @link-clicked="setComponent"
      />
    </div>
    <div class="componentContainer">
      <component :is="currentComponent" />
    </div>  
  </div>
</template>

<script>
import NavigationComponent from '@/components/NavigationComponent.vue';
import Dashboard from '@/views/DashboardView.vue';
import Reservations from '@/views/ReservationsView.vue';
import Utilisateur from '@/views/UsersView.vue';
import Casiers from '@/views/LockersView.vue';
import Rapports from '@/views/ReportsView.vue';

export default {
  name: 'App',
  components: {
    NavigationComponent,
    Dashboard,
    Reservations,
    Utilisateur,
    Casiers,
    Rapports,
  },
  data() {
    return {
      navLinks: [
        { component: 'Dashboard', label: 'Tableau de bord' },
        { component: 'Reservations', label: 'Reservations' },
        { component: 'Utilisateur', label: 'Utilisateur' },
        { component: 'Casiers', label: 'Casiers' },
        { component: 'Rapports', label: 'Rapports' }
      ],
      currentComponent: 'Dashboard', // Set a default component
      activeLink: 'Dashboard' // Initial active link
    };
  },
  methods: {
    setComponent(componentName) {
      console.log(`Switching to component: ${componentName}`); // Debug output
      this.currentComponent = componentName;
      this.activeLink = componentName;
    }
  }
};
</script>

<style scoped>
.homepage {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.navContainer {
  width: 20%;
}

.componentContainer {
  width: 80%;
  padding: 20px;
}
</style>
