var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, database) {

    app.get('/portfolio/:id', (req, res) => {
        const id = req.params.id
        const details = { '_id': new ObjectID(id) };
        database.collection('portfolio').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
                console.log('Found item with the Body: ');
                console.log(item);
            }
        });
    });

    app.post('/portfolio', (req, res) => {
        const item = { text: req.body.body, title: req.body.title };
        database.collection('portfolio').insertOne(item, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
                console.log('Insert item with the Body: ');
                console.log(req.body);
            }
        });
    });

    app.delete('/portfolio/:id', (req, res) => {
        const id = req.params.id
        const details = { '_id': new ObjectID(id) };
        database.collection('portfolio').remove(details, (err) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send('Item ' + id + ' deleted.');
                console.log('Deleted item with the ID: ' + id);
            }
        });
    });

    app.put('/portfolio/:id', (req, res) => {
        const id = req.params.id
        const details = { '_id': new ObjectID(id) };
        const item = { text: req.body.body, title: req.body.title };
        database.collection('portfolio').update(details, item, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
                console.log('Updated item with the Body: ');
                console.log(item);
            }
        });
    });
}