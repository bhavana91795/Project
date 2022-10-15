function createUser(name,age){
    return {
        name : name,
        age : age
    };
}

var obj = createUser("John",23)
console.log(obj.name + " " + obj.age);
