import {
  add,
  subtract,
  multiply,
  divide,
  percentage,
  negate,
  square,
  cube,
  power,
  powerOfTen,
  inverse,
  sqrt,
  cbrt,
  root,
  factorial,
} from '../js/utils/math.js';

describe('math functions', () => {
  // Addition
  test('add(1, 2)', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('add(88, 102)', () => {
    expect(add(88, 102)).toBe(190);
  });

  test('add(-34, 18)', () => {
    expect(add(-34, 18)).toBe(-16);
  });

  // Division
  test('divide() should throw on 0', () => {
    expect(() => divide(5, 0)).toThrow();
  });

  test('divide(12, 4)', () => {
    expect(divide(12, 4)).toBe(3);
  });

  test('divide(782, 2)', () => {
    expect(divide(782, 2)).toBe(391);
  });

  // Subtraction
  test('subtract(12, 4)', () => {
    expect(subtract(12, 4)).toBe(8);
  });

  test('subtract(300, 489)', () => {
    expect(subtract(300, 489)).toBe(-189);
  });

  // Multiplication
  test('multiply(3, 79)', () => {
    expect(multiply(3, 79)).toBe(237); // Исправлено с 297
  });

  test('multiply(-25, 4)', () => {
    expect(multiply(-25, 4)).toBe(-100);
  });

  // Percentage
  test('percentage(784, 4)', () => {
    expect(percentage(784, 4)).toBeCloseTo(31.36);
  });

  // Negation
  test('negates positive number', () => {
    expect(negate(5)).toBe(-5);
  });

  test('negates negative number', () => {
    expect(negate(-3)).toBe(3);
  });

  test('negates zero', () => {
    expect(negate(0)).toBe(-0);
    expect(Object.is(negate(0), -0)).toBe(true);
  });
});
