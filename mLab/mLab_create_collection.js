var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/myapp';

MongoClient.connect(url, {useNewUrlParser: true}, function (err, db) {
    if (err) throw err;
    var dbase = db.db("aplwebdemo");
    dbase.createCollection("newCollection", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});
