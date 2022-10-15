let person = {
    firstName: 'John',
    lastName : 'Doe'
};
//prior to ES6
let fname = person.firstName;
let lname = person.lastName;

console.log(fname + " " + lname);

//ES6
let{ firstName: fName, lastName: lName} = person;
console.log(fName + " " + lName);

let{firstName,lastName} = person;
console.log(firstName + " " + lastName);