import Vue from 'vue';
import Vuex from 'vuex';

const state = {
    inputs: [],
    outputs: []
};

const mutations = {
    INPUTS_SET(state, payload) {
        state.inputs = payload.inputs
    },
    INPUT_UPDATE(state, payload) {

        for (var i = 0; i < state.inputs.length; i++) {
            var input = state.inputs[i];

            if (input.id === payload.inputData.id) {
                Vue.set(state.inputs, i, payload.inputData);
                return;
            }
            
        }

    },
    OUTPUT_UPDATE(state, payload) {

        for (var i = 0; i < state.outputs.length; i++) {
            var output = state.outputs[i];

            if (output.id === payload.outputData.id) {
                Vue.set(state.outputs, i, payload.outputData);
                return;
            }
            
        }

    },
    OUTPUTS_SET(state, payload) {
        state.outputs = payload.outputs
    },
};

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations
});