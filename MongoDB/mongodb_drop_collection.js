var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbase = db.db("mydb");
    dbase.dropCollection("newCollection", function (err, delOK) {
        if (err) throw err;
        if (delOK) console.log("Collection deleted");
        db.close();
    });
});
