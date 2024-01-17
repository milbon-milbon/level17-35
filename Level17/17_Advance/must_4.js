console.log("===MUST4====")
function MaxSmall(arr) {
  this.arr = arr;
}

MaxSmall.prototype.getMax = function() {
  return Math.max(...this.arr);
};

MaxSmall.prototype.getMin = function() {
  return Math.min(...this.arr);
};

function Median(arr) {
  MaxSmall.call(this, arr);
}

Median.prototype = Object.create(MaxSmall.prototype);
Median.prototype.constructor = Median;

Median.prototype.getMedian = function() {
  let sortedArr = this.arr.sort((a, b) => a - b);
  let len = sortedArr.length;
  let median = len % 2 === 0 ? (sortedArr[len / 2 - 1] + sortedArr[len / 2]) / 2 : sortedArr[Math.floor(len / 2)];
  return median;
};

function Sort(arr) {
  MaxSmall.call(this, arr);
}

Sort.prototype = Object.create(MaxSmall.prototype);
Sort.prototype.constructor = Sort;

Sort.prototype.getSorted = function() {
  return this.arr.sort((a, b) => a - b);
};

let arr = [1, 1, 2, 2, 2, 2, 3, 4, 4, 4, 4, 4, 4, 4, 5];
let number = new MaxSmall(arr);
console.log(number.getMax());
console.log(number.getMin());

let median = new Median(arr);
console.log(median.getMedian());

let numberSort = new Sort(arr);
console.log(numberSort.getSorted());
