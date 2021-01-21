'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}){
    console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
  },

  orderPasta(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`)
  },

  orderPizza(mainIngredient, ...otherIngredients){
    console.log(mainIngredient, otherIngredients);
  }
};

/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // [1, 2, 7, 8, 9];

const goodNewArr = [1, 2, ...arr]; 
console.log(goodNewArr); // [1, 2, 7, 8, 9];

console.log(...arr); // 7, 8, 9

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); // ["Pizza", "Pasta", "Risotto", "Gnocci"]

// Iterables: arrays, strings, maps, sets, NOT objects!
const str = 'Jonas';
const letters = [...str, " ", "S."];
console.log(letters); // ["J", "o", "n", "a", "s", " ", "S."]
console.log(...str); // J o n a s
// console.log(`${...str} Schmedtmann`); // unexpected token

// Real World Example
const ingredients = [
  prompt('Let\'s make pasta! Ingredient 1?'), 
  prompt('Ingredient 2?'), 
  prompt('Ingredient 3?')
];
console.log(ingredients); 
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {foundedIn: 1988, ...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name); // Classico Italiano
console.log(restaurantCopy.name); // Ristorante Roma

// 1) Destructuring

// SPREAD, because it is on the right side of the =
const arr = [1, 2, ...[3, 4]];

// REST, because it is on the left side of the =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1, 2, [3, 4, 5]

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood); // Pizza, Risotto, ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]

// Objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays); // fri: {open: 11, close: 23}, thu: {open: 12, close: 22}

// 2) Functions
const add = function(...numbers){
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  };
  console.log(sum);
};

add(2, 3); // 5
add(5, 3, 7, 2); // 17
add(8, 2, 5, 3, 2, 1, 4); // 25

const x = [23, 5, 7];
add(...x); // 35\

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach'); // mushrooms, ["onion", "olives", "spinach"]
restaurant.orderPizza('mushrooms'); // mushrooms, []

// Use ANY data type, return ANY data type, short-circuit evaluation
console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // 'Hello'

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // 10

const guests2 = restaurant.numGuests || 10;
console.log(guests2); // 10

console.log('----- AND -----');
console.log(0 && 'Jonas'); // 0
console.log(7 && 'Jonas'); // Jonas

console.log('Hello' && 23 && null && 'Jonas'); // null

// Practical Example
if(restaurant.orderPizza){
  restaurant.orderPizza('mushrooms', 'spinach');
};

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); // mushroom, [spinach]


// restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); // 10

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // 10


restaurant.orderDelivery({
  time: '22:30',
  address: 'Via de Sole, 21',
  mainIndex: 2,
  starterIndex: 2
}); // Order recieved! Garlic Bread and Risotto will be delivered to Via de Sole, 21 at 22:30.

restaurant.orderDelivery({
  address: 'Via de Sole, 21',
  starterIndex: 1
}); // Order recieved! Bruschetta and Pizza will be delivered to Via de Sole, 21 at 20:00.

// Destructring Objects 
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories); // Classico Italiano, {thu: {…}, fri: {…}, sat: {…}}, ["Italian", "Pizzeria", "Vegetarian", "Organic"]

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags); // Classico Italiano, {thu: {…}, fri: {…}, sat: {…}}, ["Italian", "Pizzeria", "Vegetarian", "Organic"]

const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters); // [], ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]

// Mutating Variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};

({a, b} = obj);
console.log(a, b); // 23, 7

// Nested Objects
const {fri: {open: o, close: c}} = openingHours;
console.log(o, c); // 11, 23

// Destructring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z); // 2 3 4
console.log(arr); // [2, 3, 4]

let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // Italian Vegetarian

// Switching Variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); // Vegetarian Italian

[main, secondary] = [secondary, main];
console.log(main, secondary); // Vegetarian Italian

// Recieve 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // Garlic Bread, Pizza

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); // 2, [5, 6]
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2, 5, 6

// Default values
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r); // 8, 9, 1

// The for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for(const item of menu) console.log(item);
for(const [i, el] of menu.entries()){
  console.log(`${i + 1}: ${el}`);
};
// console.log([...menu.entries()]);


//// Optional Chaining

if(restaurant.openingHours && restaurant.openingHours.mon){
  console.log(restaurant.openingHours.mon.open);
}

console.log(restaurant.openingHours.mon?.open); // undefined

// With optional chaining
console.log(restaurant.openingHours?.mon?.open); // undefined

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for(const day of days){
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we open at ${open}`);
};

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist.'); // ["Focaccia", "Pasta"]
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist.'); // Method does not exist.

// Arrays
const users = [
  {name: "Jonas", email: "hello@jonas.io"}
];

console.log(users[0]?.name) ?? 'User array empty!';

if(users.length >= 0){
  console.log(users[0]?.name);
} else {
  console.log('User array empty!');
}


//// Looping Objects

// Property Names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for(const day of properties){
  console.log(day);
  openStr += `${day}, `
};
console.log(openStr);

// Property Values
const values = Object.values(openingHours);
console.log(values);

// Entire Object
const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
for(const [key, {open, close}] of entries){
  console.log(`On ${key} we open at ${open} and close at ${close}.`);
};

///// Sets and Maps
// Sets
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(ordersSet); // {"Pasta", "Pizza", "Risotto"}

console.log(new Set('Jonas')); // {"J", "o", "n", "a", "s"}

console.log(ordersSet.size); // 3
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Bread')); // false
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet); // {"Pasta", "Pizza", "Garlic Bread"}

for(const order of ordersSet){
  console.log(order);
}; 

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique); // ["Waiter", "Chef", "Manager"]
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size); // 3

console.log(new Set('jonasschmedtmann').size); // 11


// Maps
// Fundamentals
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze', 'Italy');
console.log(rest.set(2, 'Lisbon', 'Porutgal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open!')
  .set(false, 'We are closed!');

console.log(rest.get('name')); // Classico Italiano
console.log(rest.get(true)); // We are open!
console.log(rest.get('1')); // undefined

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // We are open!

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear(); // Clears the map

const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest);
console.log(rest.size); // 7

console.log(rest.get(arr)); // Test

// Iterations
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C++'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try Again!']
]);

console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz App
console.log(question.get('question'));
for(const [key, value] of question){
  if(typeof key === 'number') console.log(`Answer ${key}: ${value}`)
};
// const answer = Number(prompt('Your answer'));
const answer = 3;
// console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

*/


