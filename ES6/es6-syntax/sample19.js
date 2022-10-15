let server = {
    name:"Server",
    //restart: function(){
    //   console.log("The" + this.name + "is restarting.....");

    // }

    restart(){
        console.log("The" + this.name + "is restarting.....");

    },
    'starting up'(){ //concise method syntax
        console.log("The" + this.name + "is restarting.....");
    }


}
server.restart()
server['starting up']();
//syntax: obj+name['property name']():