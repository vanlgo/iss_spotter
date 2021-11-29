const request = require("request");

const fetchMyIP = (callback) => {
  request("https://api.ipify.org?format=json", (error, response, body) => {
  // inside the request callback ...
  // error can be set if invalid domain, user is offline, etc.
    if (error) {
      callback(error, null);
      return;
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    // if we get here, all's well and we got the data
    callback(null, JSON.parse(body));
    return;
  });
};

const fetchCoordsByIP = (ip, callback) => {
  request(`https://api.freegeoip.app/json/${ip}?apikey=e45851e0-515a-11ec-8cd5-4d47119f05c7`, (error, response, body) => {
    // inside the request callback ...
    // error can be set if invalid domain, user is offline, etc.
    if (error) {
      callback(error, null);
      return;
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    // if we get here, all's well and we got the data
    const { latitude, longitude } = JSON.parse(body);
    callback(null, { latitude, longitude });
    return;
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP };