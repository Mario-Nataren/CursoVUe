import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas:[
      {nombre:'Manzana',cantidad: 0, precio: 10},
      {nombre: 'Platano', cantidad: 1, precio: 15},
      {nombre: 'Melon', cantidad: 2, precio: 25}
    ]
  },
  mutations: {
    aumentar(state, index){
      state.frutas[index].cantidad ++
    },
    reset(state){
      state.frutas.forEach(elemento => { elemento.cantidad = 0
        
      });
    }
  },
  actions: {
  },
  modules: {
  }
})
