<template>
  <div class="side-menu-content">
    <div class="flex items-center justify-center px-2 py-4">
      <img class="h-10" src="@/assets/img/logo.svg" alt="logo kitterns" />
    </div>
    <div>
      <div>
        <h3 class="text-lg font-bold">
          {{ $t('components.sideMenuContent.categoriesLabel') }}
        </h3>
        <ul>
          <li
            v-for="category in categories"
            :key="category.name"
            class="border"
            @click="onClick(category)"
          >
            {{ category[`label_${$i18n.locale}`] }}
          </li>
        </ul>
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
