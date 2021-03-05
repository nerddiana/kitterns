<template>
  <div class="footer py-8 px-6">
    <img class="w-24" src="../assets/img/logo.svg" alt="" />
    <div class="mt-6">
      <h2 class="h2-b">Menú</h2>
      <ul>
        <li><a href="#">Categorías</a></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Rastrear pedidos</a></li>
        <li><a href="#">Política de cookies</a></li>
        <li><a href="#">Política de devoluciones</a></li>
      </ul>
    </div>

    <payment-cards />
    <ContactForm class="mt-8" />

    <!-- <div class="form grid">
      <div class="mt-6">
        <input-form type="text" holder-text="Jane Doe" label-text="Nombre" />
      </div>
      <div class="mt-6">
        <input-form
          type="email"
          holder-text="janedoe@example.com"
          label-text="Correo electrónico"
        />
      </div>
      <div class="mt-6">
        <input-form type="text" holder-text="" label-text="Asunto" />
      </div>
      <div class="mt-6">
        <input-form
          type="text"
          holder-text="Tu mensaje aquí"
          label-text="Mensaje"
        />
      </div>
      <button
        class="btn-send text-lg font-extrabold text-purple mt-6 uppercase w-full py-4 px-2 bg-white border-2 border-purple"
      >
        enviar
      </button>
    </div> -->
    <div class="text-center">
      <h2 class="h2-b mt-16 uppercase">{{ $t('contactForm.meet') }}</h2>
      <!-- <div class="flex mt-12 mb-12 w-full justify-center flex-col"> -->
      <div class="container">
        <div class="p-6 w-100 flex justify-between">
          <img src="../assets/icons/instagram.svg" alt="" />
          <img src="../assets/icons/facebook.svg" alt="" />
          <img src="../assets/icons/twitter.svg" alt="" />
        </div>
        <div class="about leading-normal w-100">
          <a class="text-sm underline" href="#">Términos y condiciones</a>
          <br />
          <a class="text-sm underline" href="#">Políticas de privacidad</a>
          <p class="text-sm mt-4">© Kitterns 2021</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scope lang="scss">
.footer {
  @apply bg-white shadow-md border border-gray-300;
}

.btn-send {
  border-radius: 8px 0;
}
</style>
