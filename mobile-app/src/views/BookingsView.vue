<template>
	<ion-page>
		<ion-content>
			<MapComponent />
			<BackArrow
				v-if="isBookingsModalOpen"
				:is-open="isBookingsModalOpen"
				@click="navigateToRoot" />

				<div class="bookings-container">
					<div class="modal-header">
						<h2>Mes réservations</h2>
					</div>
					<div
						v-for="booking in bookings"
						:key="booking.id"
						:class="[
							'booking-item',
							{ 'active-booking': booking.status === 1 },
						]"
						@click="openBookingDetails(booking.id)">
						<div class="icon-container">
							<img :src="booking.image" alt="Icon" class="booking-icon" />
						</div>
						<div class="booking-details">
							<h3>{{ booking.number }}</h3>
							<p>{{ booking.date }}</p>
						</div>
						<ion-icon :icon="chevronForward" class="chevron-icon"></ion-icon>
					</div>
				</div>

			<ModalComponent
				:is-open="isBookingDetailModalOpen"
				@didDismiss="closeBookingDetailModal"
				class="booking-detail-modal"
				:initial-breakpoint="0.6"
				:breakpoints="[0, 0.6, 1]"
        >
					<ion-content >
						<div class="booking-details-container">
							<h2>Réservation {{ booking?.number }}</h2>
							<p>{{ booking?.date }}</p>
							<img
								:src="booking?.image"
								alt="Locker Image"
								class="booking-image" />
							<div v-if="booking?.status === 1">
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
					</ion-content>
			</ModalComponent>

			<ModalComponent
				:is-open="isGiveBackModalOpen"
				@didDismiss="closeGiveBackModal"
				class="giveback-modal">
				<div class="giveback-container">
					<Close @click="openBookingsModal" />
					<h2>Rendu !</h2>
					<p>Le status de votre réservation a été mis à jour.</p>
					<div class="link">
						<router-link @click="report" to=""
							>Signaler un incident ?</router-link
						>
					</div>
				</div>
			</ModalComponent>
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from "vue";
import { IonPage, IonContent, IonIcon } from "@ionic/vue";
import MapComponent from "@/components/MapComponent.vue";
import BackArrow from "@/components/ButtonBackArrow.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import Close from "@/components/ButtonClose.vue";
import ModalComponent from "@/components/ModalComponent.vue";
import { chevronForward } from "ionicons/icons";
import { useRouter, useRoute } from "vue-router";
import equipmentImg from "/equipment.png";
import lockerImg from "/locker.png";

export default defineComponent({
	name: "BookingsView",
	components: {
		IonPage,
		IonContent,
		IonIcon,
		MapComponent,
		BackArrow,
		ButtonComponent,
		Close,
		ModalComponent,
	},
	setup() {
		const router = useRouter();
		const route = useRoute();

		const bookings = ref([
			{
				id: 7,
				number: "N°125689",
				date: "en cours",
				status: 1,
				image: lockerImg,
			},
			{
				id: 6,
				number: "N°125688",
				date: "12 mai 2024",
				status: 0,
				image: lockerImg,
			},
			{
				id: 5,
				number: "N°125687",
				date: "23 mars 2024",
				status: 0,
				image: equipmentImg,
			},
			{
				id: 4,
				number: "N°125686",
				date: "15 janvier 2024",
				status: 0,
				image: lockerImg,
			},
			{
				id: 3,
				number: "N°125685",
				date: "14 janvier 2024",
				status: 0,
				image: equipmentImg,
			},
			{
				id: 2,
				number: "N°125684",
				date: "1 octobre 2023",
				status: 0,
				image: lockerImg,
			},
			{
				id: 1,
				number: "N°125683",
				date: "13 octobre 2023",
				status: 0,
				image: lockerImg,
			},
		]);

		const isBookingsModalOpen = ref(true);
		const isBookingDetailModalOpen = ref(false);
		const isGiveBackModalOpen = ref(false);
		const selectedBookingId = ref<number | null>(null);

		const booking = ref<{
			id: number;
			number: string;
			date: string;
			status: number;
			image: string;
		} | null>(null);

		const closeBookingsModal = () => {
			isBookingsModalOpen.value = false;
			router.push("/");
		};

		const closeBookingDetailModal = () => {
			isBookingDetailModalOpen.value = false;
		};

		const closeGiveBackModal = () => {
			isGiveBackModalOpen.value = false;
		};

		const openBookingsModal = () => {
			closeBookingDetailModal();
			closeGiveBackModal();
			isBookingsModalOpen.value = true;
		};

		const openBookingDetails = (id: number) => {
			closeBookingsModal();

			const foundBooking = bookings.value.find((res) => res.id === id);
			if (foundBooking) {
				booking.value = foundBooking;
				selectedBookingId.value = id;
				isBookingDetailModalOpen.value = true;
			}
		};

		const giveBack = () => {
			closeBookingDetailModal();
			isGiveBackModalOpen.value = true;
		};

		const report = () => {
			closeBookingsModal();
			closeBookingDetailModal();
			closeGiveBackModal();
			router.push({ name: "ReportIncidentView" });
		};

		const navigateToRoot = () => {
			router.push("/");
		};

		onMounted(() => {
			isBookingsModalOpen.value = true;
		});

		watch(
			() => route.fullPath,
			(newPath) => {
				if (newPath === "/mes-reservations") {
					isBookingsModalOpen.value = true;
				}
			}
		);

		return {
			bookings,
			isBookingsModalOpen,
			isBookingDetailModalOpen,
			isGiveBackModalOpen,
			booking,
			openBookingDetails,
			closeBookingsModal,
			closeBookingDetailModal,
			closeGiveBackModal,
			openBookingsModal,
			giveBack,
			report,
			chevronForward,
			navigateToRoot,
		};
	},
});
</script>

<style scoped>

.bookings-container {
	position: fixed;
	left: 0;
	top: 10%;
	width: 100%;
	background: white;
	z-index: 2000;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	overflow-y: auto;
	height: 90%;
		padding-right: 16px;
	padding-left: 16px;
}

.modal-header {
	display: flex;
	align-items: center;
}

.modal-header h2 {
	flex-grow: 1;
	text-align: center;
	padding: 20px;
}


.booking-item {
	display: flex;
	align-items: center;
	width: 100%;
	height: 80px;
	padding: 10px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	margin: 5px 0;
	cursor: pointer;
}

.booking-item.active-booking {
	background-color: #ffc576;
	border-color: #ffc576;
}

.icon-container {
	width: 50px;
	height: 70px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
}

.booking-icon {
	max-width: 100%;
	max-height: 100%;
	height: auto;
}

.booking-details {
	flex-grow: 1;
	text-align: left;
}

.chevron-icon {
	font-size: 24px;
	color: #000;
}

.booking-details-container {
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
	padding: 20px;
}

.booking-image {
	width: auto;
	max-width: 100px;
	height: 80px;
	min-height: 50px;
	margin: 20px 0;
}

.link a {
	text-decoration: none;
	color: #a8a5a6;
	margin-top: 10%;
	font-size: 12px;
	display: flex;
	flex-direction: row;
	justify-content: center;
}

.giveback-modal {
	--height: 40%;
	--width: 80%;
	--border-radius: 16px;
	--box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
	--margin: auto;
}

.giveback-container {
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
	padding: 20px;
	justify-content: center;
	height: 100%;
	gap: 15px;
}
</style>
