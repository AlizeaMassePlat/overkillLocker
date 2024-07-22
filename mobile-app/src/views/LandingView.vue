<template>
	<ion-page>
		<ion-content :scroll="false">
			<MapComponent @pin-clicked="handlePinClicked" />
			<BackArrow
				v-if="isReserveModalOpen"
				:is-open="isReserveModalOpen"
				@click="closeModal" />
			<ModalComponent
				:is-open="isReserveModalOpen"
				@didDismiss="closeModal"
				class="reserve-modal"
				:initial-breakpoint="0.5"
				:breakpoints="[0, 0.5, 1]">
				<div class="reserve-container">
					<h2>Voulez-vous réserver dans le Batiment A, emplacement B ?</h2>
					<p>Nombre de casiers disponibles:<br />{{ selectedPin?.number }}</p>
					<ButtonComponent type="sm" @click="openSummaryModal"
						>Réserver</ButtonComponent
					>
				</div>
			</ModalComponent>
			<ModalComponent
				:is-open="isSummaryModalOpen"
				@didDismiss="closeSummaryModal"
				class="summary-modal">
				<div class="summary-container">
					<Close @click="closeSummaryModal" />
					<h2>Félicitations !</h2>
					<p>
						Vous avez réservé<br />1 casier<br />bâtiment A<br />emplacement B
					</p>
					<img :src="qrCode" alt="QR Code" class="qr-code" />
					<p>code pin : <strong>4567</strong></p>
				</div>
			</ModalComponent>
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { IonPage, IonContent } from "@ionic/vue";
import MapComponent from "@/components/MapComponent.vue";
import BackArrow from "@/components/ButtonBackArrow.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import Close from "@/components/ButtonClose.vue";
import ModalComponent from "@/components/ModalComponent.vue";
import qrCode from "/qrcode.png";

export default defineComponent({
	name: "LandingView",
	components: {
		IonPage,
		IonContent,
		MapComponent,
		BackArrow,
		ButtonComponent,
		Close,
		ModalComponent,
	},
	setup() {
		const isReserveModalOpen = ref(false);
		const isSummaryModalOpen = ref(false);
		const selectedPin = ref(null);

		const handlePinClicked = (pin) => {
			selectedPin.value = pin;
			isReserveModalOpen.value = true;
		};

		const closeModal = () => {
			isReserveModalOpen.value = false;
			selectedPin.value = null;
		};

		const openSummaryModal = () => {
			isReserveModalOpen.value = false;
			isSummaryModalOpen.value = true;
		};

		const closeSummaryModal = () => {
			isSummaryModalOpen.value = false;
		};

		return {
			isReserveModalOpen,
			isSummaryModalOpen,
			selectedPin,
			handlePinClicked,
			closeModal,
			openSummaryModal,
			closeSummaryModal,
			qrCode,
		};
	},
});
</script>

<style scoped>
.reserve-modal {
	--height: 100%;
	--border-radius: 16px 16px 0 0;
	--box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
		0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.summary-modal {
	--height: 70%;
	--width: 80%;
	--border-radius: 16px;
	--box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
	--margin: auto;
}

.reserve-modal .ion-content,
.summary-modal .ion-content {
	background: white;
	display: flex;
	justify-content: center;
	align-items: center;
}

.reserve-container,
.summary-container {
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
	padding: 20px;
}

.summary-container {
	justify-content: center;
	height: 100%;
}

.qr-code {
	width: 150px;
	height: 150px;
	margin: 20px 0;
}
</style>
