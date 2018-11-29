var client=require('./connection');

client.index({
    index:'cart',
    id:'1',
    type:'petfood',
    body:{
        "Name":"Milky",
        "Price":"45"
    }
},function(err,resp,next){
    console.log(resp);
})