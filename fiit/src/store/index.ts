import { createStore} from 'vuex';

export default createStore({
    state: {
        count: 0
    },
    getters: {
        getCountX2: (state: any) => state.count * 2
    },
    mutations: {
        increment (state: any, payload: number) {
            state.count += payload
        }
    },
    actions: {
        runIncrement: (store: any, payload: any = null) => {
            store.commit('increment')
            store.commit('increment', payload)
            store.commit('increment')
            store.commit('increment')
            store.dispatch('', 0, { root: true})
        }
    }
})