export const state = () => ({
  showSelector: false,
})

export const getters = {
  showSelector(state) {
    return state.showSelector
  },
}

export const mutations = {
  toggleShowSelector(state) {
    console.log('toggleShowSelector: ', state.showSelector)
    state.showSelector = !state.showSelector
  },
}
