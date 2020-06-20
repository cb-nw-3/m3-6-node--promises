// Exercise 3 - `getAddressPosition`
// ---------------------------------
const dotenv = require("dotenv");
dotenv.config();

const DarkSky = require("dark-sky");
const darksky = new DarkSky(process.env.DARKSKY_API_KEY);

// Given a position (latitude and longitude), returns the position
function getCurrentTemperatureAtPosition(position) {
  // const uri = `https://api.darksky.net/forecast/${key}/${position.lat}, ${position.lng}`;

  return darksky
    .latitude(position.lat)
    .longitude(position.lng)
    .get()
    .then((data) => {
      return data.currently.temperature;
    })
    .catch((error) => console.log("Error:", error));
}

getCurrentTemperatureAtPosition({
  lat: "45.5017",
  lng: "73.5673",
}).then((result) => console.log(result));
