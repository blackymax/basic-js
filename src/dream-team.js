const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false
}

let members1 = [];
let str = '';


for(let i = 0; i<members.length;i++){
str = members[i].replace(/\s/g, '').substr(0,1).toUpperCase();

members1.push(str)
}

// remove line with error and write your code here
return members1.sort().join('')

};
