import { detectCollision } from "../src/collisionDetection";

export default class Bullet {
	constructor(game, speed) {
		this.game = game;
		this.name = "Bullet";
		this.width = 7;
		this.height = 10;
		this.color = "#fff";
		this.speed = speed;
		this.position = {
			x: game.tank.position.x + game.tank.width / 2 - this.width / 2,
			y: game.tank.position.y - 20
		};
		this.markedForDeletion = false;
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

		if (detectCollision(this, this.game.invaders)) {
		}

		if (
			this.position.y <= this.game.gameHeight - this.game.gameHeight ||
			this.position.y >= this.game.gameHeight
		) {
			this.markedForDeletion = true;
		}
	}
}
