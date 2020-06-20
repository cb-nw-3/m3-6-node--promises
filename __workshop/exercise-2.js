// Exercise 2 - `getAddressPosition`
// ---------------------------------
'use strict';

const opencage = require('opencage-api-client');
require('dotenv').config();

function getAddressPosition(address) {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: address,
  };
  const type = requestObj.q.split(',').map((x) => parseFloat(x));
  opencage
    .geocode(requestObj)
    .then((data) => {
      if (data.status.code == 200 && data.results.length > 0) {
        if (type.some((element) => isNaN(element))) {
          console.log(
            'Response: ',
            data.results[0].geometry,
            'Request : ',
            requestObj.q
          );
        } else {
          console.log(
            'Response: ',
            data.results[0].formatted,
            'Request : ',
            requestObj.q
          );
        }
      }
    })
    .catch((error) => {
      console.log('error', error.message);
    });
}

const address = '1760 Boulevard Fortin, Laval, QC H7S 1N8';
getAddressPosition(address);

const address2 = '37.4396, -122.1864';
getAddressPosition(address2);

const address3 = '38.897957, -77.036560';
getAddressPosition(address3);

const address4 = '48.858093, 2.294694';
getAddressPosition(address4);

const address5 = '5 Avenue Anatole France, 75007 Paris, France ';
getAddressPosition(address5);
