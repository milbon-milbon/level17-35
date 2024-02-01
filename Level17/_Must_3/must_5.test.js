// console.log("===MUST5====")
// 作成したクラスが要件を満たすことを保証するテストコードを自作して追加してください。
// なお、テストはNode.jsの実行環境で動くようにしてください。
const MaxSmall = require('./must_3');

describe('MaxSmall', () => {
  it('should return the maximum and minimum values of an array', () => {
      let arr = [-1, 1, 2, 3, 4, 5, 100];
      let number = new MaxSmall(arr);
      expect(number.max).toEqual(100);
      expect(number.min).toEqual(-1);
  });
});

