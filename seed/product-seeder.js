var mocha=require('mocha');
var assert=require('assert');

var canine= require('../models/dogfood');

// Describe our tests
   /*describe('Saving products', function(){
    this.timeout(500);
    // Create tests
    it('Saves a record to the database', function(done){
        setTimeout(done, 300);*/
        var diets = [new canine({
            imagepath: 'https://ll-us-i5.wal.co/asr/7e164e0f-c954-4c54-b0b1-4452e095095a_1.5afd7033e2652476d14f7fdb292b5a88.jpeg-ec507657aaec903c7d27c8cefe8f3d3b10690f01-optim-450x450.jpg?odnBg=FFFFFF',
            title:'Pedigree',
            description:'Pedigree is a dog food',
            Price:14
        }),
            new canine({
                imagepath: 'https://img.chewy.com/is/image/catalog/93085_MAIN._AC_SL1500_V1517585140_.jpg',
                title:'Victor',
                description:'For your Loving Dogs',
                Price:15
            }),
            new canine({
                imagepath: 'http://shop.sunsetfeed.com/mm5/graphics/00000001/720238_01.jpg',
                title:'Victor Plus',
                description:'Dog Food',
                Price:38
            }),

            new canine({
                imagepath: 'https://images-na.ssl-images-amazon.com/images/I/71dfImi0EbL._SL1300_.jpg',
                title:'Milky Bone',
                description:'Dog snack',
                Price:40
            }),
            new canine({
                imagepath: 'https://img.chewy.com/is/image/catalog/101788_MAIN._AC_SL1500_V1523894614_.jpg',
                title:'Victor Premium',
                description:'Premium Quality Dog Food',
                Price:35
            }),
            new canine({
                imagepath: 'http://www.lonesilofarm.com/wp-content/uploads/2018/08/dog-food-brands-petsmart.jpg',
                title:'Drools',
                description:'Rich in Protein',
                Price:25
            }),
            new canine({
                imagepath: 'https://images-na.ssl-images-amazon.com/images/I/516TX9BDv-L._US500_.jpg',
                title:'Sensitive Stomach',
                description:'Lite Dog Food',
                Price:28
            }),
            new canine({
                imagepath: 'https://thehappypooch.com/wp-content/uploads/2016/04/Blue-Buffalo-1.jpg',
                title:'Wilderness',
                description:'Natural Evolutionary Diet',
                Price:45
            }),
            new canine({
                imagepath: 'https://pbs.twimg.com/profile_images/781190175137341440/8Apmj912_400x400.jpg',
                title:'Pup Peroni',
                description:'Original Beef Flavour',
                Price:10
            }),
            new canine({
                imagepath: 'https://www.alpo.com/media/17560/alpo_vs_bfbcnchpb_r_325x493.png',
                title:'Alpho Variety Snacks',
                description:'Dog Snacks',
                Price:30
            }),
            new canine({
                imagepath: 'https://images-na.ssl-images-amazon.com/images/I/91XGABFtSOL._SY679_.jpg',
                title:'Cake Mix',
                description:'Dog Cake',
                Price:50
            }),
            new canine({
                imagepath: 'https://images.samsclubresources.com/is/image/samsclub/0001901470090_A',
                title:'IAMS',
                description:'MINI CHUNKS',
                Price:40
            })

        ];
        for(var k=0;k<diets.length;k++)
        {
            diets[k].save().then(function() {
                    assert(!diets.isNew);
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