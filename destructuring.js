// Destructuring 
// normal case
const product = { name: 'shirt', price: 500, quantity: 8 }

// const discount = product.price * 20 / 100;
// const yourPay =  product.price - discount;
// const vatAmount =  product.price * 10 / 100;
// const totalAmount = yourPay + vatAmount;

// 2nd case:
// const price = product.price

// const discount = price * 20 / 100;
// const yourPay = price - discount;
// const vatAmount = price * 10 / 100;
// const totalAmount = yourPay + vatAmount;


// Destructuring :
const { price, quantity, tax = 7 } = { name: 'shirt', price: 500, quantity: 8 }
// console.log(price, quantity, tax)

const device = { name: 'phone', brand: 'samsung', price1: 2500 }
const { price1, brand } = device;
console.log(price1, brand );
