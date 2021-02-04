import auth from './models/auth'
const state = {
    cars: [],
    back: [],

}
const getters = {
    cars(state) {
        return state.cars
    },
    back(state) {
        return state.back
    }

}
const mutations = {
    getcar(state, paload) {
        state.cars = paload
    },
    addcar(state, paload) {
        state.cars.push(paload)
    },
    updatecar(state, payload) {
        let removeIndex = state.cars.map((item) => { return item.slug; }).indexOf(payload.slug);
        state.cars.splice(removeIndex, 1)
        state.cars.push(payload)
    },
    deletcar(state, payload) {
        let removeIndex = state.cars.map((item) => { return item.id; }).indexOf(payload);
        state.cars.splice(removeIndex, 1)
    },
    getback(state, payload) {
        state.back = payload
    },
    addback(state, paylod) {
        state.back.push(paylod)
    },
    deletback(state, payload) {
        let removeIndex = state.back.map((item) => { return item.id; }).indexOf(payload);
        state.back.splice(removeIndex, 1)
    }

}
const actions = {
    getcars({ commit }) {
        this.$axios.$get('/car').then((re) => {
            commit('getcar', re.data)
        })
    },
    addcar({ commit }, paylod) {
        commit('addcar', paylod)
    },
    updatecar({ commit }, paylod) {
        commit('updatecar', paylod)
    },
    deletcar({ commit }, paylod) {
        commit('deletcar', paylod)
    },
    getback({ commit }) {
        this.$axios.get('all').then((re) => {
            commit('getback', re.data)
        })
    },
    addback({ commit }, paylod) {
        commit('addback', paylod)
    },
    deletback({ commit }, paylod) {
        commit('deletback', paylod)
    }

}
const modules = {
    auth
}

export default {
    state,
    getters,
    mutations,
    actions,
    modules
}