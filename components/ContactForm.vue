<template>
  <div>
    <h2 class="h2-b mt-6">¿Cómo podemos ayudarte?</h2>
    <form class="space-y-12 mt-6" action="">
      <Input class="mt-4 h-12" :label="$t('contactForm.name')" />
      <Input class="h-12" :label="$t('contactForm.email')" />
      <Input class="h-12" :label="$t('contactForm.subject')" />
      <div class="h-32">
        <Input :label="$t('contactForm.message')" />
      </div>
      <Button class="w-full h-12" label="enviar" />
    </form>
  </div>
</template>
