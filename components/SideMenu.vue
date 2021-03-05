<template>
  <div
    v-if="show"
    class="side-menu-cover"
    :class="{
      'sidebar-cover-animation': !showNow,
    }"
    @click.self="toggleShowSidebar"
  >
    <div
      class="side-menu"
      :class="{
        'sidebar-animation': !showNow,
      }"
    >
      Side menu
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      show: false,
      showNow: false,
    }
  },
  watch: {
    '$store.state.sidebar.showSidebar'(val, old) {
      console.log('$store.state.sidebar.showSidebar val: ', val, ', old: ', old)
      if (val) {
        this.show = true
        setTimeout(() => {
          this.showNow = true
        }, 1)
      } else {
        this.showNow = false
        setTimeout(() => {
          console.log('timeout! ', val, old)
          this.show = false
        }, 300)
      }
    },
  },
  methods: {
    ...mapMutations('sidebar', ['toggleShowSidebar']),
  },
}
</script>

<style lang="scss" scoped>
.side-menu-cover {
  @apply fixed top-0 left-0 w-screen h-screen bg-sidebarcover transform duration-300 ease-in-out;
}

.side-menu {
  @apply absolute top-0 bottom-0 left-0 bg-white p-2 w-sidebar transform duration-300 ease-in-out;
}

.sidebar-cover-animation {
  @apply opacity-0;
}

.sidebar-animation {
  @apply translate-x-sidebar;
}
</style>
