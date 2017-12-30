export const outputsSet = ({ dispatch }, output) => {
  dispatch('OUTPUTS_SET');
}

export const inputsSet = ({ dispatch }, input) => {
  dispatch('INPUTS_SET');
}

export const inputUpdate = ({ dispatch }, input) => {
  dispatch('INPUT_UPDATE');
}

export const outputUpdate = ({ dispatch }, output) => {
  dispatch('OUTPUT_UPDATE');
}

export const screensSet = ({ dispatch }, screens) => {
  dispatch('SCREENS_SET');
}
