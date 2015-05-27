define([
	'underscore',
	'board', 
	'settings', 
	'position',
	'field/empty',
	'field/wall',
	'field/rock',
	'exception/invalidDimensionException'
	], function(
		_,
		Board, 
		Settings, 
		Position,
		Empty,
		Wall, 
		Rock,
		InvalidDimensionException
	) {

	var BoardBuilder = function() {
		this.board = null;
		this.numberOfRocks = 75;
		this.numberOfBombBonuses = 5;
		this.numberOfFireBonuses = 5;
	};

	BoardBuilder.prototype = {
		build: function(width, height) {
			
			if (!this.areDimensionsValid(width, height)) {
				throw new InvalidDimensionException('Width and height have to be odd numbers!');
			}

			this.board = new Board(width, height);
			this.buildEmptyBoard();
			this.addRocks();


			return this.board;
		},
		buildEmptyBoard: function() {

			var x, y,
				width = this.board.getWidth(), 
				height = this.board.getHeight();

			for (x = 0; x < width; x++) {
				for (y = 0; y < height; y++) {
					this.addBaseField(x, y);
				}
			}			
		},
		addRocks: function() {

			var index,
				coordinates,
				position,
				rocks = this.getPossibleRockPositions();

			while (this.numberOfRocks > 0) {

				index = Math.floor(Math.random() * rocks.length);
				coordinates = rocks.splice(index, 1)[0];
				position = new Position(coordinates.getX() * Settings.fieldSize, coordinates.getY() * Settings.fieldSize);
				this.board.addField(new Rock('blue'), position);
				this.dectementNumberOfRocks();
			}
		},
		getPossibleRockPositions: function() {

			var	width = this.board.getWidth(), 
				height = this.board.getHeight(),
				inavailablePositions = [
					new Position(0, 0),
					new Position(1, 0),
					new Position(0, 1),
					new Position(width - 2, 0),
					new Position(width - 1, 0),
					new Position(width - 1, 1),
					new Position(0, height - 2),
					new Position(0, height - 1),
					new Position(1, height - 1),
					new Position(width - 2, height - 1),
					new Position(width - 1, height - 2),
					new Position(width - 1, height - 1)
				],
				getColumns = function() {

					var x,
						result = [];
					for (x = 0; x < width; x++) {
						result = result.concat(getColumn(x));
					}

					return result;
				},
				getColumn = function(x) {

					var y,
						position,
						result = [];
					for (y = 0; y < height; y++) {
						addPosition(x, y, result);
					}

					return result;
				},
				addPosition = function(x, y, result) {

					var position = new Position(x, y);
					if (!!_.findWhere(inavailablePositions, position)) {
						return;
					}

					if (x % 2 === 0 || y % 2 === 0) {
						result.push(position);
					}
				};

			return getColumns();
		},
		dectementNumberOfRocks: function(value) {
			value = value || 1;
			this.numberOfRocks -= value;
		},
		addBaseField: function(x, y) {

			var position = new Position(x * Settings.fieldSize, y * Settings.fieldSize);

			if (x % 2 === 1 && y % 2 === 1) {
				this.board.addField(new Wall('grey'), position);
			} else {
				this.board.addField(new Empty('green'), position);
			}
		},
		isDimensionValid: function(dimension) {
			return dimension % 2 === 1;
		},
		areDimensionsValid: function(width, height) {
			return this.isDimensionValid(width) && this.isDimensionValid(height);
		},		
		setNumberOfRocks: function(value) {
			this.numberOfRocks = value;
		},
		setNumberOfBombBonuses: function(value) {
			this.numberOfBombBonuses = value;
		},
		setNumberOfFireBonuses: function(value) {
			this.numberOfFireBonuses = value;
		}
	};

	return BoardBuilder;
});