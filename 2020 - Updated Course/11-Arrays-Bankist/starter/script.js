'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements, sort = false){
  containerMovements.innerHTML = '';
  // .textContent = 0
  
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function(mov, i){
    const type = mov > 9 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);

  });
};

const calcDisplayBalance = function(acc){
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function(account){
  const incomes = account.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = account.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = account.movements.filter(mov => mov > 0).map(deposit => deposit * 1.2 / 100).filter((int, i, arr) => int >= 1).reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function(accs){
  accs.forEach(function(acc){
    acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
  });
};
createUsernames(accounts);

// Event Handler
let currentAccount;

btnLogin.addEventListener('click', function(e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount);

  if(currentAccount?.pin === Number(inputLoginPin.value)){
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

const updateUI = function(currentAccount) {
  // Display movements
  displayMovements(currentAccount.movements);

  // Display balance
  calcDisplayBalance(currentAccount);

  // Display summary
  calcDisplaySummary(currentAccount);
};

btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  inputTransferAmount.value = inputTransferTo.value = '';
  
  if(amount > 0 && currentAccount.balance >= amount && receiverAcc && receiverAcc.username !== currentAccount.username){
    // Doing the Transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
  }

  // Update UI
  updateUI(currentAccount);
});

btnLoan.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
    // Add amount
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function(e) {
  e.preventDefault();
  
  if(Number(inputClosePin.value) === currentAccount.pin && inputCloseUsername.value === currentAccount.username){
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    console.log(index);

    // Delete Account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin = '';
});

let sorted = false;
btnSort.addEventListener('click', function(e){
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted; 
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
// Simple Array Methods
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE - Take elements from an array into a new array without removing them from the original
console.log(arr.slice(2)); // ["c", "d", "e"]
console.log(arr.slice(2, 4)); // ["c", "d"]
console.log(arr.slice(-2)); // ["d", "e"]
console.log(arr.slice(-1)); // ["e"] 
console.log(arr.slice(1, -2)); // ["b", "c"]
console.log(arr.slice()); // ["a", "b", "c", "d", "e"]
console.log([...arr]); // ["a", "b", "c", "d", "e"]

// SPLICE - Remove elements from an array and put them into a new array
// console.log(arr.splice(2)); // ["c", "d", "e"]
console.log(arr.splice(-1)); // ["e"]
console.log(arr); // ["a", "b", "c", "d"]
console.log(arr.splice(1, 2)); // ["b", "c"]
console.log(arr); // ["a", "b", "c", "d"]

// REVERSE - Reverse the elements within the array, changing it
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // ["f", "g", "h", "i", "j"] 
console.log(arr2); // ["f", "g", "h", "i", "j"]

// CONCAT - Joins two arrays into one array
const letters = arr.concat(arr2);
console.log(letters); // ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
console.log([...arr, ...arr2]); // ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]

// JOIN - Convert the array into a string, seperating the elements with the inserted parameter
console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j

// Looping Arrays: forEach
// for(const movement of movements){
  for(const [i, movement] of movements.entries()){
    if(movement > 0){
      console.log(`Movement ${i + 1}: You deposited ${Math.abs(movement)}.`);
    } else {
      console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}.`);
    }
  };
  
  console.log('---- forEach ----');
  movements.forEach(function(mov, i, arr) {
    if(mov > 0){
      console.log(`Movement ${i}: You deposited ${Math.abs(mov)}.`);
    } else {
    console.log(`Movement ${i}: You withdrew ${Math.abs(mov)}.`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

// forEach with maps and sets
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// Maps
currencies.forEach(function(value, key, map){
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, _, map){
  console.log(`${value}: ${value}`);
});
*/

// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀

const checkDogs = function(dogsJulia, dogsKate){
  let newDogsJulia = [...dogsJulia];
  newDogsJulia.splice(0, 1);
  newDogsJulia.splice(-2);
  let finalArray = newDogsJulia.concat(dogsKate);
  console.log(finalArray);
  finalArray.forEach(function(dog, index){
    const dogAge = dog >= 3 ? 'an adult' : 'a puppy';
    console.log(`Dog number ${index + 1} is ${dogAge}, and is ${dog} years old.`);
  });
};

const juliaData1 = [3, 5, 2, 12, 7];
const juliaData2 = [9, 16, 6, 8, 3];
const kateData1 = [4, 1, 15, 8, 3];
const kateData2 = [10, 5, 6, 1, 4];

checkDogs(juliaData1, kateData1);
checkDogs(juliaData2, kateData2);

/////
// The Map Method

const eurToUsd = 1.1;

const movementsUSD =  movements.map((mov) => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDFor = [];
for(const mov of movements) movementsUSDFor.push(mov * eurToUsd);
console.log(movementsUSDFor);

const movementsDescriptions = movements.map((mov, i) => 
`Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);
console.log(movementsDescriptions);

/// The Filter Method
const deposits = movements.filter(function(mov){
  return mov > 0;
});

const depositsFor = [];
for(const mov of movements){
  if(mov > 0){
    depositsFor.push(mov);
  }
};

const withdrawals = movements.filter(mov => mov < 0);


/// The Reduce Method

console.log(movements);

// accumulator is like a snowball
// const balance = movements.reduce(function(acc, curr, i, arr){
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + curr
// }, 0);
const balance = movements.reduce((acc, cur) => acc + cur, 0);

console.log(balance); // 3840

let balance2 = 0;
for(const mov of movements) balance2 += mov;
console.log(balance2); // 3840

// Maximum Value
const max = movements.reduce((acc, mov) => {
  if(acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max); // 3000

*/

// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀

const calcAverageHumanAge = function(ages){
  const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  
  const avg = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  return avg;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
*/

/*
const eurToUsd = 1.1;

// Pipeline
const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD); // 5522.000000000001

*/


// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀

const calcAverageHumanAge = (ages) => ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4)).filter(age => age >= 18).reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

// The find method
const firstWithdrawl = movements.find(mov => mov < 0);
console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(firstWithdrawl); // -400

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account); // {owner: "Jessica Davis", movements: Array(8), interestRate: 1.2, pin: 1111, username: "js"}


console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300]

// Equality
console.log(movements.includes(-130)); // true

// Some: Condition
console.log(movements.some(mov => mov === -130 )); // true

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits); // true
// Every
console.log(movements.every(mov => mov > 0)); // false
console.log(account4.movements.every(mov => mov > 0)); // true

// Seperate Callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit)); // true
console.log(movements.every(deposit)); // false
console.log(movements.filter(deposit)); // [200, 450, 3000, 70, 1300]

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); // [1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8]

// flat
const overallBalance = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance); // 17840 

