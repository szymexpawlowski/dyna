define(function() {

	var Wall = function(color) {
		this.color = color;
	};

	Wall.prototype = {
		// ONLY FOR NOW
		getColor: function() {
			return this.color;
		},
	};

	return Wall;
});