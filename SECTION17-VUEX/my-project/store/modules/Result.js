const state = {
    result: 0,
}

const getters = {
    tenResult: state => {
        return state.result + 10;
    },
    nameResult: state => {
        return state.result + 'name result';
    },
}

const mutations = {
    incremantOp(state) {
        state.result++;
    },
    decrement(state) {
        state.result--;
    },
}

const actions = {
    incrementAction: ({ commit }) => {
        commit('incremantOp')
    },

    decrementAction: ({ commit }) => {
        commit('decrement')
    },
}

export default {
    state, getters, mutations, actions
}