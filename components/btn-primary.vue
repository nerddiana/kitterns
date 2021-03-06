<template>
  <a
    class="btn-prim w-full hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out text-center text-sm uppercase px-12 py-4 font-extrabold text-white bg-purple"
    href="#"
  >
    {{ btnValue }}
  </a>
</template>

<script>
export default {
  props: ['btnValue'],
}
</script>

<style lang="scss">
.btn-prim {
  border-radius: 8px 0;
}
</style>
