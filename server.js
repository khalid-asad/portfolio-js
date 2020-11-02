const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const { MongoClient } = require('mongodb');

const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

// MongoClient.connect(db.url, (err, database) => {
//     if (err) return console.log(err);
//     require('./app/routes')(app, database);
//     app.listen(port, () => {
//         console.log("Initialized server on port: " + port);
//     });
// });

const client = new mongoClient(db.url, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    if (err) return console.log(err);
    const database = client.db(db.name)
    require('./app/routes')(app, database);
    app.listen(port, () => {
        console.log("Initialized server on port: " + port);
    });
});