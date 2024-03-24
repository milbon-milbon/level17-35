console.log("===MUST3====")
// 1で作ったクラスの機能をプロパティのみで実現してください。※メソッドを使わずに最大値と最小値を取得できるようにしてください。
// ※コンストラクタは使ってよいです。
class MaxSmall{
    constructor(arr){
        this.arr = arr;
        this.max = Math.max(...arr);
        this.min = Math.min(...arr);
    }
}
module.exports = MaxSmall;
let arr = [-1,1, 2, 3, 4, 5,100];
let number = new MaxSmall(arr)
console.log(number.max);
console.log(number.min);