function LinearSearch(arr,target){
    for ( let i in arr){
        if( arr[i] === target)
        return i;
    }
    return-1;
}

console.log(LinearSearch([10,20,30,40,50],10));//0
console.log(LinearSearch([10,20,30,40,50],50));//4
console.log(LinearSearch([10,20,30,40,50],45));//-1