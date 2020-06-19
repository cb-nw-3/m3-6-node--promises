const opencage = require('opencage-api-client');

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
        console.log(data.results[0].formated);
      }
    })
    .catch((error) => {
      console.log('error', error.message);
    });
}

const address = '1760 Boulevard Fortin, Laval, QC H7S 1N8';
const address1 = '45.573865, -73.719854';
getAddressPosition(address);
getAddressPosition(address1);

const address2 = '45.573865, -73.719854';

const momo = {
  key: '253f873d629b49e6a7cbba2072af0d19',
  q: address2,
};

opencage
  .geocode(momo)
  .then((data) => {
    // console.log(JSON.stringify(data));
    if (data.status.code == 200 && data.results.length > 0) {
      // 1330 Middle Avenue, Menlo Park, Californie 94025, États-Unis d'Amérique
      console.log(data.results[0].formatted);
    }
  })
  .catch((error) => {
    console.log('error', error.message);
  });
