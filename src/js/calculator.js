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
  }

  inputNumber(num) {
    if (this.operator === null) {
      this.left = (this.left ?? '') + num;
    } else {
      this.right = (this.right ?? '') + num;
    }
  }

  setOperator(operatorFunc) {
    if (this.operator && this.right !== null) {
      this.count();
    }
    this.operator = operatorFunc;
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
    return result;
  }

  clear() {
    this.left = null;
    this.right = null;
    this.operator = null;
    this.result = null;
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
    return val;
  }
}
