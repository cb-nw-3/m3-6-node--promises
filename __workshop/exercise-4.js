// Exercise 4 - `getCurrentTemperature`
// -----------------------------------
const options = {
    uri:
        "https://api.darksky.net/forecast/8cf6a54d8de9c0cb77dae5efd6ce1383/42,-72",
    headers: {
        "User-Agent": "Request-Promise",
    },
    json: true,
};

rp(options)
    .then(function (res) {
        console.log(res.currently.temperature);
        return { temp: res.currently.temperature };
    })
    .catch(function (err) {
        console.log(err);
    });
// Given an address as a string, returns the temperature
// Use the getCurrentTemperatureAtPosition function
function getCurrentTemperature(address) {}
