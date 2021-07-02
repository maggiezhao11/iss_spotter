const request = require('request-promise-native');
const { nextISSTimesForMyLocation } = require('./iss_promised');


/*
 * Requests user's ip address from https://www.ipify.org/
 * Input: None
 * Returns: Promise of request for ip data, returned as JSON string
 */

const printNextOverheadTimes = function(nextISSTimes) {
  for (const pass of nextISSTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printNextOverheadTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });






