<script setup lang="ts">
import NavBarVue from "./components/NavBar.vue";
</script>

<template>
  <NavBarVue></NavBarVue>
  <div class="app">
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #121212;
  color: white;
}

.app {
  padding: 40px;
}
</style>
