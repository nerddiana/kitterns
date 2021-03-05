export const state = () => ({
  showSidebar: false,
})

export const mutations = {
  toggleShowSidebar(state) {
    state.showSidebar = !state.showSidebar
  },
}