// flat map
const overallBalance2 = accounts.flatMap(acc => acc.movements).flat().reduce((acc, mov) => acc + mov);
console.log(overallBalance2); // 17840

const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); // ["Adam", "Jonas", "Martha", "Zach"]
console.log(owners); // ["Adam", "Jonas", "Martha", "Zach"]

// Strings
console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movements.sort()); // [-130, -400, -650, 1300, 200, 3000, 450, 70]

// Numbers
console.log(movements);

// return < 0, A, B (keep order)
// return > 0, A, B (switch order)

// Ascending
// movements.sort((a, b) => {
  //   if(a > b) return 1;
  //   if(a < b) return -1;
  // });
  
movements.sort((a, b) => a - b);
console.log(movements); // [-650, -400, -130, 70, 200, 450, 1300, 3000]
  
  // Descending
  // movements.sort((a, b) => {
    //   if(a > b) return -1;
    //   if(a < b) return 1;
    // });
    
movements.sort((a, b) => b - a);
console.log(movements); // [3000, 1300, 450, 200, 70, -130, -400, -650]
    
const arr = [1, 2, 3, 4, 5, 6, 7];

const x = new Array(7);
console.log(x); // [empty × 7]
// console.log(x.map(() => 5)); // [empty × 7]

// x.fill(1); // [1, 1, 1, 1, 1, 1, 1]
x.fill(1, 3, 5); // [empty × 3, 1, 1, empty × 2]
console.log(x); 

arr.fill(23, 2, 6);
console.log(arr); // [1, 2, 23, 23, 23, 23, 7]

// Array.from
const y = Array.from({length: 7}, () => 1);
console.log(y); // [1, 1, 1, 1, 1, 1, 1]

const z = Array.from({length: 7}, (cur, i) => i + 1);
console.log(z); // [1, 2, 3, 4, 5, 6, 7]

const randomDiceRolls = Array.from({length: 100}, () => Math.floor(Math.random() * 6) + 1);
console.log(randomDiceRolls); 

labelBalance.addEventListener('click', function() {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'), el => Number(el.textContent.replace('€', '')));
  console.log(movementsUI);
  
  // const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  // console.log(movementsUI2);
  
});


// Array Methods Practice

// 1.
const bankDepositSum = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum); // 25180

// 2.
// const numDeposits1000 = accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000).length;
const numDeposits1000 = accounts.flatMap(acc => acc.movements).reduce((count, cur) => cur >= 1000 ? ++count : count, 0);
console.log(numDeposits1000); // 6

// Prefixed ++ operator
let a = 10;
console.log(++a); // 11
console.log(a); // 11

// 3.
const {deposits, withdrawals} = accounts.flatMap(acc => acc.movements).reduce((sums, cur) => {
  // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
  sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
  return sums;
}, {deposits: 0, withdrawals: 0});
console.log(deposits, withdrawals); // 25180 -7340

// 4. this is a nice title => This Is a Nice Title
const convertTitleCase = function(title){
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
  
  const exceptions = ['a', 'n', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title.toLowerCase().split(' ').map(word => (exceptions.includes(word) ? word : capitalize(word))).join(' ');
  
  return capitalize(titleCase);
};
console.log(convertTitleCase('this is a nice title')); // This Is a Nice Title
console.log(convertTitleCase('this is a LONG title but not too long')); // This Is a Long Title but Not Too Long
console.log(convertTitleCase('and here is another title with another EXAMPLE')); // And Here Is Another Title with Another Example
*/


// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Formula: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

// 1.
dogs.forEach((curr) => curr.recFood = Math.trunc(curr.weight ** 0.75 * 28));
console.log(dogs);

// 2.
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarahDog.curFood > sarahDog.recFood ? 'Sarah\'s dog is eating too much.' : 'Sarah\'s dog is eating too little.');

// 3.
const ownersEatTooMuch = dogs.filter(cur => cur.curFood > cur.recFood).flatMap(cur => cur.owners);
const ownersEatTooLittle = dogs.filter(cur => cur.curFood < cur.recFood).flatMap(cur => cur.owners);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much.`);
console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too little.`);

// 5. 
console.log(dogs.includes(cur => cur.recFood === cur.curFood));

// 6.
// Okay amount of food = current > (recommended * 0.90) && current < (recommended * 1.10)
const checkEatingOkay = dog => dog.curFood > dog.recFood * .90 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay));

// 8.
const sortedDogs = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(sortedDogs);
*/


