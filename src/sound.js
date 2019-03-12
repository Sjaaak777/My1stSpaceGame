export default class Sound {
	constructor(game) {
		this.game = game;
	}

	playBoom() {
		let Boom = new Audio("../sounds/boom.ogg");
		Boom.play();
	}

	playLaser() {
		let Laser = new Audio("../sounds/laser.ogg");
		Laser.play();
	}
}
