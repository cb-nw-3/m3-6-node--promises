// Exercise 4 - `getCurrentTemperature`
// -----------------------------------

const { getCurrentTemperatureAtPosition } = require('./exercise-3')
const { getAddressPosition } = require('./exercise-2')

// Given an address as a string, returns the temperature
// Use the getCurrentTemperatureAtPosition function
function getCurrentTemperature(address) {
  return getAddressPosition(address)
    .then(data => {
      return getCurrentTemperatureAtPosition(data)
    })
    .then(result => {
      console.log('temperature@position', result);
      return result
    })
    .catch(error => {
      console.log('error', error.message)
    })
}

getCurrentTemperature('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8')