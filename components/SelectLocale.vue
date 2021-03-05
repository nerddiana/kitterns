<template>
  <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LocaleChanger',
  data() {
    return { langs: ['es', 'en'] }
  },
  watch: {
    '$i18n.locale'(lang) {
      console.log('change lang! ', lang)
      this.fetchCurrencyMultipler({ lang })
    },
  },
  methods: {
    ...mapActions('currencyValue', ['fetchCurrencyMultipler']),
  },
}
</script>
