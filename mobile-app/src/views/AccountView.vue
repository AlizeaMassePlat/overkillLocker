<template>
	<ion-page>
		<BackArrow @click="$emit('close')" />
		<MapComponent />

		<ion-content class="profile-overlay">
			<div class="" v-if="currentUser">
				<div class="profile-header">
					<ion-avatar class="avatar">
						<img :src="currentUser.gravatarUrl" alt="Avatar" />
					</ion-avatar>
					<h2>{{ currentUser.firstname }} {{ currentUser.name }}</h2>
					<p>{{ currentUser.email }} | {{ currentUser.promotion }}</p>
				</div>
				<div class="profile-actions">
					<div class="action-box">
						<ion-item button @click="openProfileModal">
							<ion-icon slot="start" :icon="createOutline"></ion-icon>
							<ion-label>Compléter mon profil</ion-label>
						</ion-item>
						<ion-item>
							<ion-icon slot="start" :icon="notificationsOutline"></ion-icon>
							<ion-label>Notifications</ion-label>
							<ion-toggle slot="end" checked></ion-toggle>
						</ion-item>
						<ion-item>
							<ion-icon slot="start" :icon="mailOutline"></ion-icon>
							<ion-label>Emails</ion-label>
							<ion-toggle slot="end" checked></ion-toggle>
						</ion-item>
					</div>
					<div class="action-box">
						<ion-item button @click="goToReservationsView">
							<ion-icon slot="start" :icon="listOutline"></ion-icon>
							<ion-label>Mes réservations</ion-label>
						</ion-item>
						<ion-item button @click="goToSupportView">
							<ion-icon slot="start" :icon="warningOutline"></ion-icon>
							<ion-label>Aide et Support</ion-label>
						</ion-item>
						<ion-item button>
							<ion-icon slot="start" :icon="lockClosedOutline"></ion-icon>
							<ion-label>Politique de confidentialité</ion-label>
						</ion-item>
					</div>
					<div class="action-box standalone">
						<ion-item button @click="signOut">
							<ion-icon slot="start" :icon="logOutOutline"></ion-icon>
							<ion-label>Déconnexion</ion-label>
						</ion-item>
					</div>
				</div>
			</div>

			<ModalComponent
				:is-open="isProfileModalOpen"
				@didDismiss="closeProfileModal"
				class="profile-modal"
				:initial-breakpoint="0.91">
				<div class="profile-container">
					<h2>Compléter mon profil</h2>

					<FormInputComponent
						class="custom profile-modal-item"
						ref="nameInput"
						type="text"
						fill="outline"
						label="Nom"
						readonly="readonly"
						label-placement="floating"
						error-text=""
						helper-text=""
						:value="currentUser.name"
						v-model="currentUser.name" />

					<FormInputComponent
						class="custom profile-modal-item"
						ref="firstnameInput"
						type="text"
						fill="outline"
						label="Prénom"
						readonly="readonly"
						label-placement="floating"
						error-text=""
						helper-text=""
						:value="currentUser.firstname"
						v-model="currentUser.firstname" />

					<FormInputComponent
						class="custom profile-modal-item"
						ref="emailInput"
						type="email"
						fill="outline"
						label="Email"
						readonly="readonly"
						label-placement="floating"
						error-text=""
						helper-text=""
						:value="currentUser.email"
						v-model="currentUser.email" />

					<FormInputComponent
						class="custom profile-modal-item"
						ref="promotionInput"
						type="text"
						fill="outline"
						label="Promotion"
						readonly="readonly"
						label-placement="floating"
						error-text=""
						helper-text=""
						:value="currentUser.promotion"
						v-model="currentUser.promotion" />

					<FormInputComponent
						class="editable custom profile-modal-item"
						ref="ageInput"
						type="number"
						fill="outline"
						label="Âge"
						label-placement="floating"
						error-text=""
						helper-text=""
						v-model="age" />

					<FormInputComponent
						class="editable custom profile-modal-item"
						ref="phoneInput"
						type="text"
						fill="outline"
						label="Téléphone"
						label-placement="floating"
						error-text=""
						helper-text=""
						v-maskito="phoneOptions"
						v-model="phone"
						placeholder="00 00 00 00 00" />

					<FormSelectComponent
						ref="genderSelect"
						label="Genre"
						label-placement="floating"
						fill="outline"
						class="editable custom profile-modal-item"
						:options="selectOptions"
						v-model="selectedGender" />

					<ButtonComponent type="lg" id="updateBtn" @click="updateProfile"
						>Mettre à jour</ButtonComponent
					>
				</div>
			</ModalComponent>

			<ModalComponent
				:is-open="isModalOpen"
				@didDismiss="closeModal"
				class="confirmation-modal">
				<div class="confirmation-modal-content">
					<Close @click="closeModal" />
					<h2>Profil complété !</h2>
				</div>
			</ModalComponent>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import {
	IonPage,
	IonContent,
	IonItem,
	IonIcon,
	IonLabel,
	IonAvatar,
	IonToggle,
} from "@ionic/vue";
import {
	createOutline,
	logOutOutline,
	notificationsOutline,
	mailOutline,
	listOutline,
	warningOutline,
	lockClosedOutline,
} from "ionicons/icons";
import BackArrow from "@/components/ButtonBackArrow.vue";
import ModalComponent from "@/components/ModalComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import Close from "@/components/ButtonClose.vue"
import FormInputComponent from "@/components/FormInputComponent.vue";
import FormSelectComponent from "@/components/FormSelectComponent.vue";
import md5 from "md5";
import MapComponent from "@/components/MapComponent.vue";
import { maskito as vMaskito } from "@maskito/vue";

