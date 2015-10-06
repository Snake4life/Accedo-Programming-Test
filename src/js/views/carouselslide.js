module.exports = Backbone.View.extend({
	initialize: function(options){
		this.options = options
		this.isFirst = options.first
	},
	template: function(src, caption){
		var container = $("<div>").addClass("item").addClass(this.isFirst? "active": "")
		var image = $("<img>").attr("src", src)
		var caption = $("<div>").addClass("carousel-caption").html(caption)

		return container
			.append(image)
			.append(caption)
	},
	render: function(){
		var src = this.model.get("images")[0].url
		var caption = this.model.get("title")
		this.$el.append(this.template(src, caption))

		return this
	}
})
