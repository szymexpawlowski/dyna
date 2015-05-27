define(function() {

	var Empty = function(color) {
		this.color = color;
	};

	Empty.prototype = {
		// ONLY FOR NOW
		getColor: function() {
			return this.color;
		},
	};

	return Empty;
});