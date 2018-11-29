var client=require('./connection');

client.indices.create({
    index:'dogfood'
},function(err,resp,next){
   if(err){
       console.log(err);
   }
   else{
       console.log("create",resp);
   }
});