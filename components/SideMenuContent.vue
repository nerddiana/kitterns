<template>
  <div>
    <div class="mt-6 p-6">
      <logo />
    </div>
    <div class="p-6">
      <h3 class="text-lg font-bold">
        {{ $t('components.sideMenuContent.categoriesLabel') }}
      </h3>
      <ul>
        <li
          v-for="category in categories"
          :key="category.name"
          class="border space-y-4"
          @click="onClick(category)"
        >
          {{ category[`label_${$i18n.locale}`] }}
        </li>
      </ul>
    </div>
    <div class="w-full px-6 py-4 text-center absolute bottom-0 left-0">
      <div class="flex text-center justify-center space-x-6">
        <img src="../assets/icons/instagram.svg" alt="" />
        <img src="../assets/icons/facebook.svg" alt="" />
        <img src="../assets/icons/twitter.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import { mapMutations } from 'vuex'

export default {
  apollo: {
    categories: gql`
      query MyQuery {
        categories(order_by: { name: asc }) {
          label_en
          label_es
          name
        }
      }
    `,
  },
  methods: {
    ...mapMutations('sidebar', ['toggleShowSidebar']),
    onClick(category) {
      this.$router.push(this.localePath(`/products?category=${category.name}`))
      this.toggleShowSidebar()
    },
  },
}
</script>
