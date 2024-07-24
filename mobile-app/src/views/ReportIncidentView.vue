<template>
	<ion-page>
		<BackArrow @click="$emit('close')" />
		<MapComponent />

		<ion-content class="support-overlay">
			<div class="profile-container">
				<h2>Signaler un incident</h2>

				<FormInputComponent
					class="custom"
					ref="titleInput"
					type="text"
					fill="outline"
					label="Objet"
					label-placement="floating"
					:readonly="false"
					error-text=""
					helper-text=""
					v-model="incident.title" />

				<FormSelectComponent
					ref="stateSelect"
					label="Type d'incident"
					label-placement="floating"
					readonly="false"
					fill="outline"
					class="custom"
					:options="selectState"
					v-model="incident.state" />

				<ion-textarea
					class="custom-message-input"
					ref="bodyInput"
					fill="outline"
					:readonly="false"
					label="Message"
					label-placement="floating"
					:counter="true"
					:maxlength="255"
					:auto-grow="true"
					:rows="6"
					error-text=""
					helper-text=""
					v-model="incident.body">
				</ion-textarea>

				<ButtonComponent type="lg" @click="reportIncident">
					Envoyer
				</ButtonComponent>

				<ModalComponent
					:is-open="isModalOpen"
					@didDismiss="closeModal"
					class="custom-modal">
					<div class="modal-content">
						<Close @click="closeModal" />
						<h2>Incident Signalé !</h2>
						<p>
							Merci de votre aide. <br />
							Nous reviendrons rapidement vers vous.
						</p>
						<p>L'administration</p>
					</div>
				</ModalComponent>
			</div>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { IonPage, IonContent, IonTextarea, IonInput } from "@ionic/vue";

import BackArrow from "@/components/ButtonBackArrow.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import FormInputComponent from "@/components/FormInputComponent.vue";
import FormSelectComponent from "@/components/FormSelectComponent.vue";
import MapComponent from "@/components/MapComponent.vue";
import ModalComponent from "@/components/ModalComponent.vue";
import Close from "@/components/ButtonClose.vue";

const incident = ref({
  title: "",
  state: "",
  body: "",
  id_user: 1, 
  date_create: new Date()
});

const selectState = ref([
  { value: "1", label: "Casier sale" },
  { value: "2", label: "Équipement manquant" },
  { value: "3", label: "Fermeture cassée" },
  { value: "4", label: "Autre" },
]);

const isModalOpen = ref(false);

const reportIncident = async () => {
  try {
    const response = await axios.post('http://localhost:3000/error/create', {
      title: incident.value.title,
      state: Number(incident.value.state), 
      body: incident.value.body,
      id_user: incident.value.id_user,
      date_create: incident.value.date_create.toISOString(),
    });
    console.log('Incident reporté:', response.data);
    isModalOpen.value = true;
  } catch (error) {
    console.error('Erreur lors de la création de l\'incident:', error);
  }
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>



<style scoped>
.support-overlay {
	position: fixed;
	left: 0;
	top: 10%;
	width: 100%;
	background: white;
	z-index: 2000;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	overflow-y: hidden;
}

ion-item {
	--border-color: transparent;
}

.profile-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px;
	gap: 12px;
}

ion-input.custom,
ion-select.custom,
.profile-modal-item {
	--highlight-color-focused: #ffa62b;
	width: 310px;
	height: 45px;
	--border-color: #ffa62b;
	--color: black;
}

.custom-message-input {
	height: 200px;
	--highlight-color-focused: #ffa62b;
	width: 310px;
	--border-color: #ffa62b;
	--color: black;
}

.custom-modal {
	--height: 40%;
	--width: 80%;
	--border-radius: 16px;
	--box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
	--margin: auto;
}

.modal-content {
	background: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 10px;
	padding-top: 50px;
}
</style>
