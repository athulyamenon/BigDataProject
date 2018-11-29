var client=require('./connection');

client.cluster.health({},function(err,resp,next){
    console.log("client health",resp);
})