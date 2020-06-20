// Exercise 4 - `getCurrentTemperature`
// -----------------------------------
// Exercise 2 - `getAddressPosition`
// ---------------------------------
const { getIssPosition } = require("./exercise-1");
const { getAddressPosition } = require("./exercise-2");
const { getCurrentTemperatureAtPosition } = require("./exercise-3");
const opencage = require("opencage-api-client");
require("dotenv").config();

function getCurrentTemperature(address) {
  const requestObj = {
    key: "4a0db823fade434cbd416a2863c03ff2",
    q: address,
  };
  let addressCoordinates = opencage
    .geocode(requestObj)
    .then((data) => data.results)
    .then((results) => {
      let positionCoordinates = {
        lat: results[0].annotations.DMS.lat,
        lng: results[0].annotations.DMS.lng,
      };
      return positionCoordinates;
    })
    .then((coordinates) => {
      return getCurrentTemperatureAtPosition(coordinates);
    })
    .then((result) => console.log("result: ", result))
    .catch((err) => console.log("err: ", err));
}

console.log("final: ", getCurrentTemperature("6205 Deslandes Saint-Hyacinthe"));
