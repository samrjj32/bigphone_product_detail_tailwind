<script setup>
import LeftSectionNew2 from "../../LeftSectionNew2.vue";
import img1 from "../../../../src/assets/images/phone1.jpeg";
import img2 from "../../../../src/assets/images/phone2.jpeg";
import img3 from "../../../../src/assets/images/phoneback.jpeg";

import img1Large from "../../../../src/assets/images/phone1large.jpeg";
import img2Large from "../../../../src/assets/images/phone2large.jpeg";
import img3Large from "../../../../src/assets/images/phonebacklarge.jpeg";

import img1thumbnail from "../../../../src/assets/images/phone1thumbnail.jpeg";
import img2thumbnail from "../../../../src/assets/images/phone2thumbnail.jpeg";
import img3thumbnail from "../../../../src/assets/images/phonebackthumbnail.jpeg";
import { watch } from "vue";
import { ref } from "vue";

const containerRef = ref(null);
</script>

<template>
  <div v-if="currentTab" class="img-section">
    <LeftSectionNew2 :data="selectedImage" />
    <div class="details">
      <h1>Samsung Galaxy S23 Ultra 5G</h1>
      <h6>Samsung Galaxy S23 Ultra 5G</h6>
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
</template>


<script>
export default {
  props: {
    currentTab: Boolean,
    currentIndex: Number,
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
  },
};
</script>

<style scoped>
.details {
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 100vh;
}

.img-select {
  display: flex;
  justify-content: start;
}

.active {
  border: 2px solid #ff0000; /* Red border color */
}

.img-item {
  margin: 0.3rem;
  cursor: pointer;
}

.img-item img {
  width: 100%;
  display: block;
  transition: opacity 0.3s ease-in-out;
}

.img-item:hover img {
  opacity: 0.8;
}

@media only screen and (max-width: 768px) {
  .img-section {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .image_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    margin-left: 0px;
    height: 90vh;
  }
  .image_banner {
    padding-bottom: 150px;
    max-width: calc(80% - 50px);
    max-height: calc(80% - 50px);
  }

  .details {
    display: block;
    /* flex-direction: column;
    justify-content: start; */
    height: 20vh;
  }
}
</style>

