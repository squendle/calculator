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

let defaultVal = 0;
display.textContent = defaultVal;

let updatingVal = [];
let displayVal

function displayUpdate(updatingVal){
  display.textContent = updatingVal.join('');
  displayVal = Number(updatingVal.join(''));
  console.log(displayVal);
};

buttons.forEach(button => {
  let value = button.value;
  button.addEventListener('click', () =>{
    updatingVal.push(value);
    displayUpdate(updatingVal);
  });
});

function getCalculation(num1, operator, num2) {
  return {
    num1,
    operator,
    num2
  }
};



//the total value displayed gets stored in ANOTHER variable which will be used in operations
//that final variable will need to be made into an integer before going into the operations functions

// if the button clicked has a class of operator, the display should stop updating
// the first displayed value should be stored in a variable to be used in the operate function
// the operator button clicked should be stored as the operator for the function
// the display starts a new update with the next input number
// the process repeats for as many operators and numbers the user wants

//I think I need an Object, where the values get stored as key-value pairs in one obj based on the clicks

// then the operation function will need to call those key-value pairs from variables that target them

//in order to have multiple values (more than 2) I will need to maybe store the values in an array first, then call array indexes in the function to store them in the object? 

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