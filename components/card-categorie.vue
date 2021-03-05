<template>
  <div
    class="card w-64 h-64 max-w-xs overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
  >
    <img src="../assets/icons/lego.svg" alt="" />
    <h2 class="text-white h2-b">{{ cardText }}</h2>
  </div>
</template>

<script>
export default {
  props: ['cardText'],
}
</script>

<style lang="scss">
.card {
  @apply flex-wrap rounded-lg bg-yellow flex justify-center items-center text-center shadow-md;

  // max-width: 150px;
  // height: 145px;
  padding: 2.5rem 1.5rem;
}
.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
</style>
