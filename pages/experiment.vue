<template>
  <div class="container">
    <div style="width: 100vh;">
      <h1 class="title">
        Experiment
      </h1>
      <button class="button--grren">
        <nuxt-link to="/">Home</nuxt-link>
      </button>
      <div class="container_custom">
        <div class="adjectives">
          <div>aaa</div>
          <div>bbb</div>
        </div>
      </div>
      <div class="container_custom">
        <div class="flex">
          <div class="lines">-3</div>
          <div class="lines">-2</div>
          <div class="lines">-1</div>
          <div class="lines">0</div>
          <div class="lines">1</div>
          <div class="lines">2</div>
          <div class="lines">3</div>
        </div>
        <div class="underline"></div>
      </div>
    </div>
  </div>
</template>

<style>
.container_custom {
  margin: 50px auto;
}
.adjectives{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
}
.flex {
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.flex > * {
  min-width: 8%;
  background: #fff;
  font-size: 20px;
  text-align: center;
}

.underline {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
  border-top: 2px solid #c2c2c2;
}

.lines {
  position: relative;
  color: #333333;
  text-align: center;
  padding-bottom: 20px;
}

.lines::after {
  border-left: 2px solid #c2c2c2;
  position: absolute;
  height: 20px;
  content: "";
  left: 49%;
  bottom: 0px;
}
</style>
