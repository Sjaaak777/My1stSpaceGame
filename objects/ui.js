export default class UI {
	constructor(game) {
		this.game = game;
		this.flag = true;
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
		if (this.score === 5) {
			this.game.invader.spawnInvaders(5, 55, "#940");
			this.game.tank.changeColor("#700");
			this.game.sound.playPling();
		}
		if (this.score === 10) {
			this.game.invader.spawnInvaders(5, 85, "#900");
			this.game.tank.upgradeSpeed();
			this.game.tank.changeColor("#770");
			this.game.sound.playPling();
		}
		if (this.score === 15) {
			this.game.invader.spawnInvaders(5, 115, "#099");
			this.game.tank.upgradeFirepower();
			this.game.tank.changeColor("#777");
			this.game.sound.playPling();
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

		if (this.game.ui.score === 5) {
			ctx.font = "27pt arial";
			ctx.fillStyle = "orange";
			ctx.textAlign = "center";
			ctx.fillText("Tank Color Upgrade! ", this.game.gameWidth / 2, 200);
		}

		if (this.game.ui.score === 10) {
			ctx.font = "27pt arial";
			ctx.fillStyle = "green";
			ctx.textAlign = "center";
			ctx.fillText("Tank Speed Upgrade! ", this.game.gameWidth / 2, 200);
		}

		if (this.game.ui.score === 15) {
			ctx.font = "27pt arial";
			ctx.fillStyle = "green";
			ctx.textAlign = "center";
			ctx.fillText("Tank FirePower Upgrade! ", this.game.gameWidth / 2, 200);
		}

		if (this.game.ui.score === 20) {
			ctx.font = "27pt arial";
			ctx.fillStyle = "yellow";
			ctx.textAlign = "center";
			ctx.fillText(
				"Your accuracy is: " +
					((this.score / this.bulletCount) * 100).toFixed(2) +
					" %",
				this.game.gameWidth / 2,
				this.game.gameHeight / 2
			);
			ctx.fillStyle = "White";
			ctx.fillText(
				"Press Enter to start again. ",
				this.game.gameWidth / 2,
				this.game.gameHeight / 2 + 50
			);
		}
	}

	update(deltaTime) {
		if (!deltaTime) return;
	}
}
