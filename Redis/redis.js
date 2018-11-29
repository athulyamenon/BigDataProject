var redis=require('redis');
var client=redis.createClient();

client.on('connect', function() {
    console.log('Redis client connected');
});

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

//https://www.sitepoint.com/caching-a-mongodb-database-with-redis/
// module.exports.findDogByTitleCached = function (db, redis, title, callback) {
//     redis.get(title, function (err, reply) {
//         if (err) callback(null);
//         else if (reply) //Product exists in cache
//             callback(JSON.parse(reply));
//         else {
//             //Product doesn't exist in cache - we need to query the main database
//             db.canines.findOne({
//                 title: title
//             }, function (err, doc) {
//                 if (err || !doc) callback(null);
//                 else {//Product found in database, save to cache and return to client
//                     redis.set(title, JSON.stringify(doc), function () {
//                         callback(doc);
//                     });
//                 }
//             });
//         }
//     });
// };









/*
client.set('my test key', 'my test value', redis.print);
client.get('my test key', function (error, result) {
    if (error) {
        console.log(error);
        throw error;
    }
    console.log('GET result ->' + result);
});*/
