// 100 Tk 20% discount 
// 100*20/100 === 20 

const getTax = (amount, taxRate) => amount * taxRate / 100;
const add = (p, q) => p + q;


// single parameter
const getSquare = x => x * x;
const getHalf = num => num / 2;
const firstElement = nums => nums[1];


const result = getSquare(5);
console.log(result);
console.log(getHalf(30))
console.log(firstElement([98, 52, 75, 26]));


// annymous function
document.getElementById('').addEventListener('click', () => {
    // multiple line code declare in this function body
})

document.getElementById('btn-click').addEventListener('click', event => {
    // multiple line code declare in this function body
})