/*
// Working with Strings Part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log('B737'[0]); // B

console.log(airline.length); // 16
console.log('B737'.length); // 4

console.log(airline.indexOf('r')); // 6
console.log(airline.lastIndexOf('r')); // 10
console.log(airline.indexOf('Portugal')); // 8

console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air

console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal

console.log(airline.slice(-2)); // al
console.log(airline.slice(1, -1)); // AP air Portuga

const checkMiddleSeat = function(seat){
  // B and E are middle seats
  const letter = seat.slice(-1);
  letter === 'B' || letter === 'E' ? console.log('You got the middle seat.') : console.log('You did not get the middle seat!');
};

checkMiddleSeat('11B'); // You got the middle seat.
checkMiddleSeat('23C'); // You did not get the middle seat!
checkMiddleSeat('3E'); // You got the middle seat. 

console.log(new String('jonas')); // String {"jonas"}
console.log(typeof new String('jonas')); // object

console.log(typeof new String('jonas').slice(1)); // string



// Working with Strings part 2
console.log(airline.toLowerCase()); // tap air portugal
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // Jonas

const correctPassengerName = function(passengerName){
  const lowerCaseName = passengerName.toLowerCase();
const correctName = lowerCaseName[0].toUpperCase() + lowerCaseName.slice(1);
console.log(correctName);
return correctName;
};

correctPassengerName('LokI'); // Loki
correctPassengerName('reGINa'); // Regina

// Comparing email
const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail); // hello@jonas.io
console.log(normalizedEmail === email); // true

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS); // 288.97$

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate')); // All passengers come to boarding gate 23. Boarding door 23!
// console.log(announcement.replaceAll('door', 'gate')); // All passengers come to boarding gate 23. Boarding gate 23!
console.log(announcement.replace(/door/g, 'gate')); // All passengers come to boarding gate 23. Boarding gate 23!

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); // true
console.log(plane.includes('Boeing')); // false
console.log(plane.startsWith('Air')); // true

if(plane.startsWith('Air') && plane.endsWith('neo')){
  console.log('Part of the NEW airbus family.');
};

// Practice exercise
const checkBaggage = function(items){
  const baggage = items.toLowerCase();
  if(baggage.includes('knife') || baggage.includes('gun')){
    console.log('You are not permitted to board the plane.');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some food, and a pocket Knife.'); // You are not permitted to board the plane.
checkBaggage('Socks and Camera.'); // Welcome aboard!
checkBaggage('Got some snacks and a gun for protection.'); // You are not permitted to board the plane.

console.log('a+very+nice+string'.split('+')); // ["a", "very", "nice", "string"]
console.log('Jonas Schmedtmann'.split(' ')); // ["Jonas", "Schmedtmann"]

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
console.log(firstName, lastName); // Jonas Schmedtmann

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); // Mr. Jonas SCHMEDTMANN

const capitalizeName = function(name){
  const names = name.split(' ');
  const namesUpper = [];
  for(const n of names){
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  };
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('loki anthony');

// Padding
const message = 'Go to gate 23';
console.log(message.padStart(20, '+').padEnd(30, '+')); // +++++++Go to gate 23++++++++++
console.log('Jonas'.padStart(20, '+').padEnd(30, '+')); // +++++++++++++++Jonas++++++++++

const maskCreditCard = function(number){
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836)); // ****7836
console.log(maskCreditCard(43378743025)); // *******3025
console.log(maskCreditCard('20561935840276')); // **********0276

// Repeat
const message2 = 'Due to bad weather, all departures are delayed... ';
console.log(message2.repeat(5)); 

const planesInLine = function(n){
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);
*/

// Coding Challenge #1
/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
*/


/*
// 1
const [players1, players2] = game.players;
console.log(players1, players2);

// 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5
const {team1, x: draw, team2} = game.odds;
console.log(team1, draw, team2);

// 6 
const printGoals = function(...playerNames){
  console.log(playerNames);
  console.log(`${playerNames.length} number of goals were scored!`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7
team1 > team2 && console.log('Team 2 is projected to win.');
team1 < team2 && console.log('Team 1 is projected to win');
*/

// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
{
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
      
      GOOD LUCK 😀
      
      const game = {
        team1: 'Bayern Munich',
        team2: 'Borrussia Dortmund',
        players: [
          [
            'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
for(const [i, el] of game.scored.entries()){
  console.log(`Goal ${i + 1}: ${el}`);
};

// 2
const odds = Object.values(game.odds);
let average = 0;
for(const odd of odds){
  average += odd;
};
average /= odds.length;
console.log(`The average of the odds is ${average}`);

// 3
for(const [team, odd] of Object.entries(game.odds)){
  let teamStr = team === 'x' ? 'draw: ' : `victory ${game[team]}: `;
  let oddStr = `Odd of ` + teamStr + odd;
  console.log(oddStr);
};

// Bonus
const scorers = {};
for(const scorer of game.scored){
  scorers[scorer] ? scorers[scorer]++ : (scorers[scorer] = 1);
};
console.log(scorers);
*/


// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2
gameEvents.delete(64);
console.log(gameEvents);

// 3
let average = 90/gameEvents.size;
console.log(`An event happened, on average, every ${average} minutes.`);

// 4
for(const [min, value] of gameEvents){
  const half = min <= 45 ? 'FIRST HALF' : 'SECOND HALF';
  console.log(`[${half}] ${min}: ${value}`);
};
*/


// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function(){
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  
  for(const [i, row] of rows.entries()){
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  };
});
