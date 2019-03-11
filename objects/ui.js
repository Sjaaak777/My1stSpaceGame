export default class UI {
	constructor(game) {
		this.game = game;
		this.score = 0;
		this.bulletCount = 0;
		this.invadersCount = 0;
		this.position = {
			x: 5,
			y: 20
		};
	}

	updateScore() {
		this.score += 1;
		if (this.score === 3) {
			this.game.invader.spawnInvaders(3, 55, "#940");
			this.game.tank.changeColor("#700");
		}
		if (this.score === 5) {
			this.game.invader.spawnInvaders(4, 85, "#900");
			this.game.tank.upgradeSpeed();
			this.game.tank.changeColor("#770");
		}
		if (this.score === 7) {
			this.game.invader.spawnInvaders(5, 115, "#099");
			this.game.tank.upgradeFirepower();
			this.game.tank.changeColor("#777");
		}
		if (this.score === 10) {
			this.game.invader.spawnInvaders(3, 55, "#940");
			this.game.invader.spawnInvaders(4, 85, "#900");
			this.game.invader.spawnInvaders(5, 115, "#099");
			this.game.tank.changeColor("#FFF");
		}
	}
	updateBulletCount() {
		this.bulletCount += 1;
	}
	updateInvaders(counter) {
		this.invadersCount += counter;
	}

	draw(ctx) {
		ctx.font = "17pt arial";
		ctx.fillStyle = "white";
		ctx.textAlign = "left";
		ctx.fillText("Score: " + this.score, 0, this.position.y);
		ctx.textAlign = "center";
		ctx.fillText(
			"Bullets Fired: " + this.bulletCount,
			this.game.gameWidth / 2,
			this.position.y
		);
		ctx.textAlign = "right";
		ctx.fillText(
			"Invaders: " + this.invadersCount,
			this.game.gameWidth,
			this.position.y
		);
	}

	update(deltaTime) {
		if (!deltaTime) return;
	}
}
