// Exercise 5 - `getDistanceFromIss`
// ---------------------------------

const rp = require("request-promise");
const { getAddressPosition } = require("./exercise-2");

// Given an address (a string), returns the distance between that address and the ISS
// You'll need to use getDistance, getIssPosition and getAddressPosition

//######################### GET DISTANCE ####################################
// Euclidian distance between two points
function getDistance(pos1, pos2) {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
}

//###################### GET ISS POSITION ###############################
//return object {lat, lng}
function getIssPosition() {
  return rp("http://api.open-notify.org/iss-now.json")
    .then(JSON.parse)
    .then((data) => {
      //console.log(data.iss_position);
      let result = {
        lat: Number(data.iss_position.latitude),
        lng: Number(data.iss_position.longitude),
      };
      //console.log(typeof result.lat);
      //console.log("ISS is at:", result);
      return result;
    })
    .catch((error) => console.log("error", error.statusCode));
}

//################# COMPUTE THE DISTANCE BETWEEN THE TWO POINTS ################
function getDistanceFromIss(address) {
  //we want both positions to be resolved simultaneously, so
  //we set them appart to be put into an array
  let promise1 = getIssPosition();
  let promise2 = getAddressPosition(address);

  //this method will return an array of all resolved promises above
  Promise.all([promise1, promise2]).then((result) => {
    //we can console.log to see an array of two objects that are the
    //results of our two promises
    //console.log(result);

    //we use our getDistance() function with these results
    let solution = parseInt(getDistance(result[0], result[1]));

    //print out a statement for the final answer
    console.log("ISS is", solution, "km away");

    //return the answer as a promise
    return solution;
  });
}

//RUN THE FUNCTION
getDistanceFromIss("1455 Boulevard de Maisonneuve O, Montreal, QC H3G 1M8");
//This should return a distance in KM, also the console.log of the
//imported function getAddressPosition

//TESTING
// let dist1 = { lat: 46.9373, lng: -97.7873 };
// let dist2 = { lat: 45.497118, lng: -73.579044 };
// //console.log(getDistance(dist1, dist2));
