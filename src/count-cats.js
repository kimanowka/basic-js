const CustomError = require("../extensions/custom-error");
let count=0;
module.exports = function countCats(backyard) {
  for (let subArr of backyard) {
    for (let elem of subArr) {
      if( elem =='^^') {
        return count++;
       }
          else { return `0`};
          
        }
      }
};


