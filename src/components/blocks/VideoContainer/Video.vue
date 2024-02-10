<script setup>
import img1 from "../../../../src/assets/images/phone1.jpeg";
import img2 from "../../../../src/assets/images/phone2.jpeg";
import img3 from "../../../../src/assets/images/phoneback.jpeg";

import video1large from "../../../../src/assets/videothumbnails/videoLarge1.png";
import video1Small from "../../../../src/assets/videothumbnails/videoSmall1.png";
import video2Large from "../../../../src/assets/videothumbnails/video2large.webp";

import example1 from "../../../../src/assets/videothumbnails/example1.jpg";

import example2 from "../../../../src/assets/videothumbnails/example2.jpg";

import playThumb from "../../../assets/images/videoThumb.png";

import { watch } from "vue";
</script>

<template>
  <div v-if="currentTab" class="image_container">
    <div class="image_wrapper">
      <img
        class="image_banner"
        :src="selectedImage.image"
        :alt="'shoe image '"
      />
      <img class="playThumb" :src="playThumb" :alt="'thumb'" />
    </div>
    <div class="details">
      <h4>Samsung Galaxy S23 Ultra 5G</h4>
      <div class="img-select">
        <div
          v-for="(item, index) in images"
          :key="index"
          class="img-item"
          @click="changeImage(index)"
        >
          <img
            :class="{ active: activeIndex === index }"
            :src="item.thumbnail"
            :alt="'shoe image ' + index"
          />

          <h5>Samsung Galaxy S23 Ultra 5G</h5>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    currentTab: Boolean,
  },
  data() {
    let newData = [
      {
        image: example1,
        thumbnail: example1,
      },
      {
        image: example2,
        thumbnail: example2,
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
.image_container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 90vh;
}
.image_wrapper {
  position: relative;
  min-width: calc(70% - 80px);
}

.playThumb {
  width: 10%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1; /* Ensure it's above the image */
}

.image_banner {
  width: 100%;
  /* min-width: calc(70% - 80px); */
  /* max-height: calc(70% - 80px); */
  /* width: auto;
  height: auto; */
}
.details {
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 90vh;
  margin-top: 140px;
}

.details h4 {
  display: block;
  background-color: #f1eded;
  border-radius: 4px;
  padding: 7.5px 10px;
  margin-bottom: 14px;
  width: 100%;
  visibility: visible;
}

.img-select {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}
.active {
  border: 2px solid rgb(240 147 5); /* Red border color */
}

.img-item {
  display: flex;
}
.img-select img {
  width: 20%;
  margin-right: 20px;
}

@media only screen and (max-width: 768px) {
  .image_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    margin-left: 0px;
    height: 90vh;
  }
  .image_banner {
    /* padding-bottom: 150px; */
    width: 100%;
  }

  .details {
    display: block;
    /* flex-direction: column;
    justify-content: start; */
    height: 20vh;
  }
}
</style>
