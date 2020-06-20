// Exercise 4 - `getCurrentTemperature`
// -----------------------------------

const { getCurrentTemperatureAtPosition } = require("./exercise-3");
const { getAddressPosition } = require("./exercise-2");

//getAddressPosition("1455 Boulevard de Maisonneuve O, Montreal, QC H3G 1M8");

//let testPos = { lat: 45.497118, lng: -73.579044 };
//getCurrentTemperatureAtPosition(testPos);

// Given an address as a string, returns the temperature
// Use the getCurrentTemperatureAtPosition function
function getCurrentTemperature(address) {
  //address ==> position
  return (
    getAddressPosition(address)
      // .then((result) => {
      //   //console.log(result);
      //   return result;
      // })
      //position ==> temperature
      .then((position) => {
        return getCurrentTemperatureAtPosition(position);
      })
      .catch((error) => console.log(error.statusCode, error.message))
  );
}

getCurrentTemperature("1455 Boulevard de Maisonneuve O, Montreal, QC H3G 1M8");
