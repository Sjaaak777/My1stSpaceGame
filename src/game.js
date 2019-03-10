import InputHandler from "./input";
import Tank from "../objects/tank";
import Invader from "../objects/invader";
import Score from "../objects/score";

export default class Game {
	constructor(gameWidth, gameHeight) {
		this.gameWidth = gameWidth;
		this.gameHeight = gameHeight;
	}

	start() {
		new InputHandler(this);
		this.score = new Score(this);
		this.tank = new Tank(this);
		this.gameObjects = [this.tank, this.score];

		this.invaders = [];
		this.bullets = [];

		this.spawnInvaders(5);
	}

	showCollidedObjects(collidedObjects) {
		console.log("collided Objects: " + collidedObjects);
	}

	showObjects() {
		console.log(this);
	}

	spawnInvaders(amountOfInvaders) {
		let i;

		for (i = 1; i <= amountOfInvaders; i++) {
			this.invaders.push(new Invader(this));
			this.score.updateInvaders(1);
		}
	}

	draw(ctx) {
		[...this.gameObjects, ...this.bullets, ...this.invaders].forEach(
			object => object.draw(ctx)
		);
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

	update(deltaTime) {
		[...this.gameObjects, ...this.bullets, ...this.invaders].forEach(
			object => object.update(deltaTime)
		);
		this.gameObjects = this.gameObjects.filter(
			object => !object.markedForDeletion
		);
		this.bullets = this.bullets.filter(bullet => !bullet.markedForDeletion);
		this.invaders = this.invaders.filter(
			invader => !invader.markedForDeletion
		);
	}
}
