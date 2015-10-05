exports.movies = require("./movies")
exports.movie = require("./movie")
exports.viewingSession = require("./viewingsession")

exports.indexHandler = function *(next) {
	yield this.render("player")
}
