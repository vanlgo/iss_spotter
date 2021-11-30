const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    for (const p of passTimes) {
      const riseTime = new Date(0);
      riseTime.setUTCSeconds(p.risetime);
      const duration = p.duration;
      console.log(`Next pass at ${riseTime} for ${duration} seconds!`);
    }
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });