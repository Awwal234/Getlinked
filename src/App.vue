<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

@font-face {
  font-family: 'clashmd';
  src: url(./fonts/ClashDisplay-Medium.otf) format("truetype");
}

@font-face {
  font-family: 'unica';
  src: url(./fonts/UnicaOne-Regular.ttf) format("truetype");
}

@font-face {
  font-family: 'clashbd';
  src: url(./fonts/ClashDisplay-Bold.otf) format("truetype");
}

@font-face {
  font-family: 'clashsd';
  src: url(./fonts/ClashDisplay-Semibold.otf) format("truetype");
}

@font-face {
  font-family: 'clashrg';
  src: url(./fonts/ClashDisplay-Regular.otf) format("truetype");
}

* {
  box-sizing: border-box;
}

.inter {
  font-family: 'Inter', sans-serif;
}

.clashsd {
  font-family: 'clashsd';
}

.clashmd {
  font-family: 'clashmd';
}

.unica {
  font-family: 'unica';
}

.clashbd {
  font-family: 'clashbd';
}

.clashrg {
  font-family: 'clashrg';
}

html {
  height: 100%;
}

body,
main {
  min-height: 100vh;
}

.mont {
  font-family: 'Montserrat', sans-serif;
}

body::-webkit-scrollbar {
  width: 4px;
}

body::-webkit-scrollbar-track {
  width: 3px;
  background: transparent;
}

body::-webkit-scrollbar-thumb {
  width: 3px;
  background: black;
  border-radius: 0px;
}
</style>
