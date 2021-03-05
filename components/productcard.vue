<template>
  <nuxt-link :to="`/products/${productId}`">
    <div class="pCard max-w-xs overflow-hidden shadow-lg my-2">
      <div
        class="w-full card-img aspect-w-6 aspect-h-4 bg-cover bg-center"
        :style="`background-image: url(${imageUrl})`"
      />
      <div class="px-6 py-4 pb-0">
        <div class="font-bold text-lg mb-2">{{ name }}</div>
        <p class="description text-grey-darker text-sm">
          {{ description }}
        </p>
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
      <!--div class="px-6 pb-6 flex text-center">
        <btn-primary class="px-6 py-4" btn-value="agregar al carrito" />
      </div-->
    </div>
  </nuxt-link>
</template>

<script>
export default {
  filters: {
    asCurrency(mount, code, multipler) {
      return code === 'USD' ? mount * multipler : mount
    },
  },
  props: {
    productId: {
      type: String,
      default: '',
    },
    image: {
      type: Object,
      default: () => ({}),
    },
    name: {
      type: String,
      default: 'Nombre del producto',
    },
    description: {
      type: String,
      default: 'Este producto no tiene descripción.',
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
  computed: {
    imageUrl() {
      return Array.isArray(this.image.list) && this.image.list.length
        ? this.image.list[0].src || 'https://placehold.it/500x500'
        : 'https://placehold.it/500x500'
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
