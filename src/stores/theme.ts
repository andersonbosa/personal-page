import { defineStore } from 'pinia'
/* REVIEW */

const theme = defineStore({
  // The ID here must be the unique ID
  id: 'theme',

  state: () => {
    return {
      // themeType: 'light',
      // themeColor: '#8120f0',
    }
  },

  // Getter equivalent to Vuex
  getters: {
    // getThemeType: (state) => state.themeType,
    // getThemeColor: (state) => state.themeColor,
  },

  // Pinia gave up Mutations only using Actions
  actions: {
    // Actions can be asynchronous
    // setThemeType (type: string) {
    //   this.themeType = type
    // },
  },
})

export default theme
