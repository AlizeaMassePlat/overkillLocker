import { createRouter, createWebHistory } from "@ionic/vue-router";
import HomeView from "../views/HomeView.vue";
import StartView from "../views/StartView.vue";
import LoginView from "../views/LoginView.vue";
import ReserveView from "../views/ReserveView.vue";
import MyReservationsView from "../views/MyReservationsView.vue";
import AccountView from "../views/AccountView.vue";
import ReportIncidentView from "../views/ReportIncidentView.vue";
import PasswordView from "../views/PasswordView.vue";

const routes = [
	{
		path: "/",
		name: "HomeView",
		component: HomeView,
	},
	{
		path: "/demarrer",
		name: "StartView",
		component: StartView,
	},
	{
		path: "/connexion",
		name: "LoginView",
		component: LoginView,
	},
	{
		path: "/motdepasse",
		name: "PasswordView",
		component: PasswordView,
	},

	{
		path: "/reserver",
		name: "ReserveView",
		component: ReserveView,
	},
	{
		path: "/mes-reservations",
		name: "MyReservationsView",
		component: MyReservationsView,
	},
	
	{
		path: "/mon-compte",
		name: "AccountView",
		component: AccountView,
	},
	
	{
		path: "/signaler-un-incident",
		name: "ReportIncidentView",
		component: ReportIncidentView,
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
