module.exports = Backbone.View.extend({
	className: "item",
	events: {
		"click img": function(){
			console.log(this.model.get("title"))
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

		if(this.options.first) {
			this.$el.addClass("active")
		}

		return this
	}
})
