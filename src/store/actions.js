export const outputsSet = ({ dispatch }, output) => {
  dispatch('OUTPUTS_SET');
}

export const inputsSet = ({ dispatch }, input) => {
  dispatch('INPUTS_SET');
}

export const inputUpdate = ({ dispatch }, input) => {
  dispatch('INPUT_UPDATE');
}
