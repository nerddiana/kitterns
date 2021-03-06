<template>
  <div class="product-view">
    <div v-if="product">
      <div>{{ category }}</div>
      <div>
        <div>
          <ProductGallery :images="product.images" />
        </div>
        <div>
          <h2>{{ product.name }}</h2>
          <p>{{ product.description }}</p>
        </div>
        <div class="product-info">
          <div>
            <p>Antes: {{ product.last_price }}</p>
            <h3>{{ product.current_price }}</h3>
          </div>
          <div>
            <div class="stars">
              <span v-for="star in product.stars" :key="star">
                <img
                  class="star"
                  src="@/assets/icons/star.svg"
                  alt="star icon"
                />
              </span>
            </div>
            <div>
              <p>{{ product.votes }} votes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  apollo: {
    products: {
      query: gql`
        query getProductById($product_id: uuid) {
          products(where: { id: { _eq: $product_id } }) {
            id
            category
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
      `,
      variables() {
        return {
          product_id: this.$route.params.id,
        }
      },
    },
    categories: {
      query: gql`
        query getCategoryByName($category_name: String) {
          categories(where: { name: { _eq: $category_name } }) {
            name
            label_es
            label_en
          }
        }
      `,
      variables() {
        return {
          category_name: this.product?.category || '',
        }
      },
    },
  },
  computed: {
    product() {
      return Array.isArray(this.products) && this.products.length
        ? this.products[0]
        : null
    },
    category() {
      return Array.isArray(this.categories) && this.categories.length
        ? this.categories[0]
        : null
    },
  },
}
</script>
