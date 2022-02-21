<template>
  <header>
    <p class="">ISUPPORT</p>
    <Nav />
    <p>User</p>
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
header {
  display: flex;
  justify-content: space-between;
}
</style>
