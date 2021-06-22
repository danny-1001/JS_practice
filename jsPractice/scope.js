// globalScope

let food = "apple";
let fruits = 5;

function store() {
  //functionScope
  //   let food = "banana";
  //   let fruits = 50;
  //   console.log(food, fruits);
  //-------------------------------//
  console.log(food, fruits);
}
store();
//blockScope
// for (let fruits = 0; fruits < 10; fruits++){
//     console.log(fruits);
// }
