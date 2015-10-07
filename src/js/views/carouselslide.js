var globalEvents = require("../global-events")

module.exports = Backbone.View.extend({
	className: "item",
	events: {
		"click img": function(){
			globalEvents.trigger("itemwatch", this.model.get("id"))
			this.$video[0].webkitRequestFullscreen()
			this.$video[0].play()
		}
	},
	initialize: function(options){
		this.options = options
	},
	render: function(){
		var src = this.model.get("images")[0].url
		var caption = this.model.get("title")

		var $image = $("<img>").attr("src", src)
		var $caption = $("<div>").addClass("carousel-caption").html(caption)

		this.$video = $("<video>").attr({
			src: this.model.get("contents")[0].url,
			preload: "none"
		})

		this.$el
			.append($image)
			.append($caption)
			.append(this.$video.hide())

		if(this.options.i == 0) {
			this.$el.addClass("active")
		}

		return this
	}
})
