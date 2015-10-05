var ViewingSession = require("mongoose").model("ViewingSession")
var uuid = require("node-uuid")

module.exports = function *(next) {
	var sessionId = this.cookies.get("sessionid")

	var viewingSession = this.viewingSession = yield ViewingSession.findOne({
		sessionId: sessionId
	}).exec()

	if (!sessionId || !viewingSession) {
		sessionId = uuid.v4()
		var viewingSession = new ViewingSession({sessionId: sessionId})
		this.viewingSession = yield viewingSession.save()
		this.cookies.set("sessionid", sessionId)
	}

	yield next
}
