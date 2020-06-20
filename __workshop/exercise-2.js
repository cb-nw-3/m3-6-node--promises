// Exercise 2 - `getAddressPosition`
// ---------------------------------
const opencage = require('opencage-api-client');
require('dotenv').config()
const ApiKey = process.env.OPENCAGE_API_KEY

const getAddressPosition = (address) => {
    const requestObj = {
        key: ApiKey,
        q: address
    };

    return opencage.geocode(requestObj)
        .then(data => {
            if (data.status.code == 200) {
                if (data.results.length > 0) {
                    let place = data.results[0];
                    console.log('Formatted -->', place.formatted);
                    console.log('Geometry -->', place.geometry);
                    console.log('Timezone -->', place.annotations.timezone.name);
                    return place;
                }
            } else {
                console.log('error', data.status.message);
            }
        })
        .catch(error => console.log('error', error.message));
}
getAddressPosition('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8')
    .then((data) => console.log(data));

module.exports = { getAddressPosition };