var Router = require("koa-router")
var handlers = require("../handlers")

var public = exports.public = new Router()
var api = exports.api = new Router()

public
	.get("/", handlers.indexHandler)

api
	.get("/api/v1/movies", handlers.movies.getMovieList)
