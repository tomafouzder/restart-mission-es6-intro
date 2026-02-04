//array--> for of
const number = [1, 2, 3, 4, 5, 6];
for (const num of number) {
    console.log(num);

}

// object ---> for in
const employee = {
    name: 'Raja Rani',
    designation: 'QA',
    salary: 25000,
    experience: 1,
    age: 27
}

// for in :
for (const key in employee) {
    const value = employee[key];
    console.log(key, ':', value)
}

// Object from array convart:
const keys = Object.keys(employee)
console.log(keys);
for(const key of keys){
    console.log('key : ', key)
}
