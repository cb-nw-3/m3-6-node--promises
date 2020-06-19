// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.

//https://wheretheiss.at/w/developer

// Returns the current position of the ISS

// Using fetch
const fetch = require('node-fetch');
function getIssPosition() {
  url = 'https://api.wheretheiss.at/v1/satellites/25544';

  fetch(url)
    .then((res) => res.json())
    .then((data) =>
      console.log('Latitude: ', data.latitude, 'Longitude:', data.longitude)
    );
}
getIssPosition();

//Using Request
const rp = require('request-promise');
function getIssPositionRequest() {
  url = 'https://api.wheretheiss.at/v1/satellites/25544';

  rp(url)
    .then((res) => JSON.parse(res))
    .then((data) =>
      console.log(
        '2nd Latitude: ',
        data.latitude,
        '2nd Longitude:',
        data.longitude
      )
    );
}
getIssPositionRequest();

//This one works on the browser
//function getIssPosition() {
//   url = 'https://api.wheretheiss.at/v1/satellites/25544';

//   fetch(url).then((response) => {
//     const reader = response.body.getReader();
//     const decoder = new TextDecoder();

//     reader
//       .read()
//       .then(function process(result) {
//         if (result.done) return;
//         const info = JSON.parse(decoder.decode(result.value, { stream: true }));
//         console.log('lat', info.latitude, 'lng', info.longitude);
//       })
//       .then(() => {
//         console.log('All done!');
//       });
//   });
// }
