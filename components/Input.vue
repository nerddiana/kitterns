<template>
  <label class="w-full flex flex-col space-y4">
    <span class="h4-b mb-2 focus:ring-2 focus:ring-blue-600">
      {{ label }}
    </span>
    <input
      class="h-full mt-1 rounded-lg shadow-sm border-gray-300 border p-4"
      v-bind="$attrs"
      :value="value"
      v-on="inputListeners"
    />
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
