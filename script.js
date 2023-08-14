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
  return num1 / num2;
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

display.textContent = num1;

let updatingVal = [];

function displayUpdate(updatingVal){
  display.textContent = updatingVal.join('');
  displayVal = Number(updatingVal.join(''));
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
      num1 = displayVal;
      updatingVal = [];
    } else if (num2 == 0) {
      num2 = displayVal;
      num1 = operate(num1, operator, num2);
      display.textContent = num1;
      num2 = 0;
      updatingVal = [];
    }
  });
});

//when clear is pressed

function clearAll() {
  updatingVal = [];
  num1 = 0;
  num2 = 0;
  operator = '';
  displayVal = 0;
  display.textContent = num1;
};

function clearKeepTotal() {
  updatingVal = [];
  operator = '';
  num2 = 0;
}

clButton.addEventListener('click', () => {
  clearAll();
});

//when equals is pressed

eqButton.addEventListener('click', () => {
  num2 = displayVal;
  num1 = operate(num1, operator, num2);
  display.textContent = num1;
  clearKeepTotal();
});

// CURRENT BUGS //
// after equals, if another operator is pressed it automatically operates with the previous "displayVal"
// if you press equals before an operation is complete, the display goes black



//user clicks numbers, these numbers populate the display in order
// user clicks an operator
// the first set of numbers gets stored in num1
// the operator gets stored in operator
// updatingVal gets zeroed out
// the user clicks numbers
//the display updates with the new numbers, populating updatingVal again
// somehow those numbers need to be stored again..........
// perhaps the operator has an if/else for if num1 is undefined

// if the user clicks another operator, the first set calculates and the display updates with the new total

// that total gets stored as num1
// the operator gets stored as operator

// the process repeats

// if the user hits equals, the function calculates and updates the display with the new total
// that total gets stored as num1

// the process repeats.

//so there's only ever two values and an operator being stored at one time 