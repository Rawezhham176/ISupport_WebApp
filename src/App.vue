<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rajdhani:wght@500&display=swap");

body {
  font-family: "Rajdhani", sans-serif;
  padding: 20px 70px;
}

a {
  text-decoration: none;
  color: black;
}
</style>
