// console.log("===MUST5====")
// 作成したクラスが要件を満たすことを保証するテストコードを自作して追加してください。
// なお、テストはNode.jsの実行環境で動くようにしてください。
const MaxSmall = require('./must_1');

test('should return the maximum number from an array of numbers', () => {
    let get = new MaxSmall(-1,1, 2, 3, 4, 5,100);
      expect(get.getMax()).toBe(100);
    });
  

test('should return the minimum number from an array of numbers', () => {
    let get = new MaxSmall(-1,1, 2, 3, 4, 5,100);
    expect(get.getMin()).toBe(-1);
    });
