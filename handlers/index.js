exports.movies = require("./movies")
exports.movie = require("./movie")
exports.viewingSession = require("./viewingsession")

exports.indexHandler = function *(next) {
	this.body = "Welcome to the basic VOD"
}
