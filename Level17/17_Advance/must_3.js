console.log("===MUST3====")
function MaxSmall(arr){
  this.arr = arr;
  this.max = Math.max(...arr);
  this.min = Math.min(...arr);
  }

module.exports = MaxSmall;
let arr = [-1,1, 2, 3, 4, 5,100];
let number = new MaxSmall(arr)
console.log(number.max);
console.log(number.min);