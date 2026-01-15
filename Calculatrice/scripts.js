window.alert("Hi, pleased to see ya");

console.log("Text shown in console");
let person = prompt("Type your name");

let age = prompt("Type your age");
alert(
  age === "" || isNaN(age) ? "Enter a valid number for your age!" : `${age}`
);
if (age < 18) {
  console.log("You're underage!");
} else if (age >= 18) {
  console.log("You're an adult, welcome");
}

const number = prompt("Enter a number: ");
if (number % 2 == 0) {
  console.log("The number is even");
} else {
  console.log("The number is odd");
}

const display = document.getElementById("display");
function appendToDisplay(input) {
  display.value += input;
}
function clearDisplay() {
  display.value = "";
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
