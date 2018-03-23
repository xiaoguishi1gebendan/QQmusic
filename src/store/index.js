import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        singer: {
            id: '',
            imgarc: '',
            name: ''
        },
        getSingerDatil: [{
            songname: '',
            albumname: ''
        }],
    },
    mutations: {
        getSingerId(state, singer) {
            state.singer = singer
        },
        getSingerDatil(state, singerdatil) {
            state.getSingerDatil = singerdatil
        }
    }
})