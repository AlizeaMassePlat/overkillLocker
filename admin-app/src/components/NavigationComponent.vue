<template>
    <nav class="navigation">
      <div class="logoContainer">
        <img :src="logo" alt="Logo" />
        <p class="current_user">JD</p>
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
    gap: 8px;
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
    gap: 24px;
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
    font-size: 14px;
  }
  
  .logoContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 24px;
    margin-bottom: 20px;
  }
  
  .logoContainer img {
    height: 80px;
    object-fit: contain;
  }

  .current_user {
    background-color: rgb(45, 125, 45);
    border-radius: 50%;
    height: 55px;
    width: 55px;
    text-align: center;
    line-height: 55px;
    font-size: 24px;
    color: white;
    margin: 0 16px 0 0;
  }

  .decoContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    gap: 10px;
    font-size: 14px;
  }

  .decoContainer img {
    width: 20px;
    height: 20px;
  }
  </style>
  