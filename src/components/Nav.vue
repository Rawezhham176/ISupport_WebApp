<template>
  <ul>
    <li><router-link to="/">HOME</router-link></li>
    <li><router-link to="/blog">BLOG</router-link></li>
    <li><router-link to="/support">SUPPORT</router-link></li>
    <li><router-link to="/help">HELP</router-link></li>
    <li><router-link to="/about">ABOUT</router-link></li>
  </ul>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped>
ul {
  list-style: none;
  color: black;
  position: sticky;
  top: 0;
}

li {
  display: inline;
  margin-right: 60px;
  cursor: pointer;
  font-size: 20px;
}
</style>
