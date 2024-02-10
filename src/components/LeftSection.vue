<!-- ProductSlider.vue -->
<script setup>
import { ref, watchEffect } from "vue";
const isModalOpen = ref(false);
const imgShowcase = ref(null);

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

import ProductModal from "../components/blocks/ProductModal.vue";

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};
</script>

<template>
  <div class="product-imgs">
    <div class="product-wrapper">
      <div class="img-display">
        <div
          class="img-showcase"
          @mousemove="handleMouseMove"
          @mouseleave="resetZoom"
          ref="imgShowcase"
        >
          <button
            class="nav-btn prev"
            @click="prevImage"
            v-if="images.length > 1"
          >
            >
          </button>
          <div class="img-container">
            <img
              :src="selectedImage.image"
              :alt="'shoe image ' + activeIndex"
              @click="toggleModal"
            />
            <div
              class="magnifying-glass"
              v-show="isMagnifyingGlassVisible"
              :style="{ backgroundImage: 'url(' + selectedImage.large + ')' }"
            ></div>
          </div>
          <button
            class="nav-btn next"
            @click="nextImage"
            v-if="images.length > 1"
          >
            >
            <!-- <i class="fas fa-chevron-right"></i> -->
          </button>
        </div>
        <div class="img-select">
          <div
            v-for="(item, index) in images"
            :key="index"
            class="img-item"
            @click="changeImage(index)"
            :class="{ active: activeIndex === index }"
          >
            <img :src="item.thumbnail" :alt="'shoe image ' + index" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <ProductModal
    :isModalOpen="isModalOpen"
    :selectedImage="selectedImage"
    :activeIndex="activeIndex"
    @toggleModal="toggleModal"
  />
</template>


<script>
export default {
  components: {
    ProductModal,
  },
  data() {
    let newData = [
      {
        image: img1,
        thumbnail: img1thumbnail,
        large: img1Large,
      },
      {
        image: img2,
        thumbnail: img2thumbnail,
        large: img2Large,
      },
      {
        image: img3,
        thumbnail: img3thumbnail,
        large: img3Large,
      },
      {
        image: videoThumb,
        thumbnail: videoThumbHomeSmall,
        large: videoThumb,
      },
    ];
    return {
      activeIndex: 0,
      images: newData,
      zoomLevel: 1,
      isMagnifyingGlassVisible: false,
      magnifyingGlassSize: { width: 100, height: 100 },
    };
  },
  computed: {
    selectedImage() {
      return this.images[this.activeIndex];
    },
  },
  methods: {
    changeImage(index) {
      this.activeIndex = index;
    },
    prevImage() {
      this.activeIndex =
        (this.activeIndex - 1 + this.images.length) % this.images.length;
    },

    nextImage() {
      this.activeIndex = (this.activeIndex + 1) % this.images.length;
    },
    handleMouseMove(event) {
      const imgShowcase = this.$refs.imgShowcase;
      const { offsetWidth: containerWidth, offsetHeight: containerHeight } =
        imgShowcase;
      const { offsetX: mouseX, offsetY: mouseY } = event;
      const img = imgShowcase.querySelector("img");
      const { naturalWidth: imgNaturalWidth, naturalHeight: imgNaturalHeight } =
        img;

      const scaleX = imgNaturalWidth / containerWidth;
      const scaleY = imgNaturalHeight / containerHeight;

      const glassWidth = this.magnifyingGlassSize.width;
      const glassHeight = this.magnifyingGlassSize.height;

      const backgroundWidth = containerWidth * scaleX;
      const backgroundHeight = containerHeight * scaleY;

      const backgroundPosX = -mouseX * scaleX + glassWidth / 2;
      const backgroundPosY = -mouseY * scaleY + glassHeight / 2;

      const glassPosX = mouseX - glassWidth / 2;
      const glassPosY = mouseY - glassHeight / 2;

      // Check boundaries
      const maxGlassPosX = containerWidth - glassWidth;
      const maxGlassPosY = containerHeight - glassHeight;

      this.isMagnifyingGlassVisible = true;
      this.$refs.magnifyingGlass.style.backgroundSize = `${backgroundWidth}px ${backgroundHeight}px`;
      this.$refs.magnifyingGlass.style.backgroundPosition = `${backgroundPosX}px ${backgroundPosY}px`;
      this.$refs.magnifyingGlass.style.left = `${Math.min(
        Math.max(glassPosX, 0),
        maxGlassPosX
      )}px`;
      this.$refs.magnifyingGlass.style.top = `${Math.min(
        Math.max(glassPosY, 0),
        maxGlassPosY
      )}px`;
    },
    resetZoom() {
      this.isMagnifyingGlassVisible = false;
    },
  },
};
</script>

<style scoped>
.img-showcase {
  position: relative;
  display: flex;
  justify-content: center;
}
.img-showcase img {
  max-width: 300px;

  max-height: 300px; /* Set the maximum height you want */
  width: auto; /* Allow the width to adjust based on the aspect ratio */
  height: auto;
}
.product-wrapper {
  background: #ffff;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-imgs {
  margin-top: 50px;
  display: flex;
  position: relative;
  justify-content: center;
}
.img-select {
  display: flex;
  justify-content: center;
  padding-top: 10px;
}

.active {
  border: 2px solid #ff0000; /* Red border color */
}

.img-item {
  margin: 0.3rem;
  cursor: pointer;
  display: flex;
}

.img-item img {
  width: 100%;
  display: block;
  transition: opacity 0.3s ease-in-out;
}

.img-item:hover img {
  opacity: 0.8;
}

.product-content {
  padding-top: 0;
}

.product-title {
  font-size: 3rem;
  text-transform: capitalize;
  font-weight: 700;
  position: relative;
  color: #12263a;
  margin: 1rem 0;
}

.product-title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 4px;
  width: 80px;
  background: #12263a;
}

.product-link {
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 0.9rem;
  display: inline-block;
  margin-bottom: 0.5rem;
  background: #256eff;
  color: #fff;
  padding: 0 0.3rem;
  transition: all 0.5s ease;
}

.product-link:hover {
  opacity: 0.9;
}

.product-rating {
  color: #ffc107;
}

.product-rating span {
  font-weight: 600;
  color: #252525;
}

.product-price {
  margin: 1rem 0;
  font-size: 1rem;
  font-weight: 700;
}

.product-price span {
  font-weight: 400;
}

.last-price span {
  color: #f64749;
  text-decoration: line-through;
}

.new-price span {
  color: #256eff;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;
  outline: none;
  transition: color 0.3s ease;
}

.nav-btn:hover {
  color: #256eff;
}

.prev {
  left: 0;
  transform: rotate(180deg);
}

.next {
  right: 0;
}
.magnifying-glass {
  position: absolute;
  width: 100px; /* Adjust size as needed */
  height: 100px; /* Adjust size as needed */
  border: 1px solid #ccc; /* Optional: add border */
  pointer-events: none; /* Make it not intercept mouse events */
  display: none; /* Initially hide it */
}

@media only screen and (max-width: 768px) {
  .card {
    grid-template-columns: 2fr;
  }

  .img-showcase img {
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
