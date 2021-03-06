<template>
  <div class="w-full p-8">
    <!-- info -->
    <div class="flex justify-start flex-col space-y-6">
      <h2 class="font-bold text-2xl text-start">Datos de la cuenta</h2>
      <div class="space-y-2">
        <h3 class="font-semibold">Correo electrónico asociado a la cuenta</h3>
        <p class="text-sm">janedoe@example.com</p>
      </div>
      <h3 class="text-start text-xl font-bold">Cambiar contraseña</h3>
    </div>
    <!-- form -->
    <div class="mt-6 mb-8 w-full flex justify-start align-middle items-center">
      <form class="max-w-lg" action="">
        <div>
          <Input
            class="h-12 w-full flex content-center"
            :label="$t('contactForm.newPsw')"
            :placeholder="$t('contactForm.Psw')"
            type="password"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ['accountEmail'],
}
</script>
