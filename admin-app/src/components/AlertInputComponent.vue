<template>
    <div class="alertBox">
        <div class="alertInput">
            <input type="text" v-model="alertMessage">
        </div>
        <div>
            <ButtonComponent type="sm" @click="handleAlerte" label="ENVOYER"/>
        </div>
        <div class="cbContainer">
            <input type="checkbox" v-model="alerte">
            <label>Alerte</label>
        </div>
    </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';

export default {
    name: 'AlertInputComponent',
    components: {
        ButtonComponent
    },
    data() {
        return {
            alerte: false,
            alertMessage: ''
        };
    },
    methods: {
        handleAlerte() {
            if (this.alerte) {
                alert(this.alertMessage);
                
            }
        }
    }
};
</script>

<style scoped>
.alertBox {
    display: flex;
    align-items: center; /* Aligne les éléments enfants verticalement au centre */
    width: 100%;
    background-color: white;
    gap: 20px;
}

.alertBox input[type="text"] {
    height: 40px;
    width: 500px;
    border-radius: 8px;
    border : 1px solid black;
}

.cbContainer {
    display: flex;
    align-items: center; /* Assure que le checkbox et le label sont alignés verticalement */
    gap: 10px;
}

</style>
