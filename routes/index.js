var express = require('express');
var router = express();
//var csrf=require('csurf');
//var passport=require('passport');
var canine= require('../models/dogfood');
//var csrfProtection=csrf();
//router.use(csrfProtection);
var client = require('../ElasticSearch/connection');
var Supplies=require("../models/supply");


const {promisify} = require('util');
var redis = require("redis"),
    redisClient = redis.createClient();
const getAsync = promisify(redisClient.get).bind(redisClient);

/* GET home page. */
router.get('/', function(req, res, next) {
  canine.find(function(err,docs){
    var productChunks=[];
    var chunkSize=3;
    for(var i=0;i<docs.length;i += chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
      res.render('shop/index', { title: 'Express',diets:productChunks});
  });
});

/* GET Supply page. */
router.get('/shop/supply', function(req, res, next) {
    Supplies.find(function(err,docs){
        var productChunks=[];
        var chunkSize=3;
        for(var i=0;i<docs.length;i += chunkSize){
            productChunks.push(docs.slice(i,i+chunkSize));
        }
        res.render('shop/supply', { title: 'Express',supplies:productChunks});
    });
});



/* GET Search page. */

router.get('/shop/search-result', function(req, res, next){
    // var query = req.body["search_query"];
    var query = req.query['q'];
    //console.log(query, "Hi");
    return getAsync(query).then(function (reply) {
        if (reply === '{}' || reply === null) {
            let body = {
                query: {
                    fuzzy: {"title": query}

                }
            }
            client.search({index: 'canines', body: body, type: 'canine'})
                .then(function (results) {
                    console.log("No hits in Redis!");
                    // //console.log(res);
                    var data = [];
                    //console.log(res, "HI");
                    //console.log(results.hits.hits,"xxxxxxxxxxxxxxxx");
                    results.hits.hits.forEach(function (hit) {
                        console.log("output of results");
                        console.log(results);
                        console.log(hit._source);
                        data.push(hit._source);
                        console.log(data);
                    });
                    res.render('shop/search-result', {
                        //query: req.query.q,
                        data: data
                        //output: results.hits.hits
                    });
                    //res.send(results.hits.hits);
                    redisClient.set(query, JSON.stringify(results.hits.hits));
                    console.log("Set in Redis!");
                })
                .catch(err => {
                    console.log(err);
                    res.send({error: err});
                });
        } else {
            console.log("Hit!");
            var data = [];
            JSON.parse(reply).forEach((o) => {
                data.push(o._source);
                console.log(data);
            });
            console.log(data);
            //res.send({data: reply, fromRedis: true});
            // var data=[];
            //     for(var i=0; var j=reply.length,i<j; i++) {
            //         data.push(reply._source.title);
            //     };
            //     return data;
            //     }
            res.render('shop/search-result', {
                //query: req.query.q,
                data: data
                //output: results.hits.hits

            });
        }
    }).catch(function(err) {
        console.log(err);
    });
});




/*router.post('/search', function(req, res, next) {
    res.redirect('/search?q=' + req.body.q);
});

router.post('/search', function(req, res, next){
    if (req.query.q) {
        canine.search({
            query_string: { query: req.query.q}
        }, function(err, results) {
            results:
                if (err) return next(err);
            var data = results.hits.hits.map(function(hit) {
                return hit;
            });
            res.render('shop/search-result', {
                query: req.query.q,
                data: data
            });
        });
    }
});*/


/* GET signup page. */
/*router.get('/user/signup',function(req,res,next){
    res.render('user/signup',{csrfToken:req.csrfToken()})
});
router.post('/user/signup',passport.authenticate('local.signup',{
  successRedirect:'./profile',
  failureRedirect:'./signup',
    successFlash:true,
    failureFlash:true
}));
router.post('/user/signup',
    passport.authenticate('local.signup', { successRedirect: './profile',
        failureRedirect: './signup' }));
router.get('/user/profile',function(req,res,next) {
    res.render('user/profile');
});*/
module.exports = router;
