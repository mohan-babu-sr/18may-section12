'use strict';

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3)); //cubic root

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2));

console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

// Rounding integers
console.log(Math.round(23.3)); //23
console.log(Math.round(23.9)); //24

console.log(Math.ceil(33.3)); //34
console.log(Math.ceil(33.9)); //34

console.log(Math.floor(23.3)); //23
console.log(Math.floor('23.9')); //23

console.log(Math.trunc(23.3)); //23

console.log(Math.trunc(-23.3)); //-23
console.log(Math.floor(-23.3)); //-24

// Rounding decimals 
//toFixed return string
console.log((2.7).toFixed(0)); //3
console.log((2.7).toFixed(3)); //2.700
console.log((2.345).toFixed(2)); //2.35
console.log(+(2.345).toFixed(2)); //2.35