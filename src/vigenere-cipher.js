// const CustomError = require("../extensions/custom-error");
class VigenereCipheringMachine {

  constructor(modification = true) {
    this.direct = modification;
  }

  encrypt(input, key) {

    if (input === undefined || key === undefined) {
      throw new Error();
    }

    let iNPUT = input.toUpperCase().split('');
    let kEY = key.toUpperCase();
	  let spaces = 0;
  
    for (let i = 0; i < iNPUT.length; i++) {
      let charCode = iNPUT[i].codePointAt(0);
      
      if (charCode >= 65 && charCode < 91) {
        let index = kEY.codePointAt((i - spaces) % key.length) - 65;
        let search = charCode + index;
        if (search > 90) {
          search -= 26;
        }
        iNPUT[i] = String.fromCodePoint(search);
      } else {
        spaces++;
      }
    }

	  return this.direct ? iNPUT.join('') : iNPUT.reverse().join('');
  }

  decrypt(reverseInput, key) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here

    if (reverseInput === undefined || key === undefined) {
      throw new Error();
    }

    let iNPUT = reverseInput.toUpperCase().split('');
    let kEY = key.toUpperCase();
	  let spaces = 0;
  
    for (let i = 0; i < iNPUT.length; i++) {
      let charCode = iNPUT[i].codePointAt(0);

      if (charCode >= 65 && charCode < 91) {
        let index = kEY.codePointAt((i - spaces) % key.length) - 65;
        let search = charCode - index;
        if (search < 65) {
          search += 26;
        }
        iNPUT[i] = String.fromCodePoint(search);
      } else {
        spaces++;
      }
    }

	  return this.direct ? iNPUT.join('') : iNPUT.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
