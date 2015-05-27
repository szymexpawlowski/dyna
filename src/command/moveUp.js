define(['settings'], function(settings) {
	return {
		execute: function(unit) {
			unit.setY(unit.getY() - settings.step);
		}
	};
});