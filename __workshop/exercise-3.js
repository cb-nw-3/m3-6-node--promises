// Exercise 3 - `getAddressPosition`
// ---------------------------------

// Given a position (latitude and longitude), returns the position
const fetch = require("node-fetch");
function getCurrentTemperatureAtPosition(position) {
  return fetch(
    `https://api.darksky.net/forecast/8cf6a54d8de9c0cb77dae5efd6ce1383/${position.lat},${position.lng}`
  )
    .then((res) => res.json())
    .then((results) => {
      return results.currently.temperature;
    })
    .catch((err) => console.log("err: ", err));
}

// let pos = { lat: "45.431690", lng: "-73.628080" };

// getCurrentTemperatureAtPosition(pos);

module.exports = { getCurrentTemperatureAtPosition };
