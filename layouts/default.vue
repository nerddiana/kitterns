<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
    <MobileMenu v-if="$device.isMobile" />
    <SideMenu v-if="!$device.isDesktop" />
  </div>
</template>
