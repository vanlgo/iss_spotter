const { nextISSTimesForMyLocation } = require('./iss');

// Searches for IP and sends over fly over times at IP address
nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  for (const p of passTimes) {
    const riseTime = new Date(0);
    riseTime.setUTCSeconds(p.risetime);
    const duration = p.duration;
    console.log(`Next pass at ${riseTime} for ${duration} seconds!`);
  }
});