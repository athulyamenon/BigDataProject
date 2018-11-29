var mongoose = require('mongoose'),
    mongoosastic=require('mongoosastic'),
    Schema = mongoose.Schema;
//var mocha=require('mocha');
//mongoose.Promise=global.Promise;
//(function(done){
    mongoose.connect('mongodb://localhost:27017/dog',  { useNewUrlParser: true });
    mongoose.connection.once('open',function(){
        console.log('Connection has been made');
        //done();
    }).on('error',function(error){
        console.log('Connection error',error);
    });

//});

// Create a Schema and a Model

var SuppliesSchema = new Schema({
    imagepath: String,
    Title: String,
    Price: String
});

SuppliesSchema.plugin(mongoosastic);

var Supplies = mongoose.model('Supplies', SuppliesSchema)
    , stream = Supplies.synchronize()
    , count = 0;

Supplies.createMapping(function(err, mapping){
    if(err){
        console.log('error creating mapping (you can safely ignore this)');
        console.log(err);
    }else{
        console.log('mapping created!');
        console.log(mapping);
    }
});

/*
var req;
var dogs = new canine({
    imagepath: req.body.imagepath,
    title: req.body.title,
    description: req.body.description,
    Price: req.body.Price
});
    dogs.on('es-indexed', function(err,res) {
    res.redirect("/");
});
*/


module.exports = Supplies;