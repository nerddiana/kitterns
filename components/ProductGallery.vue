<template>
  <div class="product-gallery">Product Gallery {{ images }}</div>
</template>

<script>
export default {
  props: {
    images: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
