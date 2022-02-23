<template>
  <div :class="[task.reminder ? 'reminder' : '', 'task']">
    <h3>{{ task.name }}</h3>
    <p>{{ task.text }}</p>
    <p class="delete" @click="onDelet(task.id)">*</p>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },

  methods: {
    onDelete(id) {
      this.$$emit("delete-task", id);
    },
  },
};
</script>

<style>
.task {
  padding: 10px;
  background: rgb(165, 165, 165);
  margin: 10px 0;
}

.task.reminder {
  border-left: 4px solid green;
}

.delete {
  color: red;
  font-size: 30px;
}
</style>
