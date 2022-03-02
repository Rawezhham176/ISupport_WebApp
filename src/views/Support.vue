<template>
  <div class="box">
    <div class="contact">
      <h2>Call us</h2>
      <h1>0800 00 0011</h1>
    </div>
    <div class="contact">
      <h2>Email us</h2>
      <h1>info@i_support.co</h1>
    </div>
    <div class="contact">
      <h1>Chat with us</h1>
      <a href="http://localhost:5000"
        ><img src="../assets/Robot.png" alt=""
      /></a>
    </div>
  </div>
</template>

<style>
.box {
  margin-top: 15%;
  display: flex;
  justify-content: space-evenly;
}

.contact {
  background: rgba(0, 233, 116, 0.774);
  padding: 30px 50px;
  text-align: center;
  width: 20%;
  transition: all 0.5s ease;
}

.contact img {
  width: 50%;
  animation: anim 4s infinite;
  cursor: pointer;
}

.contact:hover {
  background: rgba(0, 0, 0, 0.774);
  color: white;
}

@keyframes anim {
  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>
