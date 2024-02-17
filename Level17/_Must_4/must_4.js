console.log("===MUST4====")
// 1で作ったクラスを継承したクラスを別名で2つ作成してください。
//片方にはコンストラクタで設定した数値型の配列の中央値を取得するメソッドを追加してください。
//もう片方には、コンストラクタで設定した数値型の配列の昇順ソートした結果を返すメソッドを追加してください。

class MaxSmall{
    constructor(arr){
        this.arr = arr;
    }
    
    getMax(){
        return Math.max(...this.arr);
        }
    getMin(){
        return Math.min(...this.arr);
    }
}

class Median extends MaxSmall{
    constructor(arr){
        super(arr);
        this.median = this.getMedian();
    }

    getMedian() {
        const sortedNumbers = Array.from(this.arr, Number).sort((a, b) => a - b);
        const length = Number(sortedNumbers.length);
        const middleIndex = Math.floor(length / 2);


        if (length % 2 === 0) {
            const middleValues = sortedNumbers.slice(middleIndex - 1, middleIndex + 1);
            return (middleValues[0] + middleValues[1]) / 2;
          } else {
            return sortedNumbers[middleIndex];
        
        }
    }
}

class Sort extends MaxSmall {
    constructor(arr) {
        super(arr);
        this.sort = this.getSorted;
    }

    getSorted() {
        return arr.toSorted((a, b) => a - b);
    }
}

exports.MaxSmall = MaxSmall;
exports.Sort = Sort;
exports.Median = Median;

const arr = [5,4,3,2,1];
let number = new MaxSmall(arr);
console.log(number.getMax());
console.log(number.getMin());

let numberMedian = new Median(arr);
console.log(numberMedian.getMedian());

let numberSort = new Sort(arr);
console.log(numberSort.getSorted());