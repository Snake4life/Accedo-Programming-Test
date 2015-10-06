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

	// re-render all views like React
	for (i in models){
		var view = new views.CarouselSlideView({
			model: models[i],
			el: $container,
			first: i == 0
		})
		view.render()
	}

	$('.carousel').carousel({
		interval: 1000,
		keyboard: true
	})
})

viewingSession.on("change", function(model){
	var $container = $(".list-group")

	// var movieIds = model.get("videosViewed")
	var movieIds = ["10-things-i-hate-about-you"]
	var moviesViewed = movies.filter(function(model){
		return _.contains(movieIds, model.get("id"))
	})

	$container.empty()

	// re-render the list view
	for (i in moviesViewed){
		var view = new views.ListItemView({
			model: moviesViewed[i],
			el: $container
		})

		view.render()
	}
})

movies.reset(movieEntries)
viewingSession.set("videosViewed", videosViewed)
