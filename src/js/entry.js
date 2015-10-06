var models = require("./models")
var collections = require("./collections")
var views = require("./views")

var movies = new collections.Movies()
var viewingSession = new models.ViewingSession()

movies.on("reset", function(){
	var $container = $(".carousel-inner")
	var models = movies.models

	// reset whole container
	$container.empty()

	for (i in models){
		var view = new views.CarouselSlideView({
			model: models[i],
			el: $container,
			first: i == 0
		})
		view.render()
	}

	$('.carousel').carousel({
		interval: 100000
	})
})

movies.reset(movieEntries)
