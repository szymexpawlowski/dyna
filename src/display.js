define(['scene', 'exception/contextNotFoundException'], function(Scene, contextNotFoundException) {

	var Display = function(contexts) {
		this.contexts = contexts;
	};

	Display.prototype = {

		createScene: function(contextId) {

			var ctx = this.getContext(contextId);
			ctx.clearRect(0, 0, 500, 500);

			return new Scene(ctx);
		},
		getContext: function(contextId) {
			if (this.contexts[contextId] === undefined) {
				throw new ContextNotFoundException('Please create context ' + contextId + ' first!');
			}

			return this.contexts[contextId];
		}
	};

	return Display;
});
