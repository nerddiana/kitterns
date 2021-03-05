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
        <h1 class="title">¡MESES SIN INTERESES!</h1>
        <h2 class="subtitle">¡MESES SIN INTERESES!</h2>
        <div class="btn-container">
          <btn-small btn-text="productos" />
        </div>
      </div>
    </section>

    <section class="p-6">banner oferta</section>

    <section class="p-6">
      <!-- <search-bar /> -->
      <!-- <productcard
        prod-desc="culo culo culo culo culo culo culo culo Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere repellat eligendi eum."
        prod-name="Nombre del producto"
      /> -->
    </section>

    <template>
      <section>
        <!-- <sort-button btn-name="Precio" /> -->
        <commentinput />
      </section>
    </template>

    <template class="product-cards">
      <section class="container">
        <h2 class="mb-4 h2-b">¡OFERTAS!</h2>
        <div class="overflow-x-scroll overflow-hidden pb-10 hide-scroll-bar">
          <div class="flex flex-nowrap">
            <div class="inline-block mr-6">
              <productcard
                prod-desc="culo culo culo culo culo culo culo culo Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere repellat eligendi eum."
                prod-name="Nombre del producto"
              />
            </div>
            <div class="inline-block mr-6">
              <productcard
                prod-desc="culo culo culo culo culo culo culo culo Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere repellat eligendi eum."
                prod-name="Nombre del producto"
              />
            </div>
            <div class="inline-block mr-6">
              <productcard
                prod-desc="culo culo culo culo culo culo culo culo Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere repellat eligendi eum."
                prod-name="Nombre del producto"
              />
            </div>
          </div>
        </div>
      </section>
    </template>

    <template>
      <div class="">
        <section class="container">
          <h2 class="mb-4 h2-b">Categorías</h2>
          <div class="overflow-x-scroll pb-10 hide-scroll-bar">
            <div class="flex flex-nowrap">
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
            </div>
          </div>
        </section>
      </div>
    </template>
  </div>
</template>

<script>
import CardCategorie from '~/components/card-categorie.vue'
export default {
  data() {
    return {
      valor: CardCategorie,
    }
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

// .title {
//   font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
//     'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
//   display: block;
//   font-weight: 300;
//   font-size: 100px;
//   color: #35495e;
//   letter-spacing: 1px;
// }

// .subtitle {
//   font-weight: 300;
//   font-size: 42px;
//   color: #526488;
//   word-spacing: 5px;
//   padding-bottom: 15px;
// }

.links {
  padding-top: 15px;
}
</style>
