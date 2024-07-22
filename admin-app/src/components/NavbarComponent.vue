<template>
    <div class="navbar">
      <div class="logo">
        <!-- <img src="@/assets/logo.png" alt="Smart Locker Logo" /> -->
      </div>
      <nav>
        <ul>
          <li>
            <router-link to="/tableau-de-bord">
              <span class="dot"></span>Tableau de bord
            </router-link>
          </li>
          <li>
            <router-link to="/utilisateurs">
              <span class="dot"></span>Utilisateurs
            </router-link>
          </li>
          <li>
            <router-link to="/reservations">
              <span class="dot"></span>Réservations
            </router-link>
          </li>
          <li>
            <router-link to="/casiers">
              <span class="dot"></span>Casiers
            </router-link>
          </li>
          <li>
            <router-link to="/rapports">
              <span class="dot"></span>Rapports
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="profile">
        <div class="profile-pic">
          <span>JD</span>
        </div>
        <router-link to="/deconnexion" class="logout">
          Déconnexion
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NavbarComponent', // Changez le nom ici en NavbarComponent
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 200px;
    background-color: #f7f7f7;
    height: 100vh;
    padding: 20px;
  }
  
  .logo {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .logo img {
    max-width: 100%;
  }
  
  nav ul {
    list-style-type: none;
    padding: 0;
  }
  
  nav ul li {
    margin-bottom: 20px;
  }
  
  nav ul li a {
    text-decoration: none;
    color: #000;
    display: flex;
    align-items: center;
  }
  
  nav ul li a .dot {
    width: 10px;
    height: 10px;
    background-color: #ffa62b;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  .profile {
    text-align: center;
  }
  
  .profile-pic {
    width: 50px;
    height: 50px;
    background-color: #ffa62b;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 20px;
    color: #fff;
    font-weight: bold;
  }
  
  .logout {
    text-decoration: none;
    color: #000;
    display: block;
    margin-top: 20px;
  }
  </style>
  