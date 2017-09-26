/**
 * A Utility class
 * @type {Object}
 */
module.exports = class Utils {
  /**
   * Asynchrounous setTimeout
   * @param  {number} [miliseconds=2000] Time to wait
   * @return {Promise|null}
   */
  static wait(miliseconds = 2000) {
    if (process.env.NODE_ENV !== 'production') {
      return null;
    }

    return new Promise(resolve => setTimeout(resolve, miliseconds));
  }
};
