// const CustomError = require("../extensions/custom-error");

const chainMaker = {
  scepka : [],
  getLength() {
   return this.scepka.length;

  },
  addLink(value) {
    this.scepka.push(value);
    return this;

  },
  removeLink(position) {
    if (!Number.isInteger(position) || this.scepka[position - 1] === undefined) {
      this.scepka.length = 0;
      throw new Error('Нееа, дядя, аккуратнее');
    }
    this.scepka.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.scepka = this.scepka.reverse();
    return this;
  },
  finishChain() {
    const res = '( ' + this.scepka.map((element) => '' + element).join(' )~~( ') + ' )';
    this.scepka.length = 0;
    return res;
  }
};

module.exports = chainMaker;
