define(function() {

	var Game = function(players) {

		this.players = players;
		this.pressedKeys = {};
	};

	Game.prototype = {
		// getPlayers: function() {
		// 	return this.players;
		// },
		// getPressedKeys: function() {
		// 	return this.pressedKeys;
		// },
		initListeners: function() {

			var that = this;
			window.addEventListener('keydown', function(e) {
				that.pressedKeys[e.keyCode] = true;
			});

			window.addEventListener('keyup', function(e) {
				delete that.pressedKeys[e.keyCode];
			});
		},
		handleInput: function() {

			var player;

			for (var pressedKey in this.pressedKeys) {
				for (var i = 0; i < this.players.length; i++) {

					player = this.players[i];
					if (_.contains(player.getKeyCodes(), pressedKey)) {
						player.keys[pressedKey].execute(player.getUnit());
					}
				}
			}
		}
	}

	return Game;
});