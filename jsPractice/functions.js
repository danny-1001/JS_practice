// function greet(name) {
//   //   let name = prompt(`What is your name?`);
//   console.log(`Welcomee to our website ` + name);
// }
// console.log(`Rest of the code`);
// function signUp() {
//   let name = prompt(`What is your name`);
//   greet(name);
// }

// signUp();

function max(num1 = 0, num2 = 0) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

let inbox = max(6);
console.log(inbox);
