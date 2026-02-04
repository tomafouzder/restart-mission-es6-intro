// function declaration 
function add(num1, num2) {
    return num1 + num2;
}
// console.log(add(5, 10));


// function expression 
const addition = function (num1, num2) {
    return num1 + num2;
}

const result = addition(50, 10)
// console.log(result);


// arrow function 
const sum = (num1, num2) => num1 + num2;
const mult = (a, b) => a * b;
const isBig = (x, y) => x > y;


console.log(sum(10, 20));

const multResult = mult(15, 2);
console.log('multResult:', multResult);

// const isBigResult = isBig(28, 69) //false
const isBigResult = isBig(69, 28) //true
console.log(isBigResult);

//multi line arrow function
const doMath = (k, m) => {
    const makeDouble = k * 2;
    const add = k + m;
    const total = makeDouble + add;
    return total;
}
const finalResult = doMath(10, 5);
console.log('finalResult', finalResult);

