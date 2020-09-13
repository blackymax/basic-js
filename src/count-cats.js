const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix ) {

  
let counter = 0;
  for(let i = 0; i<matrix.length;i++){
    for(let a = 0; a<matrix[i].length;a++){
      if (matrix[i][a] === "^^"){
          counter++
      }
    }

  }
  
    return counter
    
};
