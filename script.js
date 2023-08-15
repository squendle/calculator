//operator operand variables
let num1 = 0;
let num2 = 0;
let calc = 0;
let op1 = "plus";
let op2 = "";

//calculation functions

function add(num1, num2) {
  return Math.round((num1 + num2) * 100) / 100;
};

function sub(num1, num2) {
  return Math.round((num1 - num2) * 100) / 100;
}

function mul(num1, num2) {
  return Math.round((num1 * num2) * 100) / 100;
}

function div(num1, num2) {
  if (num2 !== 0) {
    return Math.round((num1 / num2) * 100) / 100;
  } else {
    return "sorry, no alien math";
  }
};

// operation function

function operate(num1, op, num2){
  if (op === "plus") {
    return add(num1, num2);
  } else if (op === "times") {
    return mul(num1, num2);
  } else if (op === "divided") {
    return div(num1, num2);
  } else if (op === "minus") {
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
    if (num1 == 0) {
      op1 = opButton.getAttribute("id");
      calc = operate(num1, op1, num2);
      num1 = calc;
      calc = 0;
      num2 = 0;
      updatingVal = [];
      display.texContent = num1;
    } else if (op1 !== "" && op2 === "") {
      op2 = opButton.getAttribute("id");
      calc = operate(num1, op1, num2);
      num1 = calc;
      calc = 0; 
      num2 = 0;
      updatingVal = [];
      display.textContent = num1;
    } else if (op1 !== "" && op2 !== "") {
      op1 = op2;
      op2 = opButton.getAttribute('id');
      calc = operate(num1, op1, num2);
      num1 = calc;
      calc = 0;
      num2 = 0;
      updatingVal = [];
      display.textContent = num1;
    };
  });
});

//when clear is pressed

function clearAll() {
  updatingVal = [];
  num1 = 0;
  num2 = 0;
  calc = 0;
  op1 = '';
  op2 = '';
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
    if (op1 !== '' && op2 === ''){
      num1 = operate(num1, op1, num2);
      display.textContent = num1;
      clearKeepTotal();
    } else if (op1 !== '' && op2 !== '') {
      num1 = operate(num1, op2, num2);
      display.textContent = num1;
      clearKeepTotal();
    }
});