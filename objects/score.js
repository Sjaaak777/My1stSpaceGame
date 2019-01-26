export default class Score {
	constructor(game) {
		this.gameWidth = game.gameWidth;
		this.gameHeight = game.gameHeight;
		this.score = 0;
		this.bulletCount = 0;
		this.accuracy = "00.00";
		this.position = {
			x: 5,
			y: 20
		};
	}

	updateScore() {
		this.score += 1;
	}

	updateBulletCount() {
		this.bulletCount += 1;
	}

	updateAccuracy(object) {
		this.accuracy = ((this.score / this.bulletCount) * 100).toFixed(2);
	}

	draw(ctx) {
		ctx.font = "17pt arial";
		ctx.fillStyle = "white";
		ctx.textAlign = "left";
		ctx.fillText("Score: " + this.score, 0, this.position.y);
		ctx.textAlign = "center";
		ctx.fillText(
			"Bullets Fired: " + this.bulletCount,
			this.gameWidth / 2,
			this.position.y
		);
		ctx.textAlign = "right";
		ctx.fillText("S/A: " + this.accuracy, this.gameWidth, this.position.y);
	}

	update(deltaTime) {
		if (!deltaTime) return;
	}
}
