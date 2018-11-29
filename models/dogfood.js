var mongoose = require('mongoose'),
    mongoosastic=require('mongoosastic'),
    Schema = mongoose.Schema;
var mocha=require('mocha');

// var access = require('./access.js');

    mongoose.connect('mongodb://localhost:27017/dog',  { useNewUrlParser: true });
    mongoose.connection.once('open',function(){
        console.log('Connection has been made');
        //done();
    }).on('error',function(error){
        console.log('Connection error',error);
    });

//});

// Create a Schema and a Model

var DogfoodSchema = new Schema({
    imagepath: { type: String, es_indexed:true },
    title: { type: String, es_indexed:true },
    description: { type: String, es_indexed:true },
    Price: { type: String, es_indexed:true }
});

DogfoodSchema.plugin(mongoosastic);

var canine = mongoose.model('Canine', DogfoodSchema)
    , stream = canine.synchronize()
    , count = 0;

canine.createMapping(function(err, mapping){
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


module.exports = canine;