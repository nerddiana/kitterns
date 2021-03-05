<template>
  <header class="header py-2 px-4 flex items-center justify-between">
    <div class="flex">
      <button class="h-6 w-6" @click="toggleShowSidebar">
        <svg
          class="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12H21"
            stroke="#080708"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 6H21"
            stroke="#080708"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 18H21"
            stroke="#080708"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
    <div class="flex">
      <img class="h-6" src="../assets/img/logo.svg" alt="" />
    </div>
    <div class="flex items-center">
      <SelectLocale />
      <button class="h-6 w-6">
        <svg
          class="h-6 w-6"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 1.66675L2.5 5.00008V16.6667C2.5 17.1088 2.67559 17.5327 2.98816 17.8453C3.30072 18.1578 3.72464 18.3334 4.16667 18.3334H15.8333C16.2754 18.3334 16.6993 18.1578 17.0118 17.8453C17.3244 17.5327 17.5 17.1088 17.5 16.6667V5.00008L15 1.66675H5Z"
            stroke="#080708"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.5 5H17.5"
            stroke="#080708"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.3334 8.33325C13.3334 9.21731 12.9822 10.0652 12.3571 10.6903C11.732 11.3154 10.8841 11.6666 10.0001 11.6666C9.11603 11.6666 8.26818 11.3154 7.64306 10.6903C7.01794 10.0652 6.66675 9.21731 6.66675 8.33325"
            stroke="#080708"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations('sidebar', ['toggleShowSidebar']),
  },
}
</script>

<style lang="scss">
.header {
  @apply sticky box-border inset-x-0 top-0 w-full bg-white  p-4 shadow-md;
}
</style>
