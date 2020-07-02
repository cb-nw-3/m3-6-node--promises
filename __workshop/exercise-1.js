// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const rp = require('request-promise');

// Returns the current position of the ISS
function getIssPosition() {
    return rp('http://api.open-notify.org/iss-now.json')
        .then(res => {
            const issLocation = JSON.parse(res);
            // console.log(res);
            return {
                lat: issLocation.iss_position.latitude,
                lng: issLocation.iss_position.longitude,
            }
        })
        .then(data => {
            // console.log(data);
            return data;
        })
        .catch(err => console.log('Error: ', err));
}

getIssPosition();
