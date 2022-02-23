<template>
  <div class="head">
    <div class="pic">
      <img src="../assets/log.png" alt="" />
    </div>
    <div class="text">
      <h1>Support with another level</h1>
      <hr />
      <p class="p1">You need help? Wer are for you.</p>
      <p class="p2"><router-link to="/contact">Contact us</router-link></p>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import Tasks from "../components/Tasks.vue";

export default {
  components: {
    Button,
    Tasks,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    deleteTask(id) {
      if (confirm("Are you sure?")) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      }
    },
  },
  created() {
    this.tasks = [
      {
        name: "Hi",
        text: "Nothing",
        reminder: true,
      },
      {
        name: "Hi",
        text: "Nothing",
        reminder: false,
      },
    ];
  },
};
</script>

<style>
.head {
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
}

.head .pic {
  width: 50%;
  margin-right: 5%;
}

.head .pic img {
  width: 100%;
}

.head .text {
  width: 30%;
}

.head .text h1 {
  font-size: 80px;
  margin-bottom: 0;
}

.head .text hr {
  height: 2px;
  border: none;
  background: black;
}

.head .text .p1 {
  font-size: 20px;
  margin-bottom: 10px;
}

.head .text .p2 {
  margin: 0;
  font-size: 40px;
}

.head .text .p2 a {
  color: #ff7a7a;
}
</style>
