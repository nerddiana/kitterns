<template>
  <div>
    <div v-for="tab in tablist" :key="tab.tabId">
      <p @click="onSelectTab(tab.tabId)">{{ tab.label }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tablist: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onSelectTab(tabId) {
      console.log('onSelectTab tabId: ', tabId)
      this.$emit('change', tabId)
    },
  },
}
</script>
