<template>
  <div
    class="bottom-selector"
    :class="{ 'bottom-selector-animation': !showSelector }"
  >
    <div class="bottom-selector-content">
      <template v-for="option in options">
        <nuxt-link :key="option.label" :to="option.path">
          <div class="option">
            <img
              class="icon"
              :src="require(`@/assets/icons/${option.icon}.svg`)"
              :alt="option.iconAlt"
            />
            <p class="menuP">{{ option.label }}</p>
          </div>
        </nuxt-link>
      </template>
      <div>
        <button class="close-btn" @click="toggleShowSelector">Cerrar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters('bottomSelector', ['showSelector']),
    options() {
      return [
        {
          label: this.$t('components.bottomSelector.accountData'),
          path: '/account',
          icon: 'home',
          iconAlt: 'icon home',
        },
        {
          label: this.$t('components.bottomSelector.personalData'),
          path: '/profile',
          icon: 'home',
          iconAlt: 'icon home',
        },
        {
          label: this.$t('components.bottomSelector.paymentMethods'),
          path: '/cards',
          icon: 'home',
          iconAlt: 'icon home',
        },
        {
          label: this.$t('components.bottomSelector.adresses'),
          path: '/adresses',
          icon: 'home',
          iconAlt: 'icon home',
        },
        {
          label: this.$t('components.bottomSelector.admin.products'),
          path: '/admin/products',
          icon: 'home',
          iconAlt: 'icon home',
        },
        {
          label: this.$t('components.bottomSelector.admin.users'),
          path: '/admin/users',
          icon: 'home',
          iconAlt: 'icon home',
        },
      ]
    },
  },
  watch: {
    showSelector(val) {
      console.log('watch showSelector: ', val)
    },
  },
  methods: {
    ...mapMutations('bottomSelector', ['toggleShowSelector']),
  },
}
</script>

<style lang="scss" scoped>
.bottom-selector {
  @apply fixed inset-x-0 bottom-0 w-screen bg-white p-2 rounded-t-3xl transform duration-300 ease-in-out;

  box-shadow: 0 -10px 10px -5px rgba(0, 0, 0, 0.25);
}

.bottom-selector-animation {
  @apply translate-y-full;

  box-shadow: none;
}

.bottom-selector-content {
  @apply p-4;
}

.menuP {
  font-size: 0.75rem;
  line-height: 1rem;
}

.option {
  @apply flex flex-row ml-2 items-center w-full py-2 text-center h-auto;
}

.icon {
  @apply flex w-6 justify-items-center my-1 mr-4;
}

.close-btn {
  @apply block py-2 w-full border bg-gray-200 mt-5;
}
</style>
