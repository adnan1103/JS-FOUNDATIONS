// const score = 600
// console.log(score)

// Now creaate an object which specifically give number

// const balance = new Number(100);
// console.log(balance)

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));
// console.log(balance.toFixed(1));

// const otherNumber = 23.8966;
// console.log(otherNumber.toPrecision(2));

//############################################
// const otherNumber2 = 123.5443;
// console.log(otherNumber2.toPrecision(3))

//******************************************** */
// const otherNumber3 = 11234.78453;
// console.log(otherNumber3.toPrecision(5));
// console.log(otherNumber3.toPrecision(6))

// const hunderds = 100000000;
// console.log(hunderds.toLocaleString());
// console.log(hunderds.toLocaleString('en-IN'));
// console.log(hunderds.toLocaleString('pak-en'));

///////////////// Math functions /////////////////////

// console.log(Math)
// console.log(Math.abs(-4)); // Minus values convert into positive
// console.log(Math.round(6.63))
// console.log(Math.ceil(5.43)) // get lower values even after decimal
// console.log(Math.floor(4.73)) // get upper values even after decimal
// console.log(Math.max(4, 5, 6, 7, 8,10))
// console.log(Math.min(4, 5, 6, 7, 8,10))

console.log(Math.random()); // give value in between 0 and 1
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 20;
const max = 10;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
