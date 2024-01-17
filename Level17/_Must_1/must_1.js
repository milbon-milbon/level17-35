console.log("===MUST1====")
//コンストラクタに数値の配列を取り、最大値を取得するメソッド、最小値を取得するメソッドを持つクラスを作成してください。
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
module.exports = MaxSmall;
let arr = [-1,1, 2, 3, 4, 5,100];
let number = new MaxSmall(arr)
console.log(number.getMax());
console.log(number.getMin());
