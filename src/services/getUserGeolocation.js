/**
 * Get the user's current location
 * @param  {Object} options Options for getting the current position
 * @return {Promise}
 */
export default function getUserGeolocation(options) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}
