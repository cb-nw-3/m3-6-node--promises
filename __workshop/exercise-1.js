// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module which is a library.
const request = require("request-promise");
//promises allow us to get data that have an undefined eta
// Returns the current position of the ISS
function getIssPosition() {
  return request("http://api.open-notify.org/iss-now.json")
    .then((result) => JSON.parse(result))
    .then((result) => {
      console.log("From Ex1: ", result.iss_position);
      return result.iss_position;
      // You are `return`ing the value, because you will need this functionality in a later exercise.
    })
    .catch((error) => console.log(error));
}
// getIssPosition();
getIssPosition().then((position) => {
  console.log(position);
});
// exporting 1 js with module.exports which is an object built in to node.
//module is object and export the property
module.exports = { getIssPosition };
//calling above
// If you console.log the the function call, you will not see the result as console.log
// doesn't wait for the promise to be resolved to execute.
