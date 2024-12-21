function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function calculate(a:number, b:number, operation: string): number | string {
    try {
        switch(operation) {
            case '+': return add(a, b);
            case '-': return subtract(a, b);
            case '*': return multiply(a, b);
            case '/': return divide(a, b);
            default: return "Invalid operation";
        }
    } catch(error) {
        return error.message;
    }
}

const result1 = calculate(5,3,'+'); // 8
const result2 = calculate(10,4,'-'); // 6
const result3 = calculate(7,2,'*'); // 14
const result4 = calculate(9,0,'/'); // Error: Cannot divide by zero
const result5 = calculate(9,0,'!'); // Invalid operation