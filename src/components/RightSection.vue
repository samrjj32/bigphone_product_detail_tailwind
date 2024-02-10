<template>
  <div class="right-section p-4">
    <div class="right-header flex justify-between items-center">
      <h2 class="text-gray-500 text-sm md:text-base">SAMSUNG</h2>
      <span class="text-green-500 text-xs md:text-sm">Hurry Limited stock</span>
    </div>
    <h1 class="text-2xl md:text-3xl font-bold mt-4">
      Samsung Galaxy S23 Ultra 5G
    </h1>
    <h2 class="text-xl md:text-2xl text-gray-700">£800</h2>
    <hr class="my-4 border-t border-gray-300" />

    <ul class="info-list mb-4">
      <li class="flex mb-2">
        <p class="info-label mr-2 text-sm md:text-base">Sim:</p>
        <p class="info-value text-sm md:text-base">Dual Sim</p>
      </li>
      <li class="flex mb-2">
        <p class="info-label mr-2 text-sm md:text-base">Condition:</p>
        <p class="info-value text-sm md:text-base">Like new</p>
      </li>
      <li class="flex mb-2">
        <p class="info-label mr-2 text-sm md:text-base">Color:</p>
        <p class="info-value text-sm md:text-base">Lavender</p>
      </li>
      <li class="flex mb-2">
        <p class="info-label mr-2 text-sm md:text-base">Network:</p>
        <p class="info-value text-sm md:text-base">Unlocked</p>
      </li>
      <li class="flex">
        <p class="info-label mr-2 text-sm md:text-base">Storage:</p>
        <p class="info-value text-sm md:text-base">512GB</p>
      </li>
    </ul>

    <hr class="my-4 border-t border-gray-300" />
    <Counter class="mb-4" />

    <button
      class="add-to-cart-button w-full bg-yellow-400 text-gray-800 py-2 px-4 rounded-md"
    >
      Add to Basket
    </button>
  </div>
</template>

<script setup>
import Counter from "./blocks/ProductCounter.vue";
</script>
