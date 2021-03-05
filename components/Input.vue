<template>
  <label>
    {{ label }}
    <input v-bind="$attrs" :value="value" v-on="inputListeners" />
  </label>
</template>

<script>
export default {
  inheritAttrs: false,
  props: ['label', 'value', 'labelText'],
  computed: {
    inputListeners() {
      const vm = this
      return Object.assign({}, this.$listeners, {
        input(event) {
          vm.$emit('input', event.target.value)
        },
      })
    },
  },
}
</script>
