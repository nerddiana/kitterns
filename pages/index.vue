<template>
  <div class="container">
    <div>
      <!--Logo />
      <img src="@/assets/img/imagen.jpeg" />
      <img src="https://cde.laprensa.e3.pe/ima/0/0/2/3/8/238082.jpg" /-->
      <h1 class="title">kitterns</h1>
      <h2>un subtitulo</h2>
      <Button label="Call To Acction (go to help)" to="/help" />
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      valor: String,
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

.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
