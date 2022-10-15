let person = {
    firstName : 'John',
    lastName : 'Doe',
    middlename : 'C.',
    currentage : 23
}

let{firstName,lastName,middlename='',currentage:age=18} = person;

console.log(middlename);
console.log(age);