// Exercise 2 - `getAddressPosition`
// ---------------------------------
'use strict';

const opencage = require('opencage-api-client');
require('dotenv').config();

function getAddressPosition(address) {
  const requestObj = {
    key: '253f873d629b49e6a7cbba2072af0d19',
    q: address,
  };
  opencage
    .geocode(requestObj)
    .then((data) => {
      // console.log(JSON.stringify(data));
      if (data.status.code == 200 && data.results.length > 0) {
        // 1330 Middle Avenue, Menlo Park, Californie 94025, États-Unis d'Amérique
        console.log(data.results[0].geometry, requestObj);
      }
    })
    .catch((error) => {
      console.log('error', error.message);
    });
}

// const address = '45,573865, -73.719854';
const address = '1760 Boulevard Fortin, Laval, QC H7S 1N8';
getAddressPosition(address);
