import Vue from 'vue';
import Vuex from 'vuex';

const state = {
    inputs: {},
    outputs: {},
    screens: []
};

const mutations = {
    INPUTS_SET(state, payload) {
        state.inputs = payload.inputs
    },
    INPUT_UPDATE(state, payload) {

        for (var i = 0; i < payload.inputData.length; i++) {
            let device = payload.inputData[i];
            Vue.set(state.inputs, device.id, device);
        }

    },
    OUTPUT_UPDATE(state, payload) {

        for (var i = 0; i < payload.outputData.length; i++) {
            let device = payload.outputData[i];
            Vue.set(state.outputs, device.id, device);
        }

    },
    OUTPUTS_SET(state, payload) {
        state.outputs = payload.outputs
    },

    SCREENS_SET(state, payload) {
        state.screens = payload.screens;
    },
};

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    app,
    mutations
});