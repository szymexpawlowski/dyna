requirejs.config({
    	baseUrl: 'src',
      shim: {
		'underscore': {
		    exports: '_'
		}
    	},
    	paths: {
    		underscore: '../bower_components/underscore/underscore'
    	}
});


requirejs([
	'underscore',
	'game',
	'player',
	'boardBuilder',
	'unit',
	'display',
	'position',
	'command/moveDown',
	'command/moveUp',
	'command/moveLeft',
	'command/moveRight',
	'field/empty',
	'field/wall'
	], function(
		_,
		Game,
		Player,
		BoardBuilder,
		Unit,
		Display,
		Position,
		MoveDown,
		MoveUp,
		MoveLeft,
		MoveRight,
		Empty,
		Wall
	) {

	var playerCanvas = document.getElementById('playerCanvas');
	var playerCtx = playerCanvas.getContext('2d');
	var boardCanvas = document.getElementById('boardCanvas');
	var boardCtx = boardCanvas.getContext('2d');
	var display = new Display({'player': playerCtx, 'board': boardCtx});

	var p1 = new Position(10, 50);
	var u1 = new Unit(p1, 'black');

	var p2 = new Position(400, 50);
	var u2 = new Unit(p2, 'red');

	var keys = {
		69: MoveUp,
		68: MoveDown,
		70: MoveRight,
		83: MoveLeft
	};

	var player1 = new Player('szymon', u1, keys);

 	keys = {
		73: MoveUp,
		75: MoveDown,
		76: MoveRight,
		74: MoveLeft
	};

	var player2 = new Player('kasia', u2, keys);

	var players = [player1, player2];

	var game = new Game(players);
	game.initListeners();
	var scene;


	boardBuilder = new BoardBuilder();
	board = boardBuilder.build(13, 11);
	// board.addFiled(new Wall('grey'), new Position(32, 32));
	// board.addFiled(new Empty('green'), new Position(0, 0));
	// board.addFiled(new Empty('green'), new Position(0, 32));
	// board.addFiled(new Empty('green'), new Position(32, 0));
	scene = display.createScene('board');
	scene.setElements(board.getDeltas());
	scene.draw();


	// var loop = function() {

	// 	game.handleInput();

	// 	scene = display.createScene('player');
	// 	scene.addElement(player1.getUnit());
	// 	scene.addElement(player2.getUnit());
	// 	scene.draw();

	// 	console.log(1);
	// };

	// window.setInterval(loop, 250);

});