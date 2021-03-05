<template>
  <a href="#" rel="noopener noreferrer" class="btn-sm"> {{ btnText }} </a>
</template>

<script>
export default {
  props: ['btnText'],
}
</script>

<style lang="scss">
.btn-sm {
  @apply h-auto py-2 px-8 bg-white uppercase shadow-sm text-purple font-bold shadow-sm;

  border-radius: 8px 0;
  max-width: 200px;
}
</style>
