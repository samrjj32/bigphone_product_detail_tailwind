<script setup>
import { ref } from "vue";
import ProductModal from "../components/blocks/ProductModal.vue";

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
  <div class="img-display">
    <div class="img-section">
      <button class="nav-btn prev" @click="prevImage" v-if="images.length > 1">
        >
      </button>
      <div
        class="container1"
        ref="containerRef"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        @mousemove="handleMouseMove"
      >
        <img
          ref="sourceRef"
          class="image"
          alt="source"
          :src="selectedImage.image"
        />
        <img
          ref="targetRef"
          class="target"
          alt="target"
          :style="{
            opacity: opacity,
            left: offset.left + 'px',
            top: offset.top + 'px',
          }"
          :src="selectedImage.large"
          @click="toggleModal"
        />
      </div>
      <button class="nav-btn next" @click="nextImage" v-if="images.length > 1">
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
  },
};
</script>

<style>
.container1 {
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
}

.image {
  /* display: block; */

  max-width: 400px;
  max-height: 400px;
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
  background: #ffff;
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
@media only screen and (max-width: 768px) {
  .card {
    grid-template-columns: 2fr;
  }

  .image {
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