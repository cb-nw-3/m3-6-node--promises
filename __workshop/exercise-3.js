// Exercise 3 - `getAddressPosition`
// ---------------------------------

const rp = require('request-promise')
require('dotenv').config();

// Given a position (latitude and longitude), returns the position
function getCurrentTemperatureAtPosition(position) {
  const requestObj = {
    key: process.env.DARKSKY_API_KEY,
    lat: position.lat,
    lng: position.lng
  }

  let darkSkyAPI = `https://api.darksky.net/forecast/${requestObj.key}/${requestObj.lat},${requestObj.lng}`

  return rp(darkSkyAPI)
    .then(JSON.parse)
    .then(data => {
      return data.currently.temperature
    })
    .then(data => {
      console.log('temperature', data)
      return data
    })
    .catch(error => {
      console.log('error', error.message)
    })
}

let randomPos = [
  {
    lat: -19.05617,
    lng: 20.99673
  },
  {
    lat: 20.69442,
    lng: -92.74132
  },
  {
    lat: -42.41865,
    lng: 160.91602
  }
]

getCurrentTemperatureAtPosition(randomPos[0])
getCurrentTemperatureAtPosition(randomPos[2])
getCurrentTemperatureAtPosition(randomPos[1])

module.exports = { getCurrentTemperatureAtPosition }