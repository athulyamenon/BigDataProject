var mongoose = require('mongoose');

// Category Schema
var CategorySchema = mongoose.Schema({
   
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String
    }
    
});
mongoose.connect('mongodb://localhost:27017/dog',  { useNewUrlParser: true });
mongoose.connection.once('open',function(){
    console.log('Connection has been made');
    //done();
}).on('error',function(error){
    console.log('Connection error',error);
});


var Category = module.exports = mongoose.model('Category', CategorySchema);

