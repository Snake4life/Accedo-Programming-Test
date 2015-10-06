var models = require("./models")
var collections = require("./collections")

var movies = new collections.Movies(movieEntries)
var viewingSession = new models.ViewingSession()

console.log(movies)
