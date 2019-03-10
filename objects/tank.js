import Bullet from "../objects/bullet";

let firePower = 50;
let speed = 5;

export default class Tank {
	constructor(game) {
		this.game = game;
		this.name = "Tank";
		this.gameWidth = game.gameWidth;
		this.width = 70;
		this.height = 20;
		this.color = "#090";
		this.firePower = firePower;
		this.speed = 0;
		this.position = {
			x: game.gameWidth / 2 - this.width / 2,
			y: game.gameHeight - this.height - 1
		};
	}

	changeColor() {
		this.color = "#900";
	}

	moveLeft() {
		this.speed = -speed;
	}

	upgradeTank() {
		this.changeColor();
		this.upgradeFirepower();
		this.upgradeSpeed();
	}

	upgradeSpeed() {
		speed = 10;
	}

	upgradeFirepower() {
		firePower += 50;
	}

	moveRight() {
		this.speed = +speed;
	}

	stop() {
		this.speed = 0;
	}

	shoot() {
		this.game.bullets.push(new Bullet(this.game, firePower));
		this.game.score.updateBulletCount();
	}

	draw(ctx) {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
		ctx.fillRect(
			this.position.x + 20,
			this.position.y - 10,
			this.width - 40,
			this.height
		);
		ctx.fillRect(
			this.position.x + 30,
			this.position.y - 20,
			this.width - 60,
			this.height
		);
	}

	update(deltaTime) {
		if (!deltaTime) {
			return;
		}

		this.position.x += this.speed;

		if (this.position.x <= 0) {
			this.position.x = 0;
		}

		if (this.position.x + this.width >= this.gameWidth) {
			this.position.x = this.gameWidth - this.width;
		}
	}
}
