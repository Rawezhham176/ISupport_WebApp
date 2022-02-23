<template>
  <div v-bind:key="task.id" v-for="task in tasks">
    <Task :task="task" />
  </div>
</template>

<script>
import Task from "./Task.vue";

export default {
  name: "Tasks",
  components: {
    Task,
  },
  props: {
    tasks: Array,
  },
  emits: ["delete-task"],
};
</script>
