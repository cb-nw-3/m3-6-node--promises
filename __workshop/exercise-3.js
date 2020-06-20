// Exercise 3 - `getAddressPosition`
// ---------------------------------
require('dotenv').config();
const fetch = require('node-fetch');
const fahrenheitToCelsius = require('fahrenheit-to-celsius');

// Given a position (latitude and longitude), returns the position
function getCurrentTemperatureAtPosition(position) {
  url =
    'https://api.darksky.net/forecast/' +
    process.env.DARK_SKY_KEY +
    '/' +
    position;
  fetch(url)
    .then((res) => res.json())
    .then((data) =>
      console.log(
        'The temperature at ' +
          '(' +
          position +
          ')' +
          ' is ' +
          data.currently.temperature +
          '°F' +
          ' or ' +
          fahrenheitToCelsius(data.currently.temperature).toFixed(2) +
          '°C'
      )
    )
    .catch((err) => console.log('Error: ', err));
}

module.exports = {
  getCurrentTemperatureAtPosition,
};

//I did this to use it in exercise-4
// getCurrentTemperatureAtPosition('45.555,22.11');
