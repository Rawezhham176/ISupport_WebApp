<template>
  <Header />
  <router-view></router-view>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
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
