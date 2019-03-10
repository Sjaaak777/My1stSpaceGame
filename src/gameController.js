export default class GameController {
	constructor(game) {
		this.score = game.score;
		this.gameObjects = game.gameObjects;
		this.gameWidth = game.gameWidth;
	}

	showGameWidth() {

	}

	update(deltaTime) {
		if (!deltaTime) {
			return;
		}


		//console.log(this.gameWidth);


	}









}
