<template>
  <div class="mobile-menu items-center text-center">
    <div class="flex justify-between text-center">
      <nuxt-link to="/">
        <div class="option">
          <img class="icon" src="@/assets/icons/home.svg" alg="icon home" />
          <p class="menuP">Inicio</p>
        </div>
      </nuxt-link>
      <nuxt-link to="/search">
        <div class="option">
          <img class="icon" src="@/assets/icons/search.svg" alg="icon search" />
          <p class="menuP">Buscar</p>
        </div>
      </nuxt-link>
      <nuxt-link to="/orders">
        <div class="option">
          <img class="icon" src="@/assets/icons/truck.svg" alg="icon truck" />
          <p class="menuP">Pedidos</p>
        </div>
      </nuxt-link>
      <div>
        <button class="option" @click="toggleShowSelector">
          <img class="icon" src="@/assets/icons/user.svg" alg="icon user" />
          <p class="menuP">Mi cuenta</p>
        </button>
      </div>
    </div>
    <BottomSelector />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations('bottomSelector', ['toggleShowSelector']),
  },
}
</script>

<style lang="scss" scoped>
.mobile-menu {
  @apply sticky inset-x-0 bottom-0 w-screen bg-white p-2;

  box-shadow: 0 -5px 5px -5px #cdcdcd;
}
.menuP {
  font-size: 0.75rem;
  line-height: 1rem;
}

.option {
  @apply flex flex-col justify-center items-center w-full py-2 px-2 text-center h-auto;
}

.icon {
  @apply flex w-6 justify-items-center mb-1;
}
</style>
