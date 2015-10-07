var models = require("./models")
var collections = require("./collections")
var views = require("./views")

var movies = new collections.Movies()
var viewingSession = new models.ViewingSession()

var movieCarouselView = new views.CarouselView({collection: movies, el: $(".carousel-inner")})
var viewedMovieListView = new views.ListView({model: viewingSession, el: $(".list-group")})

viewingSession.on("change", function(){
	var moviesViewed = movies.models.filter(function(entry){
		return _.contains(viewingSession.get("videosViewed"), entry.id)
	})

	viewedMovieListView.render(moviesViewed)
})

// initialize
movies.reset(movieEntries)
viewingSession.set("videosViewed", viewedMovieEntries)
