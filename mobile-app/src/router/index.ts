import { createRouter, createWebHistory } from "@ionic/vue-router";
import StartView from "../views/StartView.vue";
import LandingView from "@/views/LandingView.vue";
import LoginView from "../views/LoginView.vue";
import TabsComponent from "@/components/TabsComponent.vue";
import BookingsView from "../views/BookingsView.vue";
import AccountView from "../views/AccountView.vue";
import ReportIncidentView from "../views/ReportIncidentView.vue";
import PasswordView from "../views/PasswordView.vue";

const routes = [
    {
        path: "/",
        name: "LandingView",
        component: LandingView,
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
        path: "/",
        component: TabsComponent,
        children: [
            {
                path: "/",
                name: "LandingView",
                component: LandingView,
            },
            {
                path: "/mes-reservations",
                name: "BookingsView",
                component: BookingsView,
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
        ],
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;