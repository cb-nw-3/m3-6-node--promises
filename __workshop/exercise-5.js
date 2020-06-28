// Exercise 5 - `getDistanceFromIss`
// ---------------------------------

const { getIssPosition } = require("./exercise-1");
const { getAddressPosition } = require("./exercise-2");

// Given an address (a string), returns the distance between that address and the ISS
// You'll need to use getDistance, getIssPosition and getAddressPosition
function getDistanceFromIss(address) {
  const promiseArr = [getIssPosition(), getAddressPosition(address)];
  return Promise.all(promiseArr)
    .then((result) => {
      return getDistance(result[0], result[1]);
    })
    .catch((err) => console.log(err));
}

// Euclidian distance between two points
function getDistance(pos1, pos2) {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
}
