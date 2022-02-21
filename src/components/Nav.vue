<template>
  <ul>
    <li>HOME</li>
    <li>BLOG</li>
    <li>SUPPORT</li>
    <li>HELP</li>
    <li>ABOUT</li>
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
}
</style>
