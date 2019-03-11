import GameLogic from "./logic";
import PhysicsEngine from "./physics";
import InputHandler from "./input";
import Tank from "../objects/tank";
import Invader from "../objects/invader";
import UI from "../objects/ui";

export default class Game {
	constructor(gameWidth, gameHeight) {
		this.gameWidth = gameWidth;
		this.gameHeight = gameHeight;
	}

	start() {
		new InputHandler(this);
		this.gameLogic = new GameLogic(this);
		this.physicsEngine = new PhysicsEngine(this);
		this.ui = new UI(this);
		this.tank = new Tank(this);
		this.invader = new Invader(this);
		this.gameObjects = [this.tank, this.ui];
		this.invaders = [];
		this.bullets = [];
		this.invader.spawnInvaders(5, 25, "#990"); // (amount, vertical offset in pixels, color)
	}

	showCollidedObjects(collidedObjects) {
		console.log("collided Objects: " + collidedObjects);
	}

	showAllObjects() {
		console.log(this);
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

		this.gameLogic.checkGamestate();
	}
}
