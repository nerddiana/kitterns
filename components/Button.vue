<template>
  <button @click="onClick">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: {
      type: String,
      default: 'Lorem ipsum',
    },
    to: {
      type: String,
      default: null,
    },
  },
  methods: {
    onClick(e) {
      console.log('onClick e: ', e, this.to)
      if (this.to) {
        this.$router.push(this.to)
      }
    },
  },
}
</script>

<style lang="scss">
button {
  @apply border rounded-lg px-4 py-2;
}
</style>
