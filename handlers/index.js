exports.movies = require("./movies")
exports.viewingSession = require("./viewingsession")

exports.indexHandler = function *(next) {
	this.body = "Welcome to the basic VOD"
}
