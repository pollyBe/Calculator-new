export class Command {
  execute() {
    throw new Error('execute() must be implemented');
  }
}

export class BinaryCommand extends Command {
  constructor(a, b, operation) {
    super();
    this.a = a;
    this.b = b;
    this.operation = operation;
  }

  execute() {
    return this.operation(this.a, this.b);
  }
}

export class UnaryCommand extends Command {
  constructor(a, operation) {
    super();
    this.a = a;
    this.operation = operation;
  }

  execute() {
    return this.operation(this.a);
  }
}

export class CalculatorInvoker {
  constructor() {
    this.history = [];
  }

  run(command) {
    try {
      const result = command.execute();
      this.history.push(command);
      return result;
    } catch {
      return 'Error';
    }
  }
}
