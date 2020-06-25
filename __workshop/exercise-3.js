// Exercise 3 - `getAddressPosition`
// ---------------------------------
const request = require('request-promise');
require("dotenv").config();
const position = {
    lat: 45.496270,
    lng: -73.570190
}

// Given a position (latitude and longitude), returns the position
function getCurrentTemperatureAtPosition(position) {
	return request(
		`https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/${position.lat},${position.lng}?units=si`
	).then((response) => {
        const data = JSON.parse(response);
        console.log(data.currently.temperature)
        return data.currently.temperature;
    }).catch((err) => console.log("error: ", err));
}

// getCurrentTemperatureAtPosition();
getCurrentTemperatureAtPosition(position);