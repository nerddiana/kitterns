export const state = () => ({
  currencyMultipler: 1,
})

export const mutations = {
  setCurrencyMultipler(store, value) {
    store.currencyMultipler = value
  },
}

export const actions = {
  async fetchCurrencyMultipler({ $axios, commit }, { lang }) {
    console.log('fetch for lang: ', lang)
    if (lang === 'es') {
      commit('setCurrencyMultipler', 1)
    } else {
      const { USD_MXN } = await this.$axios.$get(
        'https://mgdf7c9xsa.execute-api.us-east-1.amazonaws.com/default/usdToMxn'
      )
      console.log('currencyMultipler value: ', USD_MXN)
      commit('setCurrencyMultipler', USD_MXN)
    }
  },
}
