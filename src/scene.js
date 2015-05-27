define(['settings'], function(settings) {

	var Scene = function(context) {
		this.context = context;
		this.elements = [];
	};

	Scene.prototype = {

		draw: function() {

			this.elements.forEach(function(element) {
				this.context.fillStyle = element.getColor();
				this.context.fillRect(element.getX(), element.getY(), settings.fieldSize, settings.fieldSize);
			}, this);
		},
		addElement: function(element) {
			this.elements.push(element);
		},
		setElements: function(elements) {
			this.elements = elements;
		}
	};

	return Scene;
});
