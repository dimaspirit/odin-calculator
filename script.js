console.log("Welcome!")

let firstNumber;
let secondNumber;
let operator;

const screenNode = document.getElementById('screen');
const actionBtns = document.querySelectorAll('button[data-action]');
const numberBtns = document.querySelectorAll('button[data-number]');
const operatorBtns = document.querySelectorAll('button[data-operate]');

function isFilled(value) {
  return value || value === 0;
}

function handleActionBtn(event) {
  event.preventDefault();

  switch(event.target.dataset.action) {
    case 'calculate': {
      if(isFilled(firstNumber) && isFilled(secondNumber) && isFilled(operator)) {
        screenNode.textContent = operate(firstNumber, operator, secondNumber);
      }
    }
  }
  console.log(event.target.dataset.action);
}

actionBtns.forEach(actionBtn => {
  actionBtn.addEventListener('click', handleActionBtn);
});

function handleOperatorBtn(event) {
  event.preventDefault();
  operator = event.target.dataset.operate;
}

operatorBtns.forEach(operatorBtn => {
  operatorBtn.addEventListener('click', handleOperatorBtn);
})

function handleNumberBtn(event) {
  event.preventDefault();
  const number = +event.target.dataset.number;
  
  if(firstNumber && firstNumber !== 0 && operator) {
    secondNumber = number;
  } else {
    firstNumber = number;
  }

  screenNode.textContent = number;
}

numberBtns.forEach(numberBtn => {
  numberBtn.addEventListener('click', handleNumberBtn);
});

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
    case "add": 
      return add(firstNumber, secondNumber);
    case "subtract":
      return subtract(firstNumber, secondNumber);
    case "multiply":
      return multiply(firstNumber, secondNumber);
    case "divide": 
      return divide(firstNumber, secondNumber);
    default:
      console.error('Unknown operator', operator);
      break;
  }
}