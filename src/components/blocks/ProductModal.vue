<script setup>
import ImageSection from "../blocks/ImageContainer/Image.vue";
import LeftSectionNew2 from "../LeftSectionNew2.vue";
import VideoSection from "../blocks/VideoContainer/Video.vue";
</script>

<template>
  <div
    v-if="isModalOpen"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40"
  >
    <div class="modal-content">
      <div class="tab-switcher border-b border-gray-300">
        <button
          @click="switchTab(0)"
          :class="{
            'border-b-2 border-customorange': activeTab === 0,
            active: activeTab === 0,
          }"
          class="focus:outline-none"
        >
          Videos
        </button>
        <button
          @click="switchTab(1)"
          :class="{
            'border-b-2 border-customorange': activeTab === 1,
            active: activeTab === 1,
          }"
          class="focus:outline-none"
        >
          Images
        </button>
        <span class="close" @click="toggleModal">&times;</span>
      </div>

      <!-- Modal content here -->
      <VideoSection :currentTab="activeTab === 0" />
      <ImageSection :currentTab="activeTab === 1" :currentIndex="activeIndex" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isModalOpen: Boolean,
    selectedImage: Object,
    activeIndex: Number,
  },
  data() {
    return {
      activeTab: 0, // Track the active tab index
    };
  },
  methods: {
    toggleModal() {
      this.$emit("toggleModal");
    },
    switchTab(index) {
      this.activeTab = index; // Set the active tab index
    },
  },
};
</script>

<style scoped>
/* Modal styling */
.modal-content {
  @apply bg-white p-10 border-2 border-gray-300 min-w-[calc(100%-40px)] max-h-[calc(100%-40px)] overflow-hidden box-border mx-auto;
}

.close {
  @apply text-gray-600 text-2xl font-bold absolute top-16 right-8 cursor-pointer;
}

.tab-switcher button {
  @apply bg-transparent border-none outline-none cursor-pointer py-2 px-4;
}

.tab-switcher button.active {
  @apply border-b-2 border-orange-500;
}
.tab-switcher button.active {
  border-bottom: 2px solid rgb(240 147 5); /* Color for active border bottom */
}
</style>
