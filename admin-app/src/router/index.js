import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import DashboardView from '../views/DashboardView.vue';
import UsersView from '../views/UsersView.vue';
import CreateUserView from '../views/CreateUserView.vue';
import ReservationsView from '../views/ReservationsView.vue';
import CreateReservationView from '../views/CreateReservationView.vue';
import LockersView from '../views/LockersView.vue';
import CreateLockerView from '../views/CreateLockerView.vue';
import CreateGroupView from '../views/CreateGroupView.vue';
import ReportsView from '../views/ReportsView.vue';
import IncidentReportView from '../views/IncidentReportView.vue';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/connexion',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/tableau-de-bord',
    name: 'DashboardView',
    component: DashboardView
  },
  {
    path: '/utilisateurs',
    name: 'UsersView',
    component: UsersView
  },
  {
    path: '/utilisateurs/creer',
    name: 'CreateUserView',
    component: CreateUserView
  },
  {
    path: '/reservations',
    name: 'ReservationsView',
    component: ReservationsView
  },
  {
    path: '/reservations/creer',
    name: 'CreateReservationView',
    component: CreateReservationView
  },
  {
    path: '/casiers',
    name: 'LockersView',
    component: LockersView
  },
  {
    path: '/casiers/creer',
    name: 'CreateLockerView',
    component: CreateLockerView
  },
  {
    path: '/groupes/creer',
    name: 'CreateGroupView',
    component: CreateGroupView
  },
  {
    path: '/rapports',
    name: 'ReportsView',
    component: ReportsView
  },
  {
    path: '/rapports/incident/:id',
    name: 'IncidentReportView',
    component: IncidentReportView,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
