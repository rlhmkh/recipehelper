var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/myapp';

MongoClient.connect(url, {useNewUrlParser: true}, function (err, db) {
    if (err) throw err;
    var dbase = db.db("aplwebdemo");
    dbase.collection("newCollection").find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
