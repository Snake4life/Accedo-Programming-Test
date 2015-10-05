var ViewingSession = require("mongoose").model("ViewingSession")

exports.load = function *(movieId, next){
	this.movieId = movieId
	yield next
}

exports.addViewHistory = function *(next){
	yield ViewingSession.update({sessionId: this.viewingSession.sessionId}, {
		$addToSet: {
			videosViewed: this.movieId
		}
	}).exec()

	this.body = "haha"
}
