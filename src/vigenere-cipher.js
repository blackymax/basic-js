// const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(modification = true) {
    this.direct = modification;
  }

  encrypt(input, key) {
      
    if (input === undefined || key === undefined) {
      throw new Error();
    }
    let INPUT = input.toUpperCase().split('');
    let KEY = key.toUpperCase();
      let spaces = 0;
  
    for (let i = 0; i < INPUT.length; i++) {
      let charCode = INPUT[i].codePointAt(0);
      
      if (charCode >= 65 && charCode < 91) {
        let charIndex = KEY.codePointAt((i - spaces) % key.length) - 65;
        let SEARCH = charCode + charIndex;
        if (SEARCH > 90) {
          SEARCH -= 26;
        }
        INPUT[i] = String.fromCodePoint(SEARCH);
      } else {
        spaces++;
      }
    }
      return this.direct ? INPUT.join('') : INPUT.reverse().join('');
  }

  decrypt(reverseInput, key) {
 

    if (reverseInput === undefined || key === undefined) {
      throw new Error();
    }

    let INPUT = reverseInput.toUpperCase().split('');
    let KEY = key.toUpperCase();
      let spaces = 0;
  
    for (let i = 0; i < res.length; i++) {
      let charCode = INPUT[i].codePointAt(0);

      if (charCode >= 65 && charCode < 91) {
        let charIndex = KEY.codePointAt((i - spaces) % KEY.length) - 65;
        let SEARCH = charCode - charIndex;
        if (SEARCH < 65) {
          SEARCH += 26;
        }
        INPUT[i] = String.fromCodePoint(SEARCH);
      } else {
        spaces++;
      }
    }

      return this.direct ? INPUT.join('') : INPUT.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
