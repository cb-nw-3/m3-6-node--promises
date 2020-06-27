// Exercise 3 - `getAddressPosition`
// ---------------------------------
const dotenv = require("dotenv").config();
const DarkSky = require("dark-sky");
const darksky = new DarkSky(process.env.DARKSKY_API_KEY);
// Given a position (latitude and longitude), returns the position
function getCurrentTemperatureAtPosition(lat, lng) {
  return darksky
    .latitude(lat)
    .longitude(lng)
    .get()
    .then((result) => {
      return result.currently.temperature;
    })
    .catch((error) => console.log("error:", error));
}
//////////////////////////
getCurrentTemperatureAtPosition(45.2615, 73.6159).then((result) =>
  console.log(result)
);
