// Exercise 4 - `getCurrentTemperature`
// -----------------------------------

const { getCurrentTemperatureAtPosition } = require('./exercise-3');
const { getAddressPosition } = require('./exercise-2');

// Given an address as a string, returns the temperature
// Use the getCurrentTemperatureAtPosition function
function getCurrentTemperature(address) {
  return getAddressPosition(address)
    .then((position) => {
      return getCurrentTemperatureAtPosition(position);
    })
    .catch((error) => console.log(error.statusCode, error.message));
}

getCurrentTemperature('1060 boul Robert-Bourassa, Montréal, QC H3B 4V3');
