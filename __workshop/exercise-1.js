// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.

//yarn add request-promise

const rp = require("request-promise");

// Returns the current position of the ISS

// const options = {
//   method: "POST",
//   uri: "http://api.open-notify.org/iss-now.json",
//   body: {
//     some: "payload",
//   },
//   json: true,
// };

function getIssPosition() {
  rp("http://api.open-notify.org/iss-now.json")
    .then(function (data) {
      //set the data stream into an object instead of a string
      //console.log(typeOf(data));
      const obj = JSON.parse(data);
      //console.log(obj);

      //subset the obj to the iss_position array
      const pos = obj.iss_position;

      //obtain the latitude and longitude from the array
      let lng = pos.longitude;
      let lat = pos.latitude;

      //print out the position;
      return console.log(
        `ISS is currently at latitude: ${lat} and longitude: ${lng}`
      );
    })
    .catch(function (error) {
      //console.log(error.statusCode);
      const errCode = error.statusCode;

      //print out a simple error message
      console.log(`An error has occured with status code: ${errCode}`);

      //a simple test would be to remove a letter from the rp(url)
    });
}

//call the function
getIssPosition();
