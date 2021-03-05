<template>
  <header class="header py-2 px-4 flex items-center justify-between">
    <div class="flex">
      <button class="h-6 w-6" @click="toggleShowSidebar">
        <img src="@/assets/icons/menu.svg" alt="icon menu" />
      </button>
    </div>
    <div class="flex">
      <img class="h-6" src="../assets/img/logo.svg" alt="" />
    </div>
    <div class="flex items-center">
      <SelectLocale />
      <nuxt-link to="/cart">
        <button class="h-6 w-6">
          <img src="@/assets/icons/bag.svg" alt="icon bag" />
        </button>
      </nuxt-link>
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
