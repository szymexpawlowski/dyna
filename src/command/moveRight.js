define(['settings'], function(settings) {
	return {
		execute: function(unit) {
			unit.setX(unit.getX() + settings.step);
		}
	};
});