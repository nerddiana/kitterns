<template>
  <div class="pCard max-w-xs overflow-hidden shadow-lg my-2">
    <img class="w-full card-img" :src="image" alt="Sunset in the mountains" />
    <div class="px-6 py-4 pb-0">
      <div class="font-bold text-lg mb-2">{{ name }}</div>
      <p class="description text-grey-darker text-sm">{{ description }}</p>
    </div>
    <div class="px-6 py-4 flex justify-between items-center">
      <div>
        <p class="text-alert text-xs uppercase">
          {{ $t('components.productCard.lastPriceLabel') }}
          {{
            lastPrice
              | asCurrency(
                $t('globals.currencyCode'),
                $store.state.currencyValue.currencyMultipler
              )
              | currency
          }}
        </p>
        <p class="font-extrabold">
          {{ $t('globals.currencyCode') }}
          {{
            currentPrice
              | asCurrency(
                $t('globals.currencyCode'),
                $store.state.currencyValue.currencyMultipler
              )
              | currency
          }}
        </p>
      </div>
      <div>
        <div class="flex">
          <span v-for="star in stars" :key="star">
            <img src="@/assets/icons/star.svg" alt="icon star" />
          </span>
        </div>
        <p>{{ votes }} {{ $t('components.productCard.votes') }}</p>
      </div>
    </div>
    <div class="px-6 pb-6 flex text-center">
      <btn-primary class="px-6 py-4" btn-value="agregar al carrito" />
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    asCurrency(mount, code, multipler) {
      return code === 'USD' ? mount * multipler : mount
    },
  },
  props: {
    image: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1591635566278-10dca0ca76ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    name: {
      type: String,
      default: 'Nombre del producto',
    },
    description: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet., lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.',
    },
    lastPrice: {
      type: Number,
      default: 0.5,
    },
    currentPrice: {
      type: Number,
      default: 1.0,
    },
    stars: {
      type: Number,
      default: 3,
    },
    votes: {
      type: Number,
      default: 0,
    },
  },
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

.stars span {
  @apply inline;
}
</style>