const router = useRouter();

const isProfileModalOpen = ref(false);

const currentUserId = 1;

const users = ref([
	{
		id: 1,
		firstname: "Jane",
		name: "Doe",
		email: "smart@locker.fr",
		phone: null,
		promotion: "Bachelor 2",
		age: null,
		gender: null,
		gravatarUrl: `https://www.gravatar.com/avatar/${md5(
			"smart@locker.fr".trim().toLowerCase()
		)}`,
	},
	{
		id: 2,
		firstname: "John",
		name: "Smith",
		email: "john@example.com",
		phone: null,
		promotion: "Start Web",
		age: null,
		gender: null,
		gravatarUrl: `https://www.gravatar.com/avatar/${md5(
			"john@example.com".trim().toLowerCase()
		)}`,
	},
]);

const currentUser = computed(() =>
	users.value.find((user) => user.id === currentUserId)
);

const age = ref(currentUser.value.age);
const phone = ref(currentUser.value.phone);
const selectedGender = ref(currentUser.value.gender);

const openProfileModal = () => {
	isProfileModalOpen.value = true;
};

const closeProfileModal = () => {
	isProfileModalOpen.value = false;
};

const isModalOpen = ref(false);

const updateProfile = async () => {
	currentUser.value.age = age.value;
	currentUser.value.gender = selectedGender.value;
	console.log("Profile updated", {
		name: currentUser.value.name,
		firstname: currentUser.value.firstname,
		email: currentUser.value.email,
		phone: currentUser.value.phone,
		age: age.value,
		gender: selectedGender.value,
	});
	closeProfileModal();
	isModalOpen.value = true;
};

const goToReservationsView = () => {
	router.push({ name: "BookingsView" });
};

const goToSupportView = () => {
	router.push({ name: "ReportIncidentView" });
};

const signOut = () => {
	router.push({ name: "LoginView" });
};

const phoneOptions = {
	mask: [
		/\d/,
		/\d/,
		" ",
		/\d/,
		/\d/,
		" ",
		/\d/,
		/\d/,
		" ",
		/\d/,
		/\d/,
		" ",
		/\d/,
		/\d/,
	],
	elementPredicate: (el: HTMLIonInputElement) => {
		return new Promise((resolve) => {
			requestAnimationFrame(async () => {
				const input = await el.getInputElement();
				resolve(input);
			});
		});
	},
};

const selectOptions = ref([
	{ value: "male", label: "Masculin" },
	{ value: "female", label: "Féminin" },
	{ value: "non-binary", label: "Non binaire" },
]);
</script>

<style scoped>
.profile-overlay {
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

.profile-actions {
	width: 100%;
	padding: 10px;
}

.action-box {
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	margin-bottom: 6px;
	padding: 5px;
}

ion-item {
	--border-color: transparent;
}

.profile-header {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.avatar {
	width: 60px;
	height: 60px;
	border-radius: 50%;
	overflow: hidden;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 32px;
	margin-top: 15px;
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
	--color: gray;
	--highlight-color-focused: #ffa62b;
	width: 310px;
	height: 45px;
}

ion-input.editable,
ion-select.editable {
	--border-color: #ffa62b;
	--color: black;
}

#updateBtn {
	margin-top: 10px;
}

.confirmation-modal {
	--height: 20%;
	--width: 80%;
	--border-radius: 16px;
	--box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
	--margin: auto;
}

.confirmation-modal-content {
	background: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 10px;
	padding-top: 50px;
}
</style>
