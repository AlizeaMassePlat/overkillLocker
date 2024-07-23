<template>
    <nav class="navigation">
      <div class="logoContainer">
        <img :src="logo" alt="Logo" />
      </div>
      <ul>
        <li v-for="link in links" :key="link.label" @click="handleClick(link.component)">
          <div class="navList">
            <img :src="activeLink === link.component ? orangeDot : greyDot" alt="Dot" />
            <span>{{ link.label }}</span>
          </div>
        </li>
      </ul>
      <div class="decoContainer">
        <img :src="deconnexion" alt="deconnexion" />
        <p>Deconnexion</p>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavigationComponent',
    props: {
      logo: String,
      greyDot: String,
      orangeDot: String,
      links: Array,
      activeLink: String, // New prop to determine active link
      deconnexion: String
    },
    methods: {
      handleClick(componentName) {
        this.$emit('link-clicked', componentName);
      }
    }
  };
  </script>
  
  <style scoped>
  .navigation {
    background-color: #ECF0FF;
    padding: 10px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    height: 100vh;
    gap: 5%;
  }
  
  .navigation ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 10px;
    height: 100vh;
    gap: 5%;
  }
  
  .navList {
    display: flex;
    align-items: center;
    gap: 30px;
    cursor: pointer;
    padding-left: 5%;
  }
  
  .navList img {
    width: 20px; /* Ajustez selon vos besoins */
    height: 20px; /* Ajustez selon vos besoins */
  }
  
  .navList span {
    text-decoration: none;
    color: black;
    font-size: 16px;
  }
  
  .logoContainer {
    display: flex;
    margin-bottom: 20px;
  }
  
  .logoContainer img {
    width: 30%;
  }
  .decoContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    gap: 10px;
  }
  .decoContainer img {
    width: 20px;
    height: 20px;
  }
  </style>
  