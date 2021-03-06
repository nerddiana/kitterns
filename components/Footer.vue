<template>
  <div class="footer py-8 px-6">
    <img class="w-24" src="../assets/img/logo.svg" alt="" />
    <div class="mt-6">
      <h2 class="h2-b">Menú</h2>
      <ul class="underline flex">
        <li><a href="#">Categorías</a></li>
        <li><a href="#">Rastrear pedidos</a></li>
        <li><a href="#">Política de cookies</a></li>
        <li><a href="#">Política de devoluciones</a></li>
      </ul>
    </div>

    <payment-cards />
    <ContactForm class="mt-8" />

    <div class="text-center flex flex-col justify-center space-y-8">
      <div>
        <h2 class="h2-b w-full mt-16 uppercase">
          {{ $t('contactForm.meet') }}
        </h2>
      </div>
      <div>
        <div class="flex space-x-12 justify-center">
          <img src="../assets/icons/instagram.svg" alt="" />
          <img src="../assets/icons/facebook.svg" alt="" />
          <img src="../assets/icons/twitter.svg" alt="" />
        </div>
      </div>
      <div>
        <div class="about leading-normal w-100">
          <div class="flex justify-center flex-wrap md:space-x-6 text-center">
            <a class="text-sm underline" href="#">Términos y condiciones</a>
            <a class="text-sm underline" href="#">Políticas de privacidad</a>
          </div>
          <p class="text-sm mt-4">© Kitterns 2021</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scope lang="scss">
.footer {
  @apply bg-white border border-gray-300;
}

.btn-send {
  border-radius: 8px 0;
}
</style>
