console.log("Welcome!")

let firstNumber;
let secondNumber;
let operator;

const screenNode = document.getElementById('screen');
const actionBtns = document.querySelectorAll('button[data-action]');
const numberBtns = document.querySelectorAll('button[data-number]');

function handleActionBtn(event) {
  event.preventDefault();
  console.log(event.target.dataset.action);
}

actionBtns.forEach(actionBtn => {
  actionBtn.addEventListener('click', handleActionBtn);
});

function handleNumberBtn(event) {
  event.preventDefault();
  const number = +event.target.dataset.number;
  
  if(firstNumber && firstNumber !== 0) {
    secondNumber = number;
  } else {
    firstNumber = number;
  }

  screenNode.textContent = number;
}

numberBtns.forEach(numberBtn => {
  numberBtn.addEventListener('click', handleNumberBtn);
})

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