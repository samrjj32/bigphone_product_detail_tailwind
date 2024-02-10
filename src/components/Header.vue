<script setup>
import logo from "../../src/assets/images/logo.webp";
</script>

<template>
  <div class="header flex items-center justify-between h-16 w-full bg-white">
    <img
      :src="logo"
      :alt="'logo'"
      class="max-w-20 max-h-20 w-auto h-auto ml-12"
    />
  </div>
</template>
