// module.exports.saveDogDetails = function (db, imagepath, title, description, Price, callback) {
//     db.collection('title').save({
//         imagepath: imagepath,
//         title: title,
//         description: description,
//         Price: Price,
//     }, callback);
// };
//
//
// module.exports.findDogByTitle = function (db, title, callback) {
//     db.collection('title').findOne({
//         title: title
//     }, function (err, doc) {
//         if (err || !doc) callback(null);
//         else callback(doc.title);
//     });
// };