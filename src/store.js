// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex)

const state = {
    outputs: []
}

const mutations = {
    SET_OUTPUTS(state, payload) {
        // console.log(state, payload);
        state.outputs = payload.outputs
    },
}

// export default new Vuex.Store({
//   state,
//   mutations
// });

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations
})