import Vue from 'vue';
import Vuex from 'vuex';

const state = {
    outputs: []
};

const mutations = {
    SET_OUTPUTS(state, payload) {
        // console.log(state, payload);
        state.outputs = payload.outputs
    },
};

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations
});