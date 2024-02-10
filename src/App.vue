<style>
html,
body {
  margin: 0;
  padding: 0;
  background-color: #f3f4f6; /* Set your desired background color */
}
</style>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import LeftSection from "./components/LeftSection.vue";
import RightSection from "./components/RightSection.vue";
import Header from "./components/Header.vue";
import LeftSectionNew from "./components/LeftSectionNew.vue";
</script>

<template>
  <Header />

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <LeftSectionNew />
      <!-- <LeftSection /> -->
      <RightSection />
      <!-- <RouterView /> -->
    </div>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 768px) {
  .grid-cols-1 {
    grid-template-columns: 1fr;
  }
}
</style>

