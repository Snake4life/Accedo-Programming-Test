var globalEvents = require("../global-events")

module.exports = Backbone.View.extend({
	className: "item",
	events: {
		"click img": function(){
			globalEvents.trigger("itemwatch", this.model.get("id"))
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

		this.$el
			.append($image)
			.append($caption)

		if(this.options.i == 0) {
			this.$el.addClass("active")
		}

		return this
	}
})
