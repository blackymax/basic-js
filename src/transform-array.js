const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr ) {

if(!Array.isArray(arr)){
    throw new Error()
}

  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
   if(arr[i] === '--discard-next') {
     if (arr.length - i >= 2) {
      i++
      }
    }else if(arr[i] === '--discard-prev') {
      if (i >= 1 && arr[i - 2] !== "--discard-next") {
        arr1.pop()
      }
    }else if(arr[i] === "--double-next") {
     if(arr.length - i >= 2) {
       arr1.push(arr[i+1])
      }
    }else if(arr[i] === "--double-prev") {
     if(i >= 1 && arr[i-2] !== "--discard-next") {
       arr1.push(arr[i-1])
      }
    } else {
    arr1.push(arr[i])
    }
  }
  return arr1
  // remove line with error and write your code here
};
