<template>
  <button
    class="button-send rounded-lg px-8 py-2 uppercase border-purple border-2"
    @click="onClick"
  >
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

<style scope lang="scss">
.button-send {
  @apply font-bold text-purple;

  border-radius: 8px 0;
}
</style>
