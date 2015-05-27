define(['settings'], function(settings) {
	
	return {
		convertToArrayIndex: function(value) {
			return Math.floor(value / settings.fieldSize);
		}		
	};
});