<template>
  <header>
    <p class="logo"><router-link to="/">ISUPPORT</router-link></p>
    <Nav />
    <h3>
      <fa icon="user" />
    </h3>
  </header>
</template>

<script>
import Nav from "./Nav.vue";

export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "Hi World",
    },
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
  top: 0;
  backdrop-filter: blur(15px);
  padding: 0 20px;
}

header h3 {
  cursor: pointer;
}

.logo {
  font-weight: 700;
  cursor: pointer;
  font-size: 20px;
}
</style>
