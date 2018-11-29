var mocha=require('mocha');
var assert=require('assert');

var Supplies= require('../models/supply');
var category=require('../models/category');

// Describe our tests
   /*describe('Saving products', function(){
    this.timeout(500);
    // Create tests
    it('Saves a record to the database', function(done){
        setTimeout(done, 300);*/
        var supplies = [new Supplies({
            imagepath: 'https://images-na.ssl-images-amazon.com/images/I/61GR74hciBL._SL1500_.jpg',
            Title:'Bowl',
            Price:14
        }),
            new Supplies({
                imagepath: 'https://smhttp-ssl-40927.nexcesscdn.net/media/catalog/product/cache/2/thumbnail/1600x1200/040ec09b1e35df139433887a97daa66f/b/l/blu_2.jpg',
                Price:25
            }),
            new Supplies({
                imagepath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwMbfWXTj6FNsZFmDeKljL6aChUUlAj4S9fClzl9Hme23vLLDM7Q',
                Price:14
            }),
            new Supplies({
                imagepath: '',
                Price:14
            }),
            new Supplies({
                imagepath: 'https://i5.walmartimages.com/asr/5137089c-1ffc-47a8-a7f3-530324a0b841_1.8f47ef5db208df1c66f0e88434e50b1a.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
                Price:14
            }),
            new Supplies({
                imagepath: 'http://sanjeetveen.me/wp-content/uploads/2018/06/extra-large-dog-harness-walmart.jpg',
                Price:14
            }),
            new Supplies({
                imagepath: 'https://i.pinimg.com/originals/63/56/8d/63568db12d4b94ee50ed68c3ac1135c3.jpg',
                Price:14
            }),
            new Supplies({
                imagepath: 'https://images-na.ssl-images-amazon.com/images/I/719vP-AIsAL._SL1500_.jpg',
                Price:14
            }),
            new Supplies({
                imagepath: 'https://i5.walmartimages.com/asr/5b7fe6c8-b5bc-4e2f-a6c0-9f32151baf43_1.5653a587fe37a565cccea715f5bf8d29.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
                Price:14
            }),
            new Supplies({
                imagepath: 'https://i.pinimg.com/originals/92/5d/7c/925d7cb17d3165ddc9da7e4b2db2f49c.jpg',
                Price:14
            }),
            new Supplies({
                imagepath: 'https://i5.walmartimages.com/asr/61ed075c-7ff7-4e7f-9bf2-2f7ddf97885f_1.a46c2440c58a13600083ab8e1760766c.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
                Price:14
            })
        ];

        // var categories= [new Category({
        //     title:'Dogfood Brands',
        //
        // })
        // ];
        for(var k=0;k<supplies.length;k++)
        {
            supplies[k].save().then(function() {
                    assert(!supplies.isNew);
                    //done();
                }
            )};







/*var Products=require('../models/product');

 describe('Saving Records',function(){
     this.timeout(500);
    it('Save Record to the database',function(done){
        setTimeout(done, 300);
        var dogfood =[new Products(
            {
                imagePath: 'https://ll-us-i5.wal.co/asr/7e164e0f-c954-4c54-b0b1-4452e095095a_1.5afd7033e2652476d14f7fdb292b5a88.jpeg-ec507657aaec903c7d27c8cefe8f3d3b10690f01-optim-450x450.jpg?odnBg=FFFFFF',
                title: 'Pedigree',
                description: 'Is a dog food',
                price: 14
            }),
            new Products(
                {
                    imagePath: 'https://images-na.ssl-images-amazon.com/images/I/91XGABFtSOL._SY679_.jpg',
                    title: 'Cake mix',
                    description: 'Is a dog food',
                    price: 18
                })
        ];
        for(var i=0;i< dogfood.length;i++){
            dogfood[i].save().then(function() {
                assert(!dogfood.isNew);
                done();
        });

         };

    });
  });
*/