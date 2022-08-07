import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bank: 100,
    moneyPlayRound: 10,
    products: [
      { id: 1, image: require('../../public/image_baucua/nai.png'), money: 0 },
      { id: 2, image: require('../../public/image_baucua/bau.png'), money: 0 },
      { id: 3, image: require('../../public/image_baucua/ga.png'), money: 0 },
      { id: 4, image: require('../../public/image_baucua/ca.png'), money: 0 },
      { id: 5, image: require('../../public/image_baucua/cua.png'), money: 0 },
      { id: 6, image: require('../../public/image_baucua/tom.png'), money: 0 },
    ],
    productsChoice: [
    ]
  },
  getters: {
    products: state => state.products,
  },
  mutations: {
    UPDATE_BANK: (state,productId) => {
      if(state.bank > 0) {
        state.bank = state.bank - state.moneyPlayRound
        return state.products.find((item) => item.id === productId ? (item.money = item.money + state.moneyPlayRound) : '')
      }
    },
    FIRTS_LOAD_GAME: (state) => {
      return state.productsChoice = [...state.products].sort(() => (Math.random() > .5) ? 1 : -1).splice(0,3)
    },
    PLAY_NEW_GAME: (state) => {
      state.productsChoice = [...state.products].sort(() => (Math.random() > .5) ? 1 : -1).splice(0,3)

      state.productsChoice.map((item) => {
        state.products.find((itemPro) => {
          (item.id === itemPro.id) ? state.bank = state.bank + itemPro.money : ''
        })
      })

      state.products.map((itemPro) => {
        state.productsChoice.find((item) => {
          (itemPro.id === item.id) ? state.bank = state.bank + itemPro.money : ''
        })
        itemPro.money = 0
      })
    },
    PLAY_AGAIN_GAME: (state) => {
      state.bank = 100
      state.productsChoice = [...state.products].sort(() => (Math.random() > .5) ? 1 : -1).splice(0,3)
      state.products.map((item) => {
        item.money = 0
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
