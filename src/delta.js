define(function() {

	var Delta = function(position, color) {
		this.position = position;
		this.color = color;
	};

	Delta.prototype = {
		getX: function() {
			return this.position.getX();
		},
		setX: function(x) {
			this.position.setX(x);
		},
		getY: function() {
			return this.position.getY();
		},
		setY: function(y) {
			this.position.setY(y);
		},
		// ONLY FOR NOW
		getColor: function() {
			return this.color;
		},
	};

	return Delta;
});