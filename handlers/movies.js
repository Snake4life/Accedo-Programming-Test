var fakeAPI = require("../api.json")

exports.getMovieList = function *(next) {
	this.body = fakeAPI
}

exports.getViewedMovieList = function *(next) {
	this.body = this.viewingSession.videosViewed
}
