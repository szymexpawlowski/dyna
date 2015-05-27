define(function() {

	var ContextNotFoundException = function(message) {
		this.message = message;
		this.name = "ContextNotFoundException";
	}

	return ContextNotFoundException;
});
