<template>
	<ion-page>
		<BackArrow @click="goBack" />
		<ion-content class="overlay-content">
			<div class="reservation-details-container">
				<div class="reservation-details">
					<h2>Réservation {{ reservation.number}}</h2>
					<p>{{ reservation.date }}</p>
					<img
						:src="reservation.image"
						alt="Locker Image"
						class="reservation-image" />
					<div v-if="reservation.status === 1">
						<div class="button-container">
							<ButtonComponent class="btn-sm" @click="giveBack"
								>Rendre</ButtonComponent
							>
						</div>
						<div class="link">
							<router-link @click="report" to=""
								>Signaler un incident ?</router-link
							>
						</div>
					</div>
					<div v-else>
						<div class="link">
							<router-link @click="report" to=""
								>Signaler un incident ?</router-link
							>
						</div>
					</div>
				</div>
			</div>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { IonPage, IonContent, IonButton } from "@ionic/vue";
import equipmentImg from "/equipment.png";
import lockerImg from "/locker.png";
import BackArrow from "@/components/ButtonBackArrow.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";

const route = useRoute();
const router = useRouter();
const reservationId = route.params.id;

const reservation = ref({
	id: 0,
	number: "",
	date: "",
	status: 0,
	image: "",
});

const reservationsData = [
	{ id: 7, number: "N°125689", date: "en cours", status: 1, image: lockerImg },
  { id: 6, number: "N°125688", date: "12 mai 2024", status: 0, image: lockerImg },
  { id: 5, number: "N°125687", date: "23 mars 2024", status: 0, image: equipmentImg },
  { id: 4, number: "N°125686", date: "15 janvier 2024", status: 0, image: lockerImg },
  { id: 3, number: "N°125685", date: "14 janvier 2024", status: 0, image: equipmentImg },
  { id: 2, number: "N°125684", date: "1 octobre 2023", status: 0, image: lockerImg },
  { id: 1, number: "N°125683", date: "13 octobre 2023", status: 0, image: lockerImg },
];

onMounted(() => {
	const foundReservation = reservationsData.find(
		(res) => res.id === parseInt(reservationId)
	);
	if (foundReservation) {
		reservation.value = foundReservation;
	}
});

function goBack() {
	router.push({ name: "MyReservationsView" });
}

function giveBack() {
	alert("Rendu !");
}

function report() {
	router.push({ name: "ReportIncidentView" });
}
</script>

<style scoped>
.overlay-content {
	position: fixed;
	top: 40%;
	left: 0;
	width: 100%;
	height: 60%;
	background: white;
	z-index: 10;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
}

.reservation-details-container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
}

.reservation-details {
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
}

.reservation-image {
	width: auto;
	max-width: 100px;
	height: 80px;
	min-height: 50px;
	margin: 20px 0;
}

.button-container {
	display: flex;
	justify-content: center;
	width: 100%;
	margin-bottom: 10px;
}

.link a {
  text-decoration: none;
  color: #a8a5a6 ;
  margin-top: 10%;
  font-size: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
