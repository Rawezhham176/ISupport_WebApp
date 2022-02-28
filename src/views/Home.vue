<template>
  <div>
    <div class="head">
      <div class="pic">
        <img src="../assets/programer.jpg" alt="" />
      </div>
      <div class="text">
        <h1>Support with another level</h1>
        <hr />
        <p class="p1">You need help? Wer are for you.</p>
        <p class="p2"><router-link to="/contact">Contact us</router-link></p>
      </div>
    </div>

    <div class="after_head">
      <div class="faq">
        <h1>FAQ</h1>
        <hr />
        <ul>
          <li>Some question?</li>
          <li>Some question?</li>
          <li>Some question?</li>
          <li>Some question?</li>
          <li>Some question?</li>
        </ul>
      </div>
      <div class="blogs">
        <div class="start_blog">
          <h1>Home</h1>
          <hr />
          <p>
            oject, Wikipedia, is the most popular wiki-based website, and is one
            of the most widely viewed sites in the world, having been ranked in
            the top twenty since 2007.[3] Wikipedia is not a single wiki but
            rather a collection of hundreds of wikis, with each one pertaining
            to a specific language. In addition to Wikipedia, there are hu
          </p>
        </div>

        <div class="start_blog">
          <h1>Home</h1>
          <hr />
          <p>
            oject, Wikipedia, is the most popular wiki-based website, and is one
            of the most widely viewed sites in the world, having been ranked in
            the top twenty since 2007.[3] Wikipedia is not a single wiki but
            rather a collection of hundreds of wikis, with each one pertaining
            to a specific language. In addition to Wikipedia, there are hu
          </p>
        </div>

        <div class="start_blog">
          <h1>Home</h1>
          <hr />
          <p>
            oject, Wikipedia, is the most popular wiki-based website, and is one
            of the most widely viewed sites in the world, having been ranked in
            the top twenty since 2007.[3] Wikipedia is not a single wiki but
            rather a collection of hundreds of wikis, with each one pertaining
            to a specific language. In addition to Wikipedia, there are hu
          </p>
        </div>
      </div>
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

.after_head {
  display: flex;
  justify-content: space-between;
  margin-top: 200px;
}

.after_head .faq {
  width: 40%;
}

.after_head .faq h1 {
  font-size: 60px;
  font-weight: 100;
  margin: 0;
}

.after_head .faq ul {
  list-style: none;
  padding: 0;
}

.after_head .faq ul li {
  font-size: 30px;
  margin-bottom: 20px;
  cursor: pointer;
}

.after_head .blogs {
  width: 50%;
}

.after_head .blogs .start_blog {
  background: black;
  color: white;
  padding: 25px 40px;
  text-align: right;
  margin-bottom: 20px;
}

.after_head .blogs .start_blog h1 {
  margin: 0;
}
</style>
