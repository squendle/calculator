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

let displayVal = [];

function displayUpdate(displayVal){
  display.textContent = displayVal.join('');
};

buttons.forEach(button => {
  let value = button.value;
  button.addEventListener('click', () =>{
    displayVal.push(value);
    displayUpdate(displayVal);
  });
});


//the total value displayed gets stored in ANOTHER variable which will be used in operations
//that final variable will need to be made into an integer before going into the operations functions

// if the button clicked has a class of operator, the display should stop updating
// the first displayed value should be stored in a variable to be used in the operate function
// the operator button clicked should be stored as the operator for the function
// the display starts a new update with the next input number
// the process repeats for as many operators and numbers the user wants
//  
