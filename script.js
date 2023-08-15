//operator operand variables
let num1 = 0;
let num2 = 0;
let operator = "plus";

//calculation functions

function add(num1, num2) {
  return num1 + num2;
};

function sub(num1, num2) {
  return num1 - num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  if (num2 !== 0) {
    return num1 / num2;
  } else {
    return "sorry, no alien math";
  }
};

// operation function

function operate(num1, operator, num2){
  if (operator === "plus") {
    return add(num1, num2);
  } else if (operator === "times") {
    return mul(num1, num2);
  } else if (operator === "divided") {
    return div(num1, num2);
  } else if (operator === "minus") {
    return sub(num1, num2);
  }
};

// variables for buttons and display

const numButtons = document.querySelectorAll(".nums");
const opButtons = document.querySelectorAll(".operator");
const clButton = document.querySelector("#clear");
const eqButton = document.querySelector("#equals");
const display = document.querySelector("#display");

//display updating stuff

let updatingVal = [];
display.textContent = num1;

function displayUpdate(updatingVal){
  num2 = Number(updatingVal.join(''));
  display.textContent = num2;
};

//this handles the button clicks

numButtons.forEach(numButton => {
  let value = numButton.value;
  numButton.addEventListener('click', () =>{
      if (updatingVal.length < 9) {
      updatingVal.push(value);
      displayUpdate(updatingVal);
    };
  });
});

opButtons.forEach(opButton => {
  opButton.addEventListener('click', () => {
    operator = opButton.getAttribute("id");
    if (num1 == 0) {
      num1 = num2;
      updatingVal = [];
      num2 = 0;
    } else if (num1 !== 0 && num2 !== 0) {
      num1 = operate(num1, operator, num2);
      updatingVal = [];
      display.textContent = num1;
    }
  });
});

//when clear is pressed

function clearAll() {
  updatingVal = [];
  num1 = 0;
  num2 = 0;
  operator = 'plus';
  display.textContent = num1;
};

function clearKeepTotal() {
  updatingVal = [];
  num2 = 0;
}

clButton.addEventListener('click', () => {
  clearAll();
});

//when equals is pressed

eqButton.addEventListener('click', () => {
    num1 = operate(num1, operator, num2);
    display.textContent = num1;
    clearKeepTotal();
});