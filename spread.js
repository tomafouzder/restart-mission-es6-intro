// Spread ===> ...

const numbers = [15, 8525, 38, 18, 289, 37]
// console.log(numbers);  //output [15, 8525, 38, 18, 289, 37]
// console.log(...numbers); //output 15, 8525, 38, 18, 289, 37

const max = Math.max(125, 25285, 39, 48, 6712, 94, 12);
const max2 = Math.max(numbers);  //output : NaN
const max3 = Math.max(...numbers);  //output : 8525
// console.log(max3); 

const first = [1, 2, 3, 4, 5]
const second = first;
second.push(6);
// console.log(first); //output :[1, 2, 3, 4, 5, 6]

const first2 = [1, 2, 3, 4, 5]
const second2 = [...first2]
const third2 = [...first2, 7, 9, 52]
// second2.push(6);
// console.log(first2);  //output :[1, 2, 3, 4, 5]
// console.log(second2);  //output :[1, 2, 3, 4, 5, 6]
// console.log(third2);  //output :[1, 2, 3,  4, 5, 7, 9, 52]


const ages = [12, 85, 68];
const prices = [258, 69, 27, 15];
const all = [...ages, 158, ...prices]
// console.log(all);


const person = { name: 'Hublu', age: 25 }
const employee = { designation: 'dev', ...person }
// console.log(employee); //output: { designation: 'dev', name: 'Hublu', age: 25 }

const total = (a, b, c) => a + b + c;
const result = total(12, 30, 42);
const digits = [18, 36, 75]

console.log(result);
console.log(total(...digits));




