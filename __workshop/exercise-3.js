// Exercise 3 - `getAddressPosition`
// ---------------------------------

require("dotenv").config();
const rp = require("request-promise");

// Given a position (latitude and longitude), returns the position
function getCurrentTemperatureAtPosition(position) {
  const APIKEY = process.env.DARKSKY_API_KEY;
  let options = {
    uri: `https://api.darksky.net/forecast/${APIKEY}/${position.lat},${position.lng}`,
  };
  return rp(options)
    .then((data) => {
      return JSON.parse(data);
    })
    .then((result) => {
      return result.currently.temperature;
    })
    .catch((err) => console.log(err));
}
let position = {
  lat: 42.3601,
  lng: -71.0589,
};

getCurrentTemperatureAtPosition(position).then((res) => console.log(res));
