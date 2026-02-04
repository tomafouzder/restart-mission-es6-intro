// Template String 
const poem = `amm pata jora jora
marbl chabuk chorbo ghora
ore bubu sore dara 
asche amar pagla ghora;`
// console.log(poem);



function sum(num1, num2) {
    const result = num1 + num2;
    // const output = 'sum of ' + num1 + ' and ' + num2 + ' is equal to ' + result;  // Old case

    const output = `sum of ${num1 * 5} and ${num2} is equal to ${result}`
    console.log(output);  // update case : backtick / template string 
}
sum(10, 20);

const price = 100;
const discountPrice = `Discounted price is after 20% discount is ${100 * (20 / 100)}`;
console.log(discountPrice)



