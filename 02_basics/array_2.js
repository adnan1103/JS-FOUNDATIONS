const marvel_heros = ["thor", "ironMan", "spiderMan"];
const dc_heros = ["superman", "flash", "batman"];

//  marvel_heros.push(dc_heros); // Push add another array in the the existing array

// console.log(marvel_heros);  // output [ 'thor', 'ironMan', 'spiderMan', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][2]); // output batman

const all_Heros = marvel_heros.concat(dc_heros); // concat combine two arrays in the new array and does not overwrite existing arrays
console.log(all_Heros); //output [ 'thor', 'ironMan', 'spiderMan', 'superman', 'flash', 'batman' ]

///////////////////////////////////////////////////////////////////////////////////////////////

// Spread operator (whole arrays copy or combine multiple arrays in the single array object)
const all_new_Heros = [...marvel_heros, ...dc_heros];
console.log(all_new_Heros);

///////////////////////////////////////

// Rare case situation

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity); // array in-depth or sub-array shift into simple array
 console.log(real_another_array); //output [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]


console.log(Array.isArray('Hitesh')); // output false
console.log(Array.from('Hitesh')); //output [ 'H', 'i', 't', 'e', 's', 'h' ]
// inside the prenthesis cannot accept the object without identifier name
console.log(Array.from({name: "hitesh"})); // output []

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // output [ 100, 200, 300 ]


