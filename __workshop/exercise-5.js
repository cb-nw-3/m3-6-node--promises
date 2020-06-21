// Exercise 5 - `getDistanceFromIss`
// ---------------------------------

// Given an address (a string), returns the distance between that address and the ISS
// You'll need to use getDistance, getIssPosition and getAddressPosition

const { getAddressPosition } = require("./exercise-2");
const { getIssPosition } = require("./exercise-1");

let promises = [
  getIssPosition(),
  getAddressPosition("6205 Deslandes Saint-Hyacinthe QC J2R 1C3"),
];

function getDistanceFromIss(address) {
  return Promise.all(promises)
    .then((results) => {
      return getDistance(results[0], results[1]);
    })
    .catch((err) => console.log("err: ", err));
}

function getDistance(pos1, pos2) {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
}
getDistanceFromIss("6205 Deslandes Saint-Hyacinthe QC J2R 1C3");
