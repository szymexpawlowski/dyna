define(['delta', 'positionHelper'], function(Delta, PositionHelper) {

	var Board = function(width, height) {

		var w, h;

		this.width = width;
		this.height = height;
		this.fields = [];
		this.deltas = [];
	};

	Board.prototype = {
		addField: function(field, position) {
			
			var delta;
			if (this.isPositionCorrect(position)) {
				this.addFieldAtPosition(field, position);
				delta = new Delta(position, field.getColor());
				this.deltas.push(delta);
			}
		},
		addFieldAtPosition: function(field, position) {
			var x = PositionHelper.convertToArrayIndex(position.getX()),
				y = PositionHelper.convertToArrayIndex(position.getY());

			if (this.fields[x] === undefined) {
				this.fields[x] = [];
			}
			this.fields[x][y] = field;	
		},		
		getDeltas: function() {
			return this.deltas;
		},
		clearDelta: function() {
			this.deltas = [];
		},
		isPositionCorrect: function(position) {
			return position.x >= 0 && 
				PositionHelper.convertToArrayIndex(position.getX()) < this.width &&
				position.y >= 0 && 
				PositionHelper.convertToArrayIndex(position.getY()) < this.height;
		},
		getWidth: function() {
			return this.width;
		},
		getHeight: function() {
			return this.height;
		}
	};

	return Board;
});