// Exercise 2 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client')
require('dotenv').config();

function getAddressPosition(address) {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: address
  };

  return opencage.geocode(requestObj)
    .then(data => {
      if (data.status.code === 200) {
        return data.results[0].geometry
      } else {
        console.log('error', data.status.message)
      }
    })
    .then(data => {
      console.log('addressPosition', data)
      return data
    })
    .catch(error => console.log('error', error.message))
}

getAddressPosition('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8')
getAddressPosition('1859 Gallo Drive, Powell, Ohio, 43065, United States')

module.exports = { getAddressPosition };