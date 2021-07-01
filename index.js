// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP  } = require('./iss');
// const { fetchISSFlyOverTimes  } = require('./iss');
const { nextISSTimesForMyLocation  } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('216.209.30.251', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned coordinates:' , coordinates);
// });

// const myCoords = { latitude: 43.6653, longitude: -79.4343 };
// fetchISSFlyOverTimes(myCoords, (error, overHeadTimes) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned coordinates:' , overHeadTimes);
// });

const printNextOverheadTimes = function(nextISSTimes) {
  for (const pass of nextISSTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, nextISSTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printNextOverheadTimes(nextISSTimes);
});