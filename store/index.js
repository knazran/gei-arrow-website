export const state = () => ({
  overlayMenu: false
})

export const mutations = {
  toggleOverlayMenu(state) {
    state.overlayMenu = !state.overlayMenu
  }
}

export const getters = {
  getoverlayMenu: (state) => {
    return state.getoverlayMenu
  }
}
