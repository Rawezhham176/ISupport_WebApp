<template>
  <div class="about_us">
    <h1>This is us</h1>
    <img src="../assets/us.jpg" alt="" />
  </div>
</template>

<style>
.about_us {
  display: block;
  text-align: center;
  align-content: center;
}

.about_us img {
  width: 100%;
}

.about_us h1 {
  font-size: 150px;
  margin: 0;
  padding-top: 100px;
  animation: about_text infinite 10s;
}

.about_us hr {
  width: 70%;
}

.about_us p {
  width: 40%;
}

@keyframes about_text {
  0% {
    color: rgb(85, 85, 255);
  }
  25% {
    color: rgb(0, 233, 155);
  }
  50% {
    color: rgb(255, 85, 178);
  }
  75% {
    color: rgb(0, 0, 0);
  }
  100% {
    color: rgb(85, 85, 255);
  }
}
</style>
