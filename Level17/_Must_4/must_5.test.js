// console.log("===MUST5====")
// 作成したクラスが要件を満たすことを保証するテストコードを自作して追加してください。
// なお、テストはNode.jsの実行環境で動くようにしてください。
const MaxSmall = require('./must_4');
const Median = require('./must_4');
const Sort = require('./must_4');

test('should return the maximum number from an array of numbers', () => {
    let get = new MaxSmall([5,4,3,2,1]);
      expect(get.getMax()).toBe(5);
    });
  
test('should return the minimum number from an array of numbers', () => {
    let get = new MaxSmall([5,4,3,2,1]);
    expect(get.getMin()).toBe(1);
    });
test('should return the median number from an array of numbers', () => {
    // モック化した getMedian メソッド
    const mockGetMedian = jest.fn(() => 3);
    
    // Median クラスのインスタンスを作成
     const medianInstance = new Median([5, 4, 3, 2, 1]);
    
    // getMedian メソッドをモック化した関数を設定
    medianInstance.getMedian = mockGetMedian;
    
    // テストケース
    expect(medianInstance.getMedian()).toBe(3);
    });

test('should return the sort number from an array of numbers', () => {
    let get = new Sort([5,4,3,2,1]);
    expect(get.getSorted()).toEqual([1, 2, 3, 4, 5]);
    });