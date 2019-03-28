const  BowlingGame = require('./index');

test('adds given array of scores', () => {
  expect(BowlingGame([1,2])).toBe(3);
});