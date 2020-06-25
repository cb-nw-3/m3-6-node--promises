// Exercise 3 - `getAddressPosition`
// ---------------------------------

const dotenv = require("dotenv");
dotenv.config();
const DarkSky = require("dark-sky");
const darksky = new DarkSky(process.env.DARKSKY_API_KEY);

// Given a position (latitude and longitude), returns the position
//https://www.npmjs.com/package/dark-sky
function getCurrentTemperatureAtPosition(lat, lng) {
  return darksky
    .latitude(lat)
    .longitude(lng)
    .get()
    .then((result) => result.currently.temperature)
    .catch((error) => {
      console.log("error", error.message);
    });
}

getCurrentTemperatureAtPosition(45.495804, -73.599676).then((result) =>
  console.log(result)
);

module.exports = {
  getCurrentTemperatureAtPosition,
};
