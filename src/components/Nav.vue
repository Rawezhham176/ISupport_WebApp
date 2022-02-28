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
  padding-top: 4px;
}

li {
  display: inline;
  margin-right: 60px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
}

ul li a {
  transition: all 0.5s ease-in-out;
}

ul li a:hover {
  color: rgb(206, 83, 255);
  scale: 1.2;
  border-bottom: 1px solid black;
}
</style>
