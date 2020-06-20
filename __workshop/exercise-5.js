// Exercise 5 - `getDistanceFromIss`
// ---------------------------------

// Given an address (a string), returns the distance between that address and the ISS
// You'll need to use getDistance, getIssPosition and getAddressPosition

const turf = require('@turf/turf');
const fetch = require('node-fetch');
const opencage = require('opencage-api-client');
require('dotenv').config();

function getDistanceFromIss(address) {
  const origin1 = getAddressPosition(address);
  const destiny1 = getIssPosition();
  const altitude1 = getIssAltitude();
  Promise.all([origin1, destiny1, altitude1]).then(
    ([result1, result2, result3]) => {
      const from = turf.point(result1);
      const to = turf.point(result2);
      const options = { units: 'kilometers' };
      const distanceBetweenToPointsinEarthkm = turf.distance(from, to, options);
      const IssAltitudeKm = result3;
      console.log(
        'The distance between ' +
          address +
          ' and the ISS is ' +
          Math.sqrt(
            distanceBetweenToPointsinEarthkm ** 2 + IssAltitudeKm ** 2
          ) +
          ' km'
      );
    }
  );
}

getDistanceFromIss('5 Avenue Anatole France, 75007 Paris, France ');

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
      //   console.log(response);
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
