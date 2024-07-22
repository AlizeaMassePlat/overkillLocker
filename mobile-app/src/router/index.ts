import {
	createRouter,
	createWebHistory,
} from "@ionic/vue-router";
import HomeView from "../views/HomeView.vue";
import MapView from "@/views/MapView.vue";
import ReserveView from "@/views/ReserveView.vue";
import StartView from "../views/StartView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import TabsComponent from "@/components/TabsComponent.vue";
import MyReservationsView from "../views/MyReservationsView.vue";
import ReservationDetailView from "@/views/ReservationDetailView.vue";
import AccountView from "@/views/AccountView.vue";
import EditAccountView from "@/views/EditAccountView.vue";
import ReportIncidentView from "@/views/ReportIncidentView.vue";

const routes = [
	{
		path: "/",
		name: "MapView",
		component: MapView,
	},
	{
		path: "/home",
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
		path: "/inscription",
		name: "RegisterView",
		component: RegisterView,
	},
	{
		path: "/",
		component: TabsComponent,
		children: [
			{
				path: "/",
				name: "MapView",
				component: MapView,
			},
			{
				path: "/reserver/:id",
				name: "Reserver",
				component: ReserveView,
				props: true,
			},
			{
				path: "mes-reservations",
				name: "MyReservationsView",
				component: MyReservationsView,
			},
			{
				path: "mes-reservations/detail/:id",
				name: "ReservationDetailView",
				component: ReservationDetailView,
				props: true,
			},
			{
				path: "mon-compte",
				name: "AccountView",
				component: AccountView,
			},
			{
				path: "mon-compte/editer",
				name: "EditAccountView",
				component: EditAccountView,
			},
			{
				path: "signaler-un-incident",
				name: "ReportIncidentView",
				component: ReportIncidentView,
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;