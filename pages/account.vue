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
      <form
        class="flex flex-wrap content-center align-center max-w-lg"
        action=""
      >
        <div class="space-y-10 mb-8 md:mr-4">
          <Input
            class="h-12 w-full flex content-center"
            :label="$t('contactForm.newPsw')"
            :placeholder="$t('contactForm.Psw')"
            type="password"
          />
          <div class="flex justify-between space-x-2">
            <div class="space-y-1">
              <p class="text-alert text-xs">
                {{ $t('access.lowercase') }}
              </p>

              <p class="text-alert text-xs">
                {{ $t('access.uppercase') }}
              </p>
            </div>
            <div>
              <p class="text-alert text-xs">
                {{ $t('access.character') }}
              </p>
            </div>
          </div>
        </div>
        <div class="">
          <div class="space-y-10">
            <Input
              :label="$t('contactForm.confirmNewPsw')"
              :placeholder="$t('contactForm.confirmNewPsw')"
              type="password"
              class="h-12 flex content-center"
            />
            <p class="text-alert text-sm">
              {{ $t('access.wrongPss') }}
            </p>
          </div>
          <div class="flex mt-8">
            <btn-primary class="w-full" :btn-value="$t('buttons.logIn')" />
          </div>
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
