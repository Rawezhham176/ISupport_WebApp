<template>
  <button @click="onClick()" :style="{ background: color }" class="btn">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
  },

  methods: {
    onClick() {
      console.log("hi");
    },
  },
};
</script>

<style scoped>
button {
  padding: 5px 25px;
  border: 0;
  border-radius: 15px;
  color: white;
}

.btn:hover {
  background-color: black;
}
</style>
