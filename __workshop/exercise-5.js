// Exercise 5 - `getDistanceFromIss`
// ---------------------------------

const rp = require('request-promise');
const { getAddressPosition } = require('./exercise-2');

// Given an address (a string), returns the distance between that address and the ISS
// You'll need to use getDistance, getIssPosition and getAddressPosition

function getDistance(pos1, pos2) {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
}

function getIssPosition() {
  return rp('http://api.open-notify.org/iss-now.json')
    .then(JSON.parse)
    .then((data) => {
      let result = {
        lat: Number(data.iss_position.latitude),
        lng: Number(data.iss_position.longitude),
      };

      return result;
    })
    .catch((error) => console.log('error', error.statusCode));
}

function getDistanceFromIss(address) {
  let promise1 = getIssPosition();
  let promise2 = getAddressPosition(address);

  Promise.all([promise1, promise2]).then((result) => {
    let solution = parseInt(getDistance(result[0], result[1]));

    console.log('ISS is', solution, 'km away');

    return solution;
  });
}

getDistanceFromIss('1060 boul Robert-Bourassa, Montréal, QC H3B 4V3');
