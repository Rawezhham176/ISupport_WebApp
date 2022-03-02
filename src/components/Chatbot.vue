<template>
  <div class="container">
    <div class="chatbox">
      <div :class="[!state ? 'chatbox--active' : '']" class="chatbox__support">
        <div class="chatbox__header">
          <div class="chatbox__image--header">
            <img
              src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png"
              alt="image"
            />
          </div>
          <div class="chatbox__content--header">
            <h4 class="chatbox__heading--header">Chat support</h4>
            <p class="chatbox__description--header">
              Hi. My name is Isy. How can I help you?
            </p>
          </div>
        </div>
        <div class="chatbox__messages">
          <ul
            class="messages__item messages__item--visitor"
            v-for="chat in chatBox_msg_isy"
            v-bind:key="chat"
          >
            <li>
              {{ chat }}
            </li>
          </ul>

          <div
            class="messages__item messages__item--operator"
            v-for="chat in chatBox_msg_user"
            v-bind:key="chat"
          >
            {{ chat }}
          </div>
        </div>
        <div class="chatbox__footer">
          <div>
            <input type="text" placeholder="Write a message..." ref="input" />
            <button
              class="chatbox__send--footer send__button"
              @click="[toggleState(), onSendButton()]"
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <div class="chatbox__button" @click="toggleState()">
        <button>
          <img src="../assets/Robot.png" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Chatbot",
  data() {
    return {
      openButton: ".chatbox__button",
      chatBox: ".chatbox__support",
      sendButton: ".send__button",
      chatBox_msg_isy: [],
      chatBox_msg_user: [],

      messages: [],
      state: false,
    };
  },

  methods: {
    setup() {
      const handleClick = () => {};
    },
    show_chat() {
      const chatBox = this.chatbox;

      const node = this.$refs.input;
      node.addEventListener("keyup", ({ key }) => {
        if (key === "Enter") {
          this.onSendButton(chatBox);
        }
      });
    },

    toggleState() {
      this.state = !this.state;
    },

    onSendButton() {
      let text1 = this.$refs.input.value;
      if (text1 === "") {
        return;
      }

      let msg1 = { name: "User", message: text1 };
      this.messages.push(msg1);

      axios
        .post("http://localhost:5000/predict", msg1)
        .then((r) => {
          let msg2 = { name: "Isy", message: r.data.answer };
          this.messages.push(msg2);
          this.updateChatText();
          this.$refs.input.value = "";
        })
        .catch((error) => {
          console.log("Error: ", error);
          this.updateChatText();
          this.$refs.input.value = "";
        });
    },

    updateChatText() {
      var i;
      var u;
      this.messages
        .slice()
        .reverse()
        .forEach(function (item, index) {
          console.log(item);
          if (item.name === "Isy") {
            console.log();
            i = item.message;
          } else {
            u = item.message;
          }
        });
      this.chatBox_msg_user.push = u;
      this.chatBox_msg_isy.push = i;
      console.log(this.chatBox_msg_isy);
    },
  },
};
</script>


<style scoped>
/* CHATBOX
=============== */
.chatbox {
  bottom: 30px;
  right: 30px;
  position: fixed;
}

/* CONTENT IS CLOSE */
.chatbox__support {
  display: flex;
  flex-direction: column;
  background: rgb(219, 219, 219);
  width: 300px;
  height: 350px;
  z-index: -123456;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}

/* CONTENT ISOPEN */
.chatbox--active {
  transform: translateY(-40px);
  z-index: 123456;
  opacity: 1;
}

.send__button {
  padding: 10px;
  background: black;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
}

/* HEADER */
.chatbox__header {
  position: fixed;
  top: 0;
  background: orange;
}

/* MESSAGES */
.chatbox__messages {
  margin-top: auto;
  display: flex;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  flex-direction: column-reverse;
  position: absolute;
  bottom: 20%;
  width: 85%;
}

.chatbox__messages::-webkit-scrollbar {
  display: none;
}

.messages__item {
  background: orange;
  max-width: 60.6%;
  width: fit-content;
}

.messages__item--operator {
  margin-left: auto;
}

.messages__item--visitor {
  margin-right: auto;
}

/* FOOTER */
.chatbox__footer {
  position: fixed;
  bottom: 0;
  justify-content: center;
  width: 85%;
}

.chatbox__footer input {
  margin-right: 40px;
}

.chatbox__footer div {
  display: flex;
}

.chatbox__support {
  background: #dadada;
  height: 450px;
  width: 350px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

/* HEADER */
.chatbox__header {
  background: var(--primaryGradient);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: var(--primaryBoxShadow);
}

.chatbox__image--header {
  margin-right: 10px;
}

.chatbox__heading--header {
  font-size: 1.2rem;
  color: rgb(0, 0, 0);
}

.chatbox__description--header {
  font-size: 0.9rem;
  color: rgb(0, 0, 0);
}

/* Messages */
.chatbox__messages {
  padding: 0 20px;
}

.messages__item {
  margin-top: 10px;
  background: #cccccc;
  padding: 8px 12px;
  max-width: 70%;
}

.messages__item--visitor,
.messages__item--typing {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

.messages__item--operator {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
}

/* FOOTER */
.chatbox__footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px;
  background: var(--secondaryGradient);
  box-shadow: var(--secondaryBoxShadow);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  margin-top: 20px;
}

.chatbox__footer input {
  width: 70%;
  border: none;
  padding: 10px 10px;
  border-radius: 10px;
  text-align: left;
}

.chatbox__send--footer {
  color: white;
}

/* BUTTON */
.chatbox__button {
  text-align: right;
}

.chatbox__button button img {
  width: 100%;
}

.chatbox__button button,
.chatbox__button button:focus,
.chatbox__button button:visited {
  width: 15%;
  padding: 10px 20px;
  background: rgb(85, 85, 255);
  border: none;
  outline: none;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
  cursor: pointer;
}
</style>

