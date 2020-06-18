// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");

// Returns the current position of the ISS
function getIssPosition() {
    // gives access to the info on the site
	return request("http://api.open-notify.org/iss-now.json")
		.then((response) => {
            // makes that info accessible in this function
            const issPosition = JSON.parse(response);
            // console.log(issPosition)
            
			return {
				lat: issPosition.iss_position.latitude,
                lng: issPosition.iss_position.longitude,
                // msg: issPosition.timestamp,
			};
		})
		.then((data) => {
            console.log(data);
			return data;
        })
        .catch(err => console.log('error', err));
}

getIssPosition();
