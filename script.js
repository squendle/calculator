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

const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const times = document.querySelector("#times");
const divided = document.querySelector("divided");
const clear = document.querySelector("#clear");
const equals = document.querySelector("#equals");

const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");

let displayVal = "HI";

buttons.forEach(button => {
  button.addEventListener('click', displayUpdate());
});
// I want for each click on a button to take the id and grab the correct variable, then update the displayVal with that variable....

// when a button clicks, that number goes into the display
 

function displayUpdate(displayVal){
  display.textContent = displayVal;
};