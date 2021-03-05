<template>
  <button
    class="border rounded-lg border-gray-300 px-6 py-2 bg-white shadow-sm"
  >
    <div class="flex items-center justify-between">
      <h3>{{ btnName }}</h3>
      <span
        ><svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.9882 19.1513L20.9844 17.1551L21.8682 18.0388L18.8057 21.1013L18.3632 21.5438L17.9219 21.1026L14.8594 18.0401L15.7432 17.1551L17.7382 19.1513V9.02131H18.9882V19.1513ZM11.6132 11.1426V21.2726H12.8632V11.1426L14.8594 13.1388L15.7432 12.2551L12.6807 9.19256L12.2369 8.75006L11.7944 9.19256L8.73315 12.2551L9.6169 13.1388L11.6132 11.1426Z"
            fill="#080708"
          />
        </svg>
      </span>
    </div>
  </button>
</template>

<script>
export default {
  props: ['btnName'],
}
</script>

<style lang="scss">
.btn-prim {
  border-radius: 8px 0;
}
</style>
