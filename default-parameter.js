// Default Parameter:

// function sum(num1 = 0, num2 = 0) {
//     const total = num1 + num2;
//     console.log(num1, num2, total);
// }
// sum(10, 20, 255, 528, 39, 32)
// sum(12)  //NaN
// sum(10, 20)  //NaN


// function multiply(a = 1, b = 1) {
//     const total = a * b;
//     console.log(total);;

// }
// multiply(10)


function fullName(firstName, LastName = '') {
    const name = firstName + ' ' + LastName;
    console.log(name);
}
fullName('Heroamal');

/**
 * some thumb rule of default value . may be useful
 * add, substrack -----> 0
 * 
 * multiply -----> 1
 * 
 * string -----> ''
 * 
 * array ----> []
 * 
 * object ----> {}
 */