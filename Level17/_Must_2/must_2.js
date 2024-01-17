console.log("===MUST2====")
//1で作った各メソッドを、インスタンス化なしで呼び出せる静的メソッドにしてください。ただし、メソッドの引数に数値の配列を取るものとします。
class MaxSmall{
    constructor(arr){
        this.arr = arr;
    }
    
    static getMax(){
        return Math.max(...arr);
        }
    static getMin(){
        return Math.min(...arr);
    }
}

module.exports = MaxSmall;
let arr = [-1,1, 2, 3, 4, 5,100];
console.log(MaxSmall.getMax());
console.log(MaxSmall.getMin());