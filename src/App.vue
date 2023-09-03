<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
html{
  height: 100%;
}
body, main{
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
}
body::-webkit-scrollbar{
  width:6px;
}
body::-webkit-scrollbar-track{
  width:3px;
  background:transparent;
}
body::-webkit-scrollbar-thumb{
  width:3px;
  background:#32C770;
  border-radius: 10px;
}
</style>
