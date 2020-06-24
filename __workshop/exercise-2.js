// Exercise 2 - `getAddressPosition`
// ---------------------------------

const rp = require("request-promise");
const env = require("dotenv");
env.config();
const opencage = require("opencage-api-client");

function getAddressPosition(address) {
    const requestObj = {
        key: "",
        q: address,
    };

    return opencage
        .geocode(requestObj)
        .then((data) => {
            if (data.status.code == 200) {
                if (data.results.length > 0) {
                    const place = data.results[0];
                    return place;
                }
            } else {
                console.log("error", data.status.message);
            }
        })
        .then((data) => {
            console.log(data.geometry);
            return data;
        })
        .catch((error) => console.log("error", error.message));
}

getAddressPosition("boston");
