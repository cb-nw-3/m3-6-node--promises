// Exercise 5 - `getDistanceFromIss`
// ---------------------------------

// Given an address (a string), returns the distance between that address and the ISS
// You'll need to use getDistance, getIssPosition and getAddressPosition
const rp = require("request-promise");
require("dotenv").config();
const exercise2 = require("./exercise-2");
const exercise1 = require("./exercise-1");

// Euclidian distance between two points
function getDistance(pos1, pos2) {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
}

function getDistanceFromIss(address) {
  let lngLatAdresse1 = exercise1.getIssPosition();
  let lngLatAdresse2 = exercise2.getAddressPosition(address);

  Promise.all([lngLatAdresse1, lngLatAdresse2])
    .then((result) => {
      return getDistance(result[0], result[1]);
    })
    .then((result) => console.log(result));
}

getDistanceFromIss("H3H 5H5");
