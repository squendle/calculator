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

const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");

//display updating stuff

let displayVal = "0"
display.textContent = displayVal;

function displayUpdate(displayVal){
  display.textContent = displayVal;
};

buttons.forEach(button => {
  let value = button.value;
  button.addEventListener('click', () =>{
    displayVal = value;
    displayUpdate(displayVal);
  });
});

//every button has an id
//any button gets a click
//that button's unique id should be added to a variable which updates the display in real time, concatenating with the next button click as well
//the total value displayed gets stored in ANOTHER variable which will be used in operations
//that final variable will need to be made into an integer before going into the operations functions

