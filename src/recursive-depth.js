const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result = 0;
    if(Array.isArray(arr)){
      result=1
      result+=arr.reduce((res,item)=>{
        let hold=this.calculateDepth(item)
        if(res<hold) return hold
        return res
      },0)
    }
  return result
  }
};