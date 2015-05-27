define(function() {

	var InvalidDimensionException = function(message) {
		this.message = message;
		this.name = "InvalidDimensionException";
	}

	return InvalidDimensionException;
});