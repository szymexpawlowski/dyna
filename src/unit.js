define(function() {

	var Unit = function(position, color) {
		this.position = position;
		this.color = color;
	};

	Unit.prototype = {
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

	return Unit;
});