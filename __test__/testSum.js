/**
 * Created by shi.pengyan on 2015/8/30.
 */

//jest-cli 安装失败，shit
jest.dontMock('./sum');

describe('sum', function () {
  it('adds 1 + 2 to equal 3', function () {
    var sum = require('../sum');
    expect(sum(1, 2)).toBe(3);
  });
});