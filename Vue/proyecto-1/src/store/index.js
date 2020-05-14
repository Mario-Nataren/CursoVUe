import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas: [{nombre: 'Manzana', cantidad:0}, 
    {nombre: 'Pera', cantidad:0},
    {nombre:'Platano', cantidad:0}]
  },
  mutations: {
    aumentar(state, index){
      state.frutas[index].cantidad ++
    },
    reset(state){
      state.frutas[0].cantidad = 0,
      state.frutas[1].cantidad = 0,
      state.frutas[2].cantidad = 0
    }
  },
  actions: {
  },
  modules: {
  }
})
