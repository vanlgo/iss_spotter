const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP("216.58.60.138", (error, coords) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned coordinates:' , coords);
// });

// fetchISSFlyOverTimes({ latitude: 43.5752, longitude: -79.6296 }, (error, times) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Fly Over Times:' , times);
// });

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  for (const p of passTimes) {
    const riseTime = new Date(0);
    riseTime.setUTCSeconds(p.risetime);
    const duration = p.duration;
    console.log(`Next pass at ${riseTime} for ${duration} seconds!`)
  }
});