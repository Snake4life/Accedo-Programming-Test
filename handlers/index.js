exports.movies = require("./movies")

exports.indexHandler = function *(next) {
	this.body = "Welcome to the basic VOD"
}
