function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return NaN;
  }
  return a / b;
}

function percentage(a, b) {
  return (a / 100) * b;
}

function negate(a) {
  return -a;
}

function square(a) {
  return a * a;
}

function cube(a) {
  return a * a * a;
}

function power(x, y) {
  if (!Number.isInteger(y)) {
    return NaN;
  }
  let result = 1;
  for (let i = 0; i < Math.abs(y); i++) {
    result = multiply(result, x);
  }
  if (y < 0) {
    return divide(1, result);
  }
  return result;
}

function powerOfTen(x) {
  if (!Number.isInteger(x)) {
    return NaN;
  }
  return power(10, x);
}

function inverse(x) {
  return divide(1, x);
}

function sqrt(x) {
  if (x < 0) {
    return NaN;
  }
  if (x === 0) {
    return 0;
  }

  let guess = 1;
  let prevGuess;

  do {
    prevGuess = guess;
    guess = (guess + divide(x, guess)) / 2;
  } while (Math.abs(guess - prevGuess) > 0.000001);

  return guess;
}

function cbrt(x) {
  if (x === 0) return 0;
  let guess = x;
  let prevGuess;

  do {
    prevGuess = guess;
    guess = (2 * guess + divide(x, square(guess))) / 3;
  } while (Math.abs(guess - prevGuess) > 0.000001);

  return guess;
}

function root(x, y) {
  if (!Number.isInteger(y) || y <= 0) {
    return NaN;
  }

  if (x < 0 && y % 2 === 0) {
    return NaN;
  }
  if (x === 0) return 0;
  if (y === 1) return x;

  let guess = x;
  let prevGuess;

  do {
    prevGuess = guess;
    let powerTerm = power(guess, y - 1);
    guess = ((y - 1) * guess + divide(x, powerTerm)) / y;
  } while (Math.abs(guess - prevGuess) > 0.000001);

  return guess;
}

function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    return NaN;
  }
  if (n === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = multiply(result, i);
  }
  return result;
}

export {
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
};
