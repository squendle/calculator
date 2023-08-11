//operator operand variables
let num1
let num2
let operator

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

// these are the variables for each button


const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const times = document.querySelector("#times");
const divided = document.querySelector("divided");
const clear = document.querySelector("#clear");
const equals = document.querySelector("#equals");

// variables for buttons and display

const numButtons = document.querySelectorAll(".nums");
const opButtons = document.querySelectorAll(".operator");
const clButton = document.querySelector("#clear");
const eqButton = document.querySelector("#equals");
const display = document.querySelector("#display");

//display updating stuff

let defaultVal = 0;
display.textContent = defaultVal;

let updatingVal = [];

function displayUpdate(updatingVal){
  display.textContent = updatingVal.join('');
  num1 = Number(updatingVal.join(''));
};

//this handles the button clicks
//perhaps I need separate event listeners for the operators, equals, and clear...

numButtons.forEach(numButton => {
  let value = numButton.value;
  numButton.addEventListener('click', () =>{
    updatingVal.push(value);
    displayUpdate(updatingVal);
  });
});

opButtons.forEach(opButton => {
  opButton.addEventListener('click', () => {
    console.log('click');
  });
});

clButton.addEventListener('click', () => {
  console.log('click');
});

eqButton.addEventListener('click', () => {
  console.log('click');
});



//user clicks numbers, these numbers populate the display in order
// user clicks an operator
// the first set of numbers gets stored... somewhere
// the operator gets stored... somewhere
// the next set of numbers gets stored... somewhere
// if the user clicks another operator, the first set calculates and the display updates with the new total
// that total gets stored as the first number... somewhere
// the operator gets stored.. somewhere
// the process repeats

// if the user hits equals, the function calculates and updates the display with the new total

// that new total gets stored as the first value... somewhere

// the process repeats.

//so there's only ever two values and an operator being stored at one time