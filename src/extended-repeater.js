// const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let oldstr = str === null ? 'null' : str;
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  let separator = options.separator ? options.separator : '+';
  let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  let res = '';
  let str1 = '';
  if (options.addition !== undefined) {
    for (let i = 0; i < additionRepeatTimes; i++) {
      if (options.addition === null) {
        str1 += 'null';
      } else {
        str1 += options.addition.toString();
      }
      if (i + 1 != additionRepeatTimes) {
        str1 += additionSeparator;
      }
    }
  }
  for (let i = 0; i < repeatTimes; i++) {
    res += oldstr.toString() + str1;
    if (i + 1 != repeatTimes) {
      res += separator;
    }
  }
  return res;
};


  