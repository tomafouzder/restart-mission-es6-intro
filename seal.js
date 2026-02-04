// Seal ---> just Modify hobe 

const employee = {
    name: 'Raja Rani',
    designation: 'QA',
    salary: 25000,
    experience: 1,
    age: 27
}
Object.seal(employee);  
// delete employee.experience;  //delete hobe na 
// delete employee.age;
employee.salary = employee.salary + 5000; // modify hobe
employee.location = 'Dhaka'  //add hobe na
console.log(employee);
