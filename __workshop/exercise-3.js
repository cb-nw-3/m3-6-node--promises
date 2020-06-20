// Exercise 3 - `getCurrentTemperatureAtPosition`
// ---------------------------------
const request = require("request-promise");
require("dotenv").config();

// Given a position (latitude and longitude), returns the position
function getCurrentTemperatureAtPosition(position) {
  return request(
    `https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/${position.lat},${position.lng}?units=si`
  )
    .then((response) => {
      const data = JSON.parse(response);
      return data.currently.temperature;
    })
    .catch((error) => console.log("error: ", error));
}

getCurrentTemperatureAtPosition({ lat: 45.425014, lng: -75.695237 }).then(
  console.log
);
