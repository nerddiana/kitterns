<template>
  <div class="product-gallery">
    <div
      class="product-preview w-full aspect-w-1 aspect-h-1 bg-cover bg-center"
      :style="`background-image: url(${images.list[this.activeIndex].src})`"
    ></div>
    <div>
      <div class="w-full flex">
        <div
          v-for="(image, i) in images.list"
          :key="image.src"
          class="w-1/6 p-2"
        >
          <div
            class="w-full aspect-w-1 aspect-h-1 bg-cover bg-center"
            :style="`background-image: url(${image.src})`"
            @click="activeIndex = i"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      activeIndex: 0,
    }
  },
}
</script>
