const { add, sub, mul, div } = require('./math-utils');

describe('add', () => {
  it('should equal to 3 if 1 + 2', () => {
    expect(add(1, 2)).toBe(3);
  });

  it('should equal to 100 if 5 + 95', () => {
    expect(add(5, 95)).toBe(100);
  });

  it('should throw an error if one of the parameters is not a number', () => {
    expect(() => add('hello', 5)).toThrow();
  });
});

describe('div', () => {
  it('should throw an error if dvided by zero', () => {
    expect(() => div(5, 0)).toThrow();
  });
});
