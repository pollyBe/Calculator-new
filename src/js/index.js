import '../styles/index.css';
import { createLayout } from './UI/createLayout';
import { Calculator } from './calculator';
import * as math from './utils/math';

const body = document.querySelector('body');
body.classList.add('light-theme');
createLayout();

const expressionEl = document.querySelector('.calculator__expression');
const resultEl = document.querySelector('.calculator__result');
const calc = new Calculator();

function updateDisplay(override = null) {
  const operatorSymbol = getOperatorSymbol(calc.operator);
  const left = calc.left ?? '';
  const right = calc.right ?? '';
  const expression = `${left} ${operatorSymbol} ${right}`.trim();

  expressionEl.textContent = override ?? expression;
  resultEl.textContent = right || left || '0';
}

function getOperatorSymbol(op) {
  switch (op) {
    case math.add:
      return '+';
    case math.subtract:
      return '-';
    case math.multiply:
      return '×';
    case math.divide:
      return '÷';
    case math.power:
      return '^';
    case math.root:
      return 'y√x';
    case math.percentage:
      return '%';
    default:
      return '';
  }
}

document
  .querySelectorAll('.calculator__button, .calculator__button-operation')
  .forEach((btn) => {
    btn.addEventListener('click', () => {
      const val = btn.dataset.val;

      if (!isNaN(val) || val === '.') {
        calc.inputNumber(val);
        updateDisplay();
      } else {
        handleOperation(val);
      }
    });
  });

function handleOperation(value) {
  switch (value) {
    case '=':
      calc.count();
      break;
    case '+':
      calc.setOperator(math.add);
      break;
    case '-':
      calc.setOperator(math.subtract);
      break;
    case '*':
      calc.setOperator(math.multiply);
      break;
    case '/':
      calc.setOperator(math.divide);
      break;
    case '%':
      calc.setOperator(math.percentage);
      break;
    case '+/-':
      calc.countUnary(math.negate);
      break;
    case 'x**2':
      calc.countUnary(math.square);
      break;
    case 'x**3':
      calc.countUnary(math.cube);
      break;
    case 'x**y':
      calc.setOperator(math.power);
      break;
    case '10**x':
      calc.countUnary(math.powerOfTen);
      break;
    case '1/x':
      calc.countUnary(math.inverse);
      break;
    case 'sqrt':
      calc.countUnary(math.sqrt);
      break;
    case 'cbrt':
      calc.countUnary(math.cbrt);
      break;
    case 'root':
      calc.setOperator(math.root);
      break;
    case 'factorial':
      calc.countUnary(math.factorial);
      break;
    case 'AC':
      calc.clear();
      break;
    case 'MC':
      calc.memoryClear();
      break;
    case 'M+':
      calc.memoryAdd();
      break;
    case 'M-':
      calc.memorySubtract();
      break;
    case 'MR':
      calc.memoryRecall();
      break;
    default:
      break;
  }

  updateDisplay();
}
