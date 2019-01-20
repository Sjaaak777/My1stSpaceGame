import { detectCollision } from "../src/collisionDetection";

export default class Bullet {
	constructor(game) {
		this.gameWidth = game.gameWidth;
		this.gameHeight = game.gameHeight;
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
		if (this.position.y + this.height <= 64) {
			//console.log(this.markedForDeletion);
			//console.log("Loader " + this.bullets);
			this.markedForDeletion = true;
			//console.log(this.markedForDeletion);

			return;
		}

		if (detectCollision(this, this.invader)) {
			this.score.updateScore();
			this.speed = -this.speed;
			this.markedForDeletion = true;
			//this.invader.markedForDeletion = true;
			//	this.game.markInvader();
			//this.gameObjects.splice(this.invader, 1);
			//console.log("Magazijn " + this.bullets);
			//console.log(this.invader);
		}
	}
}
