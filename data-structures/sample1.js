class Queue{
    constructor(){
        this.items =[];
    }
    enque(element){
        this.items.push(element);
    }
    front(){
        return this.items[0];
    }
    deque(){
        return this.items.shift();
    }
    display(){
        var data = " ";
        for(var i=0; i < this.items.length;i++){
            data = data + this.items[i] + " " ;
        }
        return data;
    }
}

var queue=new Queue();

queue.enque(10);
queue.enque(20);
queue.enque(30);
queue.enque(40);
queue.enque(50);
queue.enque(60);

console.log(queue.front());
console.log(queue.deque());
console.log("------------------")
console.log(queue.display());