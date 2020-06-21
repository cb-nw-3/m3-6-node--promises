// Exercise 4 - `getCurrentTemperature`
// -----------------------------------
// Exercise 2 - `getAddressPosition`
// ---------------------------------
const { getCurrentTemperatureAtPosition } = require("./exercise-3");
const opencage = require("opencage-api-client");
require("dotenv").config();

function getCurrentTemperature(address) {
  const requestObj = {
    key: "4a0db823fade434cbd416a2863c03ff2",
    q: address,
  };
  return opencage
    .geocode(requestObj)
    .then((data) => data.results)
    .then((results) => {
      let positionCoordinates = {
        lat: results[0].geometry.lat,
        lng: results[0].geometry.lng,
      };
      return getCurrentTemperatureAtPosition(positionCoordinates);
    })
    .then((result) => console.log("Temperature: ", result + " degrees F"))
    .catch((err) => console.log("err: ", err));
}
getCurrentTemperature("6205 Deslandes Saint-Hyacinthe QC J2R 1C3");
