<template>
  <!-- <div class="container">
    <div>
      <template>
        <section>
          <div v-if="$device.isDesktop">Desktop</div>
          <div v-else-if="$device.isTablet">Tablet</div>
          <div v-else>Mobile</div>
        </section>
      </template>

      <h2>un subtitulo {{ $t('homePage.wellcome') }}</h2>
      <SelectLocale />
      <Button label="Enviar" to="/help" />
      <p>Valor: {{ valor }}</p>
      <Input v-model="valor" placeholder="un input" />
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div> -->
  <div>
    <section class="hero">
      <div>
        <h1 class="title">{{ $t('homePage.soldOut') }}</h1>
        <h2 class="subtitle">¡MESES SIN INTERESES!</h2>
        <div class="btn-container">
          <btn-small :btn-text="$t('homePage.soldOut')" />
        </div>
      </div>
    </section>

    <section class="p-6">banner oferta</section>

    <section class="p-6">
      <EditDebitCard
        holder-name="Jane Doe"
        card-number="**** **** **** 4444"
        :button-left="$t('buttons.delete')"
        :button-right="$t('buttons.edit')"
      />
    </section>

    <section>
      <!-- <sort-button btn-name="Precio" /> -->
      <commentinput />
    </section>

    <div class="product-cards">
      <section>
        <h2 class="px-6 mb-4 h2-b">¡OFERTAS!</h2>
        <div
          class="overflow-x-scroll overflow-hidden px-6 pb-10 hide-scroll-bar"
        >
          <div class="flex flex-nowrap">
            <div
              v-for="product in products"
              :key="product.id"
              class="inline-block mr-6"
            >
              <productcard
                :product-id="product.id"
                :image="product.images"
                :name="product.name"
                :description="product.description"
                :last-price="product.last_price"
                :current-price="product.current_price"
                :stars="product.stars"
                :votes="product.votes"
              />
            </div>
            <div class="list-end-spacer"></div>
          </div>
        </div>
      </section>
    </div>

    <div>
      <div class="">
        <section>
          <h2 class="mb-4 px-6 h2-b">Categorías</h2>
          <div class="overflow-x-scroll px-6 pb-10 hide-scroll-bar">
            <!--div class="flex flex-nowrap">
              <div class="inline-block mr-6">
                <card-categorie card-text="Juegos y juguetes" />
              </div>
              <div class="inline-block mr-6">
                <card-categorie card-text="Boxing kits" />
              </div>
              <div class="inline-block mr-6">
                <card-categorie card-text="Especialidad" />
              </div>
              <div class="inline-block mr-6">
                <card-categorie card-text="Accesorios" />
              </div>
              <div class="inline-block mr-6">
                <card-categorie card-text="Productos de oficina" />
              </div>
              <div class="list-end-spacer"></div>
            </div-->
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  apollo: {
    products: gql`
      query getProducts {
        products(limit: 10) {
          images
          name
          stock
          description
          current_price
          id
          last_price
          stars
          votes
        }
      }
    `,
  },
  methods: {
    onInput(e) {
      console.log('onInput e: ', e)
    },
  },
}
</script>

<style lang="scss">
/* Sample `apply` at-rules with Tailwind CSS  */

.hero {
  @apply flex bg-purple p-4 items-center justify-center align-middle;

  min-height: 275px;
}

section.container {
  @apply px-8 py-4;
}

.list-end-spacer {
  display: block;
  width: 1px;
  height: 1px;
  background-color: transparent;
  border: 1px solid transparent;
}

.links {
  padding-top: 15px;
}
</style>
