<template>
  <div>
    <h3>Lista de productos {{ $route.query }}</h3>
    <div>
      <div v-for="product in products" :key="product.id">
        <productcard
          :product-id="product.id"
          :image="product.images"
          :name="product.name"
          :description="product.description"
          :last-price="product.last_price"
          :current-price="product.current_price"
          :stars="product.stars"
          :votes="product.votes"
        />
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  apollo: {
    products: {
      query() {
        if (this.$route.query.category) {
          return gql`
            query getProductsByCategory($category_name: name) {
              products(where: { category_name: { _eq: $category_name } }) {
                id
                current_price
                description
                images
                last_price
                name
                stars
                stock
                votes
              }
            }
          `
        } else {
          return gql`
            query getProductsByCategory {
              products {
                id
                current_price
                description
                images
                last_price
                name
                stars
                stock
                votes
              }
            }
          `
        }
      },
      variables() {
        return { category_name: this.$route.query.category }
      },
    },
  },
}
</script>
