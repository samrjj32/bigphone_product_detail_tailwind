<script setup>
import { ref } from "vue";
import ProductModal from "./blocks/ProductModal.vue";

const isModalOpen = ref(false);
const containerRef = ref(null);
const sourceRef = ref(null);
const targetRef = ref(null);
const opacity = ref(0);
const offset = ref({ left: 0, top: 0 });

import img1 from "../../src/assets/images/phone1.jpeg";
import img2 from "../../src/assets/images/phone2.jpeg";
import img3 from "../../src/assets/images/phoneback.jpeg";

import img1Large from "../../src/assets/images/phone1large.jpeg";
import img2Large from "../../src/assets/images/phone2large.jpeg";
import img3Large from "../../src/assets/images/phonebacklarge.jpeg";

import img1thumbnail from "../../src/assets/images/phone1thumbnail.jpeg";
import img2thumbnail from "../../src/assets/images/phone2thumbnail.jpeg";
import img3thumbnail from "../../src/assets/images/phonebackthumbnail.jpeg";

import videoThumb from "../../src/assets/images/videoThumbhome.jpg";
import videoThumbHomeSmall from "../../src/assets/images/videoThumbHomeSmall.jpg";
import videoLarge from "../../src/assets/images/videoThumb2.jpg";

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};

const handleMouseMove = (e) => {
  const targetRect = targetRef.value.getBoundingClientRect();
  const sourceRect = sourceRef.value.getBoundingClientRect();
  const containerRect = containerRef.value.getBoundingClientRect();

  const xRatio = (targetRect.width - containerRect.width) / sourceRect.width;
  const yRatio = (targetRect.height - containerRect.height) / sourceRect.height;

  const left = Math.max(
    Math.min(e.pageX - sourceRect.left, sourceRect.width),
    0
  );
  const top = Math.max(
    Math.min(e.pageY - sourceRect.top, sourceRect.height),
    0
  );

  offset.value = {
    left: left * -xRatio,
    top: top * -yRatio,
  };
};

const handleMouseEnter = () => {
  opacity.value = 1;
};

const handleMouseLeave = () => {
  opacity.value = 0;
};
</script>

<template>
  <div class="img-display1">
    <div class="img-section">
      <div
        class="container"
        ref="containerRef"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        @mousemove="handleMouseMove"
      >
        <img ref="sourceRef" class="image1" alt="source" :src="data.image" />
        <img
          ref="targetRef"
          class="target"
          alt="target"
          :style="{
            opacity: opacity,
            left: offset.left + 'px',
            top: offset.top + 'px',
          }"
          :src="data.large"
          @click="toggleModal"
        />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<style>
.container {
  position: relative;
  overflow: hidden;
  /* display: block; */
  padding: 50px;
  /* border: 1px solid #00adb7; */
  border-radius: 15px;
}

.container:hover {
  box-shadow: 0 14px 24px rgba(0, 0, 0, 0.55), 0 14px 18px rgba(0, 0, 0, 0.55);
}

.img-section {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image1 {
  max-width: 600px;
  max-height: 600px;
  width: auto;
  height: auto;
}

.target {
  position: absolute;
}

.img-select {
  display: flex;
  justify-content: center;
  padding-top: 10px;
}
.img-display {
  /* background: #ffff; */
}

@media only screen and (max-width: 768px) {
  .card {
    grid-template-columns: 2fr;
  }

  .image1 {
    max-width: 250px;
    max-height: 250px;
  }

  .product-imgs {
    order: 1; /* Move product images below content on small screens */
    margin-top: 0px;
    height: 40vh;
  }

  .product-content {
    order: 2; /* Move product content above images on small screens */
  }
}
</style>