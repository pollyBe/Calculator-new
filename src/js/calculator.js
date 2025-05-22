import {
  BinaryCommand,
  UnaryCommand,
  CalculatorInvoker,
} from './commands/commands.js';
import { Memory } from './commands/memory.js';

export class Calculator {
  constructor() {
    this.invoker = new CalculatorInvoker();
    this.memory = new Memory();

    this.left = null;
    this.right = null;
    this.operator = null;
    this.result = null;
    this.shouldResetInput = false;
  }

  inputNumber(num) {
    if (this.shouldResetInput) {
      if (this.operator === null) {
        this.left = num;
      } else {
        this.right = num;
      }
      this.shouldResetInput = false;
      return;
    }

    if (this.operator === null) {
      this.left = (this.left ?? '') + num;
    } else {
      this.right = (this.right ?? '') + num;
    }
  }

  setOperator(operatorFunc) {
    if (this.left !== null && this.right !== null && this.operator) {
      this.count();
    }
    this.operator = operatorFunc;
    this.shouldResetInput = true;
  }

  count() {
    if (this.left !== null && this.right !== null && this.operator) {
      const a = parseFloat(this.left);
      const b = parseFloat(this.right);
      const command = new BinaryCommand(a, b, this.operator);
      const result = this.invoker.run(command);

      this.left = String(result);
      this.right = null;
      this.operator = null;
      this.result = result;
      this.shouldResetInput = true;

      return result;
    }
    return this.left;
  }

  countUnary(operation) {
    const val = parseFloat(this.left ?? this.right ?? '0');
    const command = new UnaryCommand(val, operation);
    const result = this.invoker.run(command);

    this.left = String(result);
    this.right = null;
    this.operator = null;
    this.result = result;
    this.shouldResetInput = true;

    return result;
  }

  clear() {
    this.left = null;
    this.right = null;
    this.operator = null;
    this.result = null;
    this.shouldResetInput = false;
  }

  memoryClear() {
    this.memory.clear();
  }

  memoryAdd() {
    this.memory.add(parseFloat(this.result ?? this.left));
  }

  memorySubtract() {
    this.memory.subtract(parseFloat(this.result ?? this.left));
  }

  memoryRecall() {
    const val = this.memory.recall();
    if (this.operator === null) {
      this.left = String(val);
    } else {
      this.right = String(val);
    }
    this.shouldResetInput = true;
    return val;
  }
}
