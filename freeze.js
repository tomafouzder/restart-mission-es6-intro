const employee = {
    name: 'Raja Rani',
    designation: 'QA',
    salary: 25000,
    experience: 1,
    age: 27
}
Object.freeze(employee);  //freeze korela r change hobe na
delete employee.experience;
delete employee.age;
employee.salary = employee.salary + 5000;
employee.location = 'Dhaka'  //add
console.log(employee);
