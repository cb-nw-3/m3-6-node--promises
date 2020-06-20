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
  console.log(requestObj.q.split(','));
  opencage
    .geocode(requestObj)
    .then((data) => {
      console.log(data.status.code, data.results.length);
      if (data.status.code == 200 && data.results.length > 0) {
        // 1330 Middle Avenue, Menlo Park, Californie 94025, États-Unis d'Amérique
        console.log(
          'Response: ',
          data.results[0].formatted,
          'Request : ',
          requestObj.q
        );
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
