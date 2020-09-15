const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof(sampleActivity) !== 'string' || isNaN(parseFloat(sampleActivity)) || parseFloat(sampleActivity) > MODERN_ACTIVITY || parseFloat(sampleActivity) <= 0) {
    return false
  }
  let num = parseFloat(sampleActivity);

  let k = Math.LN2.toFixed(3)/HALF_LIFE_PERIOD;
  let a = Math.log(MODERN_ACTIVITY/num);

  return Math.ceil(a/k)
}