<template>
  <header>
    <router-link to="/">ISUPPORT</router-link>
  </header>
</template>

<script>
import Nav from "./Nav.vue";

export default {
  name: "Header",
  props: {
  },
  components: { Nav },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;700&display=swap");

header {
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: ;
  backdrop-filter: blur(10px);
  padding: 0 20px;
}