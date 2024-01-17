console.log("===MUST4====")
// 1で作ったクラスを継承したクラスを別名で2つ作成してください。
//片方にはコンストラクタで設定した数値型の配列の中央値を取得するメソッドを追加してください。
//もう片方には、コンストラクタで設定した数値型の配列の昇順ソートした結果を返すメソッドを追加してください。

class MaxSmall{
    constructor(arr){
        this.arr = arr;
    }
    
    getMax(){
        return Math.max(...arr);
        }
    getMin(){
        return Math.min(...arr);
    }
}

class Median extends MaxSmall{
    constructor(arr){
        super(arr);
        this.median = this.getMedian;
    }
    
    getMedian(){
        const sortedArr = this.arr.sort((a, b) => a - b);
        const mid = Math.floor(sortedArr.length / 2);
        return sortedArr.length % 2 !== 0 ? sortedArr[mid] : (sortedArr[mid - 1] + sortedArr[mid]) / 2;
    }
}

class Sort extends MaxSmall {
    constructor(arr) {
        super(arr);
        this.sort = this.getSorted;
    }

    getSorted() {
        return arr.sort((a, b) => a - b);
    }
}
module.exports = MaxSmall;
module.exports = Median;
module.exports = Sort;

let arr = [1,1, 2,2,2,2, 3, 4,4,4,4,4,4,4, 5];
let number = new MaxSmall(arr);
console.log(number.getMax());
console.log(number.getMin());


let median = new Median(arr);
console.log(median.getMedian());

let numberSort = new Sort(arr);
console.log(numberSort.getSorted());