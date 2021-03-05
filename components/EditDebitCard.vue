<template>
  <div>
    <h4 class="font-bold">{{ holderName }}</h4>
    <p>{{ cardNumber }}</p>
    <div class="flex justify-between">
      <button class="underline">{{ buttonLeft }}</button>
      <button class="underline">{{ buttonRight }}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['holderName', 'cardNumber', 'buttonLeft', 'buttonRight'],
}
</script>

<style lang="scss">
// .btn-prim {
//   border-radius: 8px 0;
// }
</style>
