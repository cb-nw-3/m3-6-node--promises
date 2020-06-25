// Exercise 5 - `getDistanceFromIss`
// ---------------------------------

const { getIssPosition } = require('./exercise-1');
const { getAddressPosition } = require('./exercise-2');

// Given an address (a string), returns the distance between that address and the ISS
// You'll need to use getDistance, getIssPosition and getAddressPosition
function getDistanceFromIss(address) {
  return Promise.all([getIssPosition(), getAddressPosition(address)])
    .then(values => {
      console.log('distance address - iss', getDistance(values[0], values[1]))
      return getDistance(values[0], values[1])
    })
}

function getDistance(pos1, pos2) {
  return Math.sqrt(Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2));
}

getDistanceFromIss('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8')