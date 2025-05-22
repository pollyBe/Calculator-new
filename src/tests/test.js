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
  test('add(1, 2)', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('add(88, 102)', () => {
    expect(add(88, 102)).toBe(190);
  });

  test('add(-34, 18)', () => {
    expect(add(-34, 18)).toBe(-16);
  });

  test('divide() should throw on 0', () => {
    expect(() => divide(5, 0)).toThrow();
  });

  test('divide(12, 4)', () => {
    expect(divide(12, 4)).toBe(3);
  });

  test('divide(782, 2)', () => {
    expect(divide(782, 2)).toBe(391);
  });

  test('subtract(12, 4)', () => {
    expect(subtract(12, 4)).toBe(8);
  });

  test('subtract(300, 489)', () => {
    expect(subtract(300, 489)).toBe(-189);
  });

  test('multiply(3, 79)', () => {
    expect(multiply(3, 79)).toBe(237);
  });

  test('multiply(-25, 4)', () => {
    expect(multiply(-25, 4)).toBe(-100);
  });

  test('percentage(784, 4)', () => {
    expect(percentage(784, 4)).toBeCloseTo(31.36);
  });

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

  test('square()', () => {
    expect(square(0)).toBe(0);
    expect(square(2)).toBe(4);
    expect(square(-3)).toBe(9);
  });

  test('cube()', () => {
    expect(cube(0)).toBe(0);
    expect(cube(2)).toBe(8);
    expect(cube(-3)).toBe(-27);
  });

  test('power()', () => {
    expect(power(2, 0)).toBe(1);
    expect(power(2, 3)).toBe(8);
    expect(power(5, -2)).toBeCloseTo(0.04);
    expect(power(2, 1.5)).toBeNaN();
  });

  test('powerOfTen()', () => {
    expect(powerOfTen(0)).toBe(1);
    expect(powerOfTen(2)).toBe(100);
    expect(powerOfTen(-1)).toBe(0.1);
    expect(powerOfTen(1.1)).toBeNaN();
  });

  test('inverse()', () => {
    expect(inverse(2)).toBe(0.5);
    expect(inverse(-4)).toBe(-0.25);
  });

  test('sqrt()', () => {
    expect(sqrt(0)).toBe(0);
    expect(sqrt(4)).toBeCloseTo(2);
    expect(sqrt(9)).toBeCloseTo(3);
    expect(sqrt(2)).toBeCloseTo(Math.sqrt(2), 5);
    expect(sqrt(-1)).toBeNaN();
  });

  test('cbrt()', () => {
    expect(cbrt(0)).toBe(0);
    expect(cbrt(27)).toBeCloseTo(3);
    expect(cbrt(-8)).toBeCloseTo(-2);
  });

  test('root()', () => {
    expect(root(27, 3)).toBeCloseTo(3);
    expect(root(16, 4)).toBeCloseTo(2);
    expect(root(-8, 3)).toBeCloseTo(-2);
    expect(root(-8, 2)).toBeNaN();
    expect(root(9, 1)).toBe(9);
    expect(root(4, -2)).toBeNaN();
    expect(root(4, 1.5)).toBeNaN();
  });

  test('factorial()', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(5)).toBe(120);
    expect(factorial(-1)).toBeNaN();
    expect(factorial(2.5)).toBeNaN();
  });
});
