define(function() {

	var Position = function(x, y) {
		this.x = x;
		this.y = y;
	}

	Position.prototype = {
		getX: function() {
			return this.x;
		},
		setX: function(x) {
			this.x = x;
		},
		getY: function () {
			return this.y;
		},
		setY: function(y) {
			this.y = y;
		},
	}

	return Position;
});