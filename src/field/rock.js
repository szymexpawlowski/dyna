define(function() {

	var Rock = function(color) {
		this.color = color;
	};

	Rock.prototype = {
		// ONLY FOR NOW
		getColor: function() {
			return this.color;
		},
	};

	return Rock;
});