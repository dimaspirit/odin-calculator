console.log("Welcome!")

let firstNumber;
let secondNumber;
let operator;

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
  return a / b;
}

function operate(firstNumber, operator, secondNumber) {
  switch(operator) {
    case "+": 
      add(firstNumber, operator, secondNumber);
      break;
    case "-":
      subtract(firstNumber, operator, secondNumber);
      break;
    case "*":
      multiply(firstNumber, operator, secondNumber);
      break;
    case "/": 
      divide(firstNumber, operator, secondNumber);
      break;
    default:
      console.error('Unknown operator', operator);
      break;
  }
}