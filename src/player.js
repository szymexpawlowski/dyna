define(function() {
	var Player = function(name, unit, keys) {
		this.name = name;
		this.unit = unit;
		this.keys = keys;
	};

	Player.prototype = {
		getName: function() {
			return this.name;
		},
		getUnit: function() {
			return this.unit;
		},
		getKeyCodes: function() {

			if (this.keyCodes === undefined) {
				this.keyCodes = Object.keys(this.keys);
			}

			return this.keyCodes;
		}
	};

	return Player;
});