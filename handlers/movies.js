var fakeAPI = require("../api.json")

exports.getMovieList = function *(next) {
	this.body = fakeAPI
}
