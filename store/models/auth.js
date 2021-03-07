import cookie from "js-cookie";
import axios from "axios";
const url = "https://api.albasheerrentcar.com"
const state = {
    user: null,
    token: cookie.get("token"),
    islogin: false,
    error: null,

}
const getters = {
    user(state) {
        return state.user;
    },
    error(state) {
        return state.error
    },
    islogin(state) {
        return state.islogin
    }

}
const mutations = {
    savetoken(state, paylod) {
        cookie.set("token", paylod)
        state.token = paylod
    },
    error(state, paylod) {
        state.error = paylod
    },
    islogin(state, paylod) {
        state.islogin = paylod
    },
    user(state, paylod) {
        state.user = paylod
    }

}
const actions = {
    getuser({ commit }) {
        const token = cookie.get("token");
        if (token !== null && token !== undefined) {
            axios.post(`${url}/api/user`, {
                token: token
            }).then((re) => {
                commit("user", re.data)
            }).catch(() => {})
        }
    },
    login({ commit }, paylod) {
        commit("islogin", true);
        axios.post(`${url}/api/login`, {
            email: paylod.email,
            password: paylod.password
        }).then((re) => {
            if (re.status == 200) {
                commit("error", null)
                commit("savetoken", re.data.access_token)
                axios.post(`${url}/api/user`, {
                    token: cookie.get("token")
                }).then((re) => {
                    commit("islogin", false)
                    commit("user", re.data)
                })
            } else {
                commit("islogin", false)
                commit("error", "the Email or Password not found")
            }

        })
    },

}
export default {
    state,
    getters,
    mutations,
    actions
}