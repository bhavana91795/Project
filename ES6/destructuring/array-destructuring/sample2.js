function getStores(){
    return[70,80,90,100];
} 

let[x,y,...args] = getStores();
console.log(x);
console.log(y);
console.log(args);
