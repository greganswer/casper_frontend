/**
 * A Utility class
 * @type {Object}
 */
module.exports = class Utils {
  /**
   * Asynchrounous setTimeout
   * @param  {number} [miliseconds=2000] Time to wait
   * @return {Promise}
   */
  static wait(miliseconds = 2000) {
    return new Promise(resolve => setTimeout(resolve, miliseconds));
  }
};
