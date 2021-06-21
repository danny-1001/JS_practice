// For Loops

// for (let i = 0; i <= 100; i++) {
//   //runCode
// //   console.log(i);
//   if (i === 20) {
//     console.log(`Hey you hit 20!`);
//     continue;
//   }
//   console.log(i);
// }

// for (let x = 0; x <= 100; x++) {
//   if (x === 40) {
//     console.log(`Damn, now you're 40!`);
//     break;
//   }
//   console.log(x);
// }

// const text = ["Singing", "Dog", "Cat", "Black", "Golden", 'Hey'];
// for (let i = 0; i <= text.length; i++) {
//   console.log(i);
// }

// const word = 'Howdy'
// for (let x = 0; x < word.length;x++){
//     console.log(x);
// }

// const fruit = 'Apple'
// for (let a = 0; a <= fruit.length;a++){
//     console.log(a)
// }

//forOF and forEACH

const names = ["Barry", "Clark", "Diana", "Arthur", "Matt"];

// for(let name of names){
//     console.log(name)
// }
// for (let name of names) {
//   if (name === "Arthur") {
//     break;
//   }
//   console.log(name);
// }

// //Specific to ARRAYS, slower by 25%
// names.forEach(function (name, index) {
//   console.log(name, index);
// });

//forIn
// user.name, age, subs, money = property.
// values inside of properties are called, values.

// const user = {
//   name: "Danny A",
//   age: 25,
//   subs: 200,
//   money: "1,000,000",
// };
// for (let x in user) {
//   console.log(user[x]);
// }
