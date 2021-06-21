// one equal: setting a variable
// const number = 2;

//two equal: comparing; rarely use double equal
// 5 == 5: true

// != : Not equal
// 4 != 3 TRUE
// 4 != 4 FALSE

//<  >
// 5 > 10 FALSE
// 10 > 6 TRUE


const age = 20;

if (age >= 18) {
  console.log("you have acess");
} else {
  console.log("U dont have acesss! scrub!");
}

const age2 = 17;
const bank = 20;

//&& means both values have to be true

if (age2 >= 18 && bank > 15) {
  console.log("You have access to the bank");
} else {
  console.log(`You're crazy`);
}

// "||" means "or", it only needs one value to be true
const age3 = 14;
const bank2 = 30;

if (age3 >= 18 || bank2 > 30) {
  console.log(`you have some acess`);
} else {
  console.log(`you still cant have access scrub!`);
}

// else if

const age4 = 7;
const bank3 = 50;
if (age4 >= 18) {
  console.log(`you're old man`);
} else if (bank > 30) {
  console.log(`cool money`);
} else {
  console.log(`not today`);
}

// Truthy False

//FALSE, 0, empty strings "", null = Falsey value
