<template>
  <div class="product-view">
    <div v-if="product">
      <div>{{ product.category[`label_${$i18n.locale}`] }}</div>
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
      <div class="comments">
        <div>
          <h4>Calificaciones y comentarios</h4>
          <div class="comment-list">
            <div v-for="comment in product.comments" :key="comment.id">
              <div>
                <div class="stars">
                  <span v-for="star in comment.stars" :key="star">
                    <img src="@/assets/icons/star.svg" alt="icon star" />
                  </span>
                </div>
                <div class="date">
                  <span>{{ comment.created_at }}</span>
                </div>
              </div>
              <div>
                <div>{{ comment.owner.email }}</div>
                <div>{{ comment.message }}</div>
              </div>
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
            category {
              name
              label_es
              label_en
            }
            comments(order_by: { created_at: asc }) {
              created_at
              id
              message
              stars
              owner {
                email
              }
            }
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
      `,
      variables() {
        return {
          product_id: this.$route.params.id,
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
  },
}
</script>
