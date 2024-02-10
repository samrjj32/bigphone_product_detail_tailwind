<template>
  <div class="counter-section">
    <p>Quantity:</p>
    <div class="counter">
      <button @click="decrement">-</button>
      <span>{{ quantity }}</span>
      <button @click="increment">+</button>
    </div>
  </div>
</template>

<script setup>
// Import the reactive function from Vue
import { ref } from "vue";

// Define the quantity as a reactive variable
const quantity = ref(1);

// Function to increment the quantity
const increment = () => {
  quantity.value++;
};

// Function to decrement the quantity (with a minimum of 1)
const decrement = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};
</script>


<style scoped>
/* Add your styles for the left section here */
.left-section {
  flex: 1;
  width: 50%;
  box-sizing: border-box;
}

.counter-section {
  margin-top: 20px;
}

.counter {
  display: flex;
  align-items: center;
}

.counter button {
  padding: 10px 15px;
  background: #f5f5f5;
  margin: 0 5px;
  cursor: pointer;
  border: none;
  font-size: 20px;
}

.counter span {
  padding: 5px 15px;
  background: #e6e6e6;
}
</style>
