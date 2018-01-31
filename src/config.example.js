let config = { 
  server: {
    address: 'http://192.168.178.72:3000',
  },
  debug: true, // shows more verbose messages in browser console
  ui: {
    theme: "domusto",
    skin: "default",
    batteryWarningLevel: "4", // warn when this battery level is reached
    temperatureFormat: "celcius" // celcius | fahrenheit
  }
};

module.exports = config;