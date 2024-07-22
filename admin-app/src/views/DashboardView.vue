<template>
  <div class="screen-container">
    <div class="menu">
      <div class="menu-header">
        <img src="../../public/logolocker.png" width="60px"/>
        <p>JD</p>
      </div>
      <div>
        <div>
          <p></p>
          <p>Tableau de bord</p>
        </div>
        <div>
          <p></p>
          <p>Utilisateurs</p>
        </div>
        <div>
          <p></p>
          <p>Réservations</p>
        </div>
        <div>
          <p></p>
          <p>Casiers</p>
        </div>
        <div>
          <p></p>
          <p>Rapports</p>
        </div>
      </div>
    </div>
    <div class="container">
      <h1>Tableau de bord</h1>
      <div class="sender">
        <p>Envoyer un message à tous les utilisateurs ?</p>
        <div class="subsender">
          <textarea rows="3" cols="80" type="text" placeholder="Message"></textarea>
          <p>Envoyer</p>
        </div>
      </div>
      <div class="stats">
        <StatsCard title="Utilisateurs" :value="132" />
        <StatsCard title="Reservations" :value="5042" />
        <StatsCard title="Casiers" :value="148" />
        <StatsCard title="Incidents" :value="34" />
      </div>
      <div class="container-campus-map">
        <CampusMap />

      </div>
    </div>
  </div>
</template>

<script setup>
import StatsCard from '../components/StatsCardComponent.vue';
import CampusMap from '../components/CampusMapComponent.vue';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

.screen-container {
  height: 100%;
  display: flex;
  gap: 40px;
}

.menu {
  padding: 16px 40px;
  background: #ffe9da33;
}

.menu-header {
  display: flex;
  align-items: center;
  gap: 48px;
}

.menu-header p {
  background-color: green;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
}

.container {
  margin-top: 24px;
}

* {
  font-family: 'Roboto', sans-serif;
  margin: 0;
}

div h1 {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
}

.sender {
  margin-top: 48px;
}

.subsender {
  display: flex;
  gap: 48px;
  margin-top: 4px;
}

.subsender textarea {
  border-radius: 6px;
  outline: none;
  height: 45px;
}

.subsender textarea:focus {
  border: 1.5px solid #FFA62B;
}

.subsender p {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  background: #FFA62B;
  height: 45px;
  line-height: 45px;
  width: 230px;
  text-align: center;
  align-self: center;
  vertical-align: center;
  border-radius: 6px;
  text-transform: uppercase;
  color: white;
}

.stats {
  margin-top: 48px;
  display: grid;
  width: 75vw;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px;
}

.container-campus-map {
  margin-top: 48px;
  height: 45vh;
  width: 75vw;
}

</style>
