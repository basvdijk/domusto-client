//
// filters.js
//

function round(value, decimals) {

    if (!value) {
        value = 0;
    }

    if (!decimals) {
        decimals = 0;
    }

    return parseFloat(Math.round(value * 100) / 100).toFixed(decimals);

}

export { round }