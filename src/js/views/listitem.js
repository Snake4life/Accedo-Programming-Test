module.exports = Backbone.View.extend({
	template: function(title){
		return $("<li>").addClass("list-group-item").html(title)
	},
	render: function(){
		var title = this.model.get("title")
		this.$el.append(this.template(title))

		return this
	}
})
