// Exercise 4 - `getCurrentTemperature`
// -----------------------------------

const request = require("request-promise");
require("dotenv").config();
const opencage = require("opencage-api-client");

// Given an address as a string, returns the temperature
// Use the getCurrentTemperatureAtPosition function

function getCurrentTemperature(address) {
	function getAddressPosition(address) {
		const requestObj = {
			key: process.env.OPENCAGE_API_KEY,
			q: address,
		};

		return opencage
			.geocode(requestObj)
			.then((data) => {
				if (data.status.code == 200) {
					if (data.results.length > 0) {
						const place = data.results[0];
						console.log(data.results[0].geometry);
						return place;
					}
				} else {
					console.log("error", data.status.message);
				}
			})
			.then((data) => {
				// console.log(data);
				return data;
			})
			.catch((error) => console.log("error", error.message));
	}

	getAddressPosition("Montreal, Canada");
	const position = {
		lat: 45.49627, // change to function aboves results {lat, lng}
		lng: -73.57019,
	};

	// Given a position (latitude and longitude), returns the position
	function getCurrentTemperatureAtPosition(position) {
		return request(
			`https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/${position.lat},${position.lng}?units=si`
		)
			.then((response) => {
				const data = JSON.parse(response);
				console.log(data.currently.temperature);
				return data.currently.temperature;
			})
			.catch((err) => console.log("error: ", err));
	}

	//getCurrentTemperatureAtPosition(position);
}

getCurrentTemperature('1288 Ave Des Canadiens, Montreal QC H3B 3B3')