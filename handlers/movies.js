var fakeAPI = require("../api.json")

exports.getMovieList = function *(next) {
	this.body = fakeAPI.entries
}

exports.getViewedMovieList = function *(next) {
	this.body = {
		sessionId: this.viewingSession.sessionId,
		videosViewed: this.viewingSession.videosViewed
	}
}
