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
            console.log(`update input    ${device.id} (${device.name}) ->`, device.data);
            Vue.set(state.inputs, device.id, device);
        }

    },
    OUTPUT_UPDATE(state, payload) {

        
        for (var i = 0; i < payload.outputData.length; i++) {
            let device = payload.outputData[i];
            console.log(`update output   ${device.id} (${device.name}) ->`, device.data);
            Vue.set(state.outputs, device.id, device);
        }

    },
    OUTPUTS_SET(state, payload) {
        state.outputs = payload.outputs
    },

    SCREENS_SET(state, payload) {
        console.log('set screens    ', payload);
        state.screens = payload.screens;
    },
};

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    app,
    mutations
});