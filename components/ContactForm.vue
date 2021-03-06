<template>
  <div>
    <h2 class="h2-b mt-6">¿Cómo podemos ayudarte?</h2>
    <div>
      <form class="mt-6 space-y-12" action="">
        <div class="flex flex-wrap w-full lg:space-x-6">
          <Input class="h-12 max-w-md mb-12" :label="$t('contactForm.name')" />
          <Input class="h-12 max-w-md" :label="$t('contactForm.email')" />
        </div>
        <div class="flex flex-wrap w-full lg:space-x-6">
          <Input
            class="h-12 max-w-md mb-12"
            :label="$t('contactForm.subject')"
          />
          <Input class="h-12 max-w-md" :label="$t('contactForm.message')" />
        </div>
        <div class="mt-12 max-w-md">
          <Button class="w-full h-12" label="enviar" />
        </div>
      </form>
    </div>
  </div>
</template>
