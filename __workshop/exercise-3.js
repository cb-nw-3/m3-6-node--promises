// Exercise 3 - `getAddressPosition`
// ---------------------------------
const request = require("request-promise");
// Given a position (latitude and longitude), returns the position
function getCurrentTemperatureAtPosition(position) {
  let DARKSKY_API_KEY = process.env.DARKSKY_API_KEY;
  return request(
    `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${position.lat},${position.lng}`
  )
    .then((result) => JSON.parse(result))
    .then((result) => result.currently.temperature);
}
getCurrentTemperatureAtPosition({ lat: 45.47692, lng: -73.64822 }).then(
  console.log
);
