// Exercise 5 - `getDistanceFromIss`
// ---------------------------------

// Given an address (a string), returns the distance between that address and the ISS
// You'll need to use getDistance, getIssPosition and getAddressPosition

const turf = require('@turf/turf');
const fetch = require('node-fetch');
const opencage = require('opencage-api-client');
require('dotenv').config();

function getDistanceFromIss() {
  const origin1 = getAddressPosition(
    '5 Avenue Anatole France, 75007 Paris, France '
  );
  const destiny1 = getIssPosition();
  Promise.all([origin1, destiny1]).then(([result1, result2]) => {
    console.log(result1);
    console.log(result2);
  });
}

getDistanceFromIss();

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
