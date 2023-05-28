import { defineStore } from 'pinia'

const theme = defineStore({
  // The ID here must be the unique ID
  id: 'theme',
  state: () => {
    return {
      themeType: '亮蓝色',
      themeColor: '#2080F0FF',
    }
  },

  // Getter equivalent to Vuex
  getters: {
    getThemeType: (state) => state.themeType,
    getThemeColor: (state) => state.themeColor,
  },

  // Pinia gave up Mutations only using Actions
  actions: {
    // Actions can be asynchronous
    setThemeType (type: string) {
      this.themeType = type
    },
  },
})

export default theme
