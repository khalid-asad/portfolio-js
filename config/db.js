const secrets = require('./secrets');

module.exports = {
    name: "portfolio",
    url: "mongodb+srv://" + secrets.dbUsername + ":" + secrets.dbPassword + "@cluster0.we3ra.mongodb.net/portfolio?retryWrites=true&w=majority"
}