<template>
  <div class="pCard max-w-xs overflow-hidden shadow-lg my-2">
    <img
      class="w-full card-img"
      src="https://images.unsplash.com/photo-1591635566278-10dca0ca76ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      alt="Sunset in the mountains"
    />
    <div class="px-6 py-4 pb-0">
      <div class="font-bold text-lg mb-2">{{ prodName }}</div>
      <p class="description text-grey-darker text-sm">{{ prodDesc }}</p>
    </div>
    <div class="px-6 py-4 flex justify-between items-center">
      <div>
        <p class="text-alert text-xs uppercase">antes 200</p>
        <p class="font-extrabold">MXN$100</p>
      </div>
      <div class="votes">
        <div>
          <span
            ><svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.00016 1.5835L10.0602 5.75683L14.6668 6.43016L11.3335 9.67683L12.1202 14.2635L8.00016 12.0968L3.88016 14.2635L4.66683 9.67683L1.3335 6.43016L5.94016 5.75683L8.00016 1.5835Z"
                fill="#FFDA02"
              />
            </svg>
          </span>
          <p>votos</p>
        </div>
      </div>
    </div>
    <div class="px-6 pb-6 flex text-center">
      <btn-primary class="px-6 py-4" btn-value="agregar al carrito" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['prodName', 'prodDesc'],
}
</script>

<style lang="scss">
.card-img {
  //
}
.pCard {
  @apply border border-gray-300;

  border-radius: 16px 2px;
  min-width: 275px;
}

.description {
  line-height: 1.25;
  font-size: 0.75rem;
}
</style>
