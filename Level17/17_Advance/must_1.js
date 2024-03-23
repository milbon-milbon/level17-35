console.log("===MUST1====")
function MaxSmall(arr) {
    this.arr = arr;
  }
  
  MaxSmall.prototype.getMax = function() {
    return Math.max(...this.arr);
  };
  
  MaxSmall.prototype.getMin = function() {
    return Math.min(...this.arr);
  };
  
  let arr = [-1, 1, 2, 3, 4, 5, 100];
  let number = new MaxSmall(arr);
  console.log(number.getMax());
  console.log(number.getMin());

