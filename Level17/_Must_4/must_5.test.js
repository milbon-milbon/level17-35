// console.log("===MUST5====")
// 作成したクラスが要件を満たすことを保証するテストコードを自作して追加してください。
// なお、テストはNode.jsの実行環境で動くようにしてください。
const MaxSmall = require('./must_4');
const Median = require('./must_4');
const Sort = require('./must_4');

test('should return the maximum number from an array of numbers', () => {
    let get = new MaxSmall(1,1, 2,2,2,2, 3, 4,4,4,4,4,4,4, 5);
      expect(get.getMax()).toBe(5);
    });
  
test('should return the minimum number from an array of numbers', () => {
    let get = new MaxSmall(1,1, 2,2,2,2, 3, 4,4,4,4,4,4,4, 5);
    expect(get.getMin()).toBe(1);
    });


    test('should return the median number from an array of numbers', () => {                                                                                         
        let get = new Median(1,1, 2,2,2,2, 3, 4,4,4,4,4,4,4, 5);                                                                                                     
        expect(get.getMedian()).toBe(1);
  });

test('should return the sort number from an array of numbers', () => {
    let get = new Sort(1,1, 2,2,2,2, 3, 4,4,4,4,4,4,4, 5);
    expect(get.getSorted()).toEqual([1,1, 2,2,2,2, 3, 4,4,4,4,4,4,4, 5]);
    });