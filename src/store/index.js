import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)
const store =new Vuex.Store({
    state: {
        city:localStoage.city || ''
    },
    getters: {
      doubleCity (state) {
        return state.city + state.city
      }
    },
    actions : {
      changeCityDelayFiveSeconds (context,city){
        setTimeout(() => {
          context.commit('changeCity' , city)
        })
      }
    },
    mutation: {
      changeCity (state, city) {
        localStorage.city = city
        state.city = city
      }
    }
})

export default store