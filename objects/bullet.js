import { detectCollision } from "../src/collisionDetection";
import Invader from "../objects/invader";

export default class Bullet {
	constructor(game) {
		this.gameWidth = game.gameWidth;
		this.gameHeight = game.gameHeight;
		this.gameInvaders = game.invaders;
		this.flag = false;
		this.width = 7;
		this.height = 10;
		this.color = "#fff";
		this.speed = 70;
		this.position = {
			x: game.tank.position.x + game.tank.width / 2 - this.width / 2,
			y: game.tank.position.y - 20
		};
		this.markedForDeletion = false;

		this.invader = game.invader;
		this.tank = game.tank;
		this.bullets = game.bullets;
		this.score = game.score;
		this.gameObjects = game.gameObjects;
	}

	draw(ctx) {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
	}

	update(deltaTime) {
		if (!deltaTime) {
			return;
		}

		this.position.y += this.speed / deltaTime;

		if (detectCollision(this, this.invader)) {
			this.score.updateScore();
			this.score.updateAccuracy();
			this.speed = -this.speed;
			this.markedForDeletion = true;
		}

		if (detectCollision(this, this.tank)) {
			this.score.updateAccuracy(this);
			this.markedForDeletion = true;
		}

		if (
			this.position.y <= this.gameHeight - this.gameHeight ||
			this.position.y >= this.gameHeight
		) {
			this.markedForDeletion = true;
			this.score.updateAccuracy();
		}
	}
}
