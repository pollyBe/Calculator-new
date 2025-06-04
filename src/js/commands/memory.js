export class Memory {
  constructor() {
    this.value = 0;
  }

  clear() {
    this.value = 0;
  }

  add(val) {
    if (isNaN(val)) {
      return;
    }
    this.value += val;
  }

  subtract(val) {
    if (isNaN(val)) {
      return;
    }
    this.value -= val;
  }

  recall() {
    return this.value;
  }
}
