//  Entries:
const employee = {
    name: 'Raja Rani',
    designation: 'QA',
    salary: 2500,
    experience: 1
}

const keys = Object.keys(employee);
const values = Object.values(employee);
const entries = Object.entries(employee);

console.log(keys);  // output: [ 'name', 'designation', 'salary', 'experience' ]
console.log(values);   // output: [ 'Raja Rani', 'QA', 2500, 1 ]

console.log(entries);
// output: [
//     ['name', 'Raja Rani'],
//     ['designation', 'QA'],
//     ['salary', 2500],
//     ['experience', 1]
//  ]