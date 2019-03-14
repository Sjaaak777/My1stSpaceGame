export default class Sound {
	playBoom() {
		let Boom = new Audio("../sounds/boom.ogg");
		Boom.play();
	}

	playLaser() {
		let Laser = new Audio("../sounds/laser.ogg");
		Laser.play();
	}

	playPling() {
		let Pling = new Audio("../sounds/pling.ogg");
		Pling.play();
	}
}
