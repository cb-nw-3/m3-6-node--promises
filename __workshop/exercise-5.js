// Exercise 5 - `getDistanceFromIss`
// ---------------------------------

// Given an address (a string), returns the distance between that address and the ISS
// You'll need to use getDistance, getIssPosition and getAddressPosition

const turf = require('@turf/turf');
const fetch = require('node-fetch');
const opencage = require('opencage-api-client');
const earthRadiusKm = 6371;
require('dotenv').config();

function getDistanceFromIss(address) {
  const addressCoords = getAddressPosition(address);
  const IssCoords = getIssPosition();
  const IssAltitude = getIssAltitude();
  Promise.all([addressCoords, IssCoords, IssAltitude]).then(
    ([point1, point2, additionalHeight]) => {
      const curveLength = getArcLengthOfTwoEarthCoordinates(point1, point2);
      const angleBetweeenPoint1Point2 =
        (360 * curveLength) / (2 * Math.PI * earthRadiusKm);
      console.log('angle', angleBetweeenPoint1Point2);
      // additionalHeight;
    }
  );
}

getDistanceFromIss('5 Avenue Anatole France, 75007 Paris, France');

function getAddressPosition(address) {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: address,
  };
  const type = requestObj.q.split(',').map((x) => parseFloat(x));
  return opencage
    .geocode(requestObj)
    .then((data) => {
      let response = [];
      if (data.status.code == 200 && data.results.length > 0) {
        if (type.some((element) => isNaN(element))) {
          response = [
            data.results[0].geometry.lat,
            data.results[0].geometry.lng,
          ];
        } else {
          console.log('Not valid coords');
        }
      }
      // console.log(response);
      return response;
    })
    .catch((error) => {
      console.log('error', error.message);
    });
}

function getIssPosition() {
  url = 'https://api.wheretheiss.at/v1/satellites/25544';

  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      let result = [];
      result.push(data.latitude);
      result.push(data.longitude);
      //   console.log(result);
      return result;
    })
    .catch((err) => console.log('Error: ', err));
}

function getIssAltitude() {
  url = 'https://api.wheretheiss.at/v1/satellites/25544';

  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      return data.altitude;
    })
    .catch((err) => console.log('Error: ', err));
}

function getArcLengthOfTwoEarthCoordinates(coord1, coord2) {
  // console.log(coord1, coord2);
  const from = turf.point(coord1);
  const to = turf.point(coord2);
  const options = { units: 'kilometers' };
  const distanceBetweenToPointsinEarthkm = turf.distance(from, to, options);
  console.log(
    'The length of the arc (distance ) bettween  ' +
      coord1 +
      ' ' +
      coord2 +
      ' is: ' +
      distanceBetweenToPointsinEarthkm
  );
  return distanceBetweenToPointsinEarthkm;
}
