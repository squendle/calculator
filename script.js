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