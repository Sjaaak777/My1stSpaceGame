import InputHandler from "./input";
import Tank from "../objects/tank";
import Invader from "../objects/invader";
import Bullet from "../objects/bullet";
import Score from "../objects/score";

export default class Game {
	constructor(gameWidth, gameHeight) {
		this.gameWidth = gameWidth;
		this.gameHeight = gameHeight;
	}

	start() {
		this.tank = new Tank(this);
		this.invader = new Invader(this);
		this.bullets = [];
		this.score = new Score(this);
		this.gameObjects = [this.invader, this.tank, this.score];
		this.bullet = new Bullet(this);

		console.log(this.gameObjects);
		new InputHandler(this);
	}

	update(deltaTime) {
		[...this.gameObjects, ...this.bullets].forEach(object => object.update(deltaTime));
		[...this.gameObjects, ...this.bullets].filter(object => !object.markedForDeletion);
	}

	showObjects() {
		console.log(this.gameObjects);
	}

	draw(ctx) {
		[...this.gameObjects, ...this.bullets].forEach(object => object.draw(ctx));
		let lines = 0;
		for (lines = 0; lines < this.gameWidth; lines++) {
			ctx.beginPath();
			ctx.moveTo(0, lines);
			ctx.lineTo(this.gameWidth, lines);
			ctx.stroke();
			lines++;
			lines++;
		}
	}
}
