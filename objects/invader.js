export default class Invader {
	constructor(game) {
		this.game = game;
		this.name = "Invader";
		this.width = 50;
		this.height = 30;
		this.color = "#dd0";
		this.speed = Math.random() * -100;
		this.position = {
			x: this.game.gameWidth / 2 - this.width / 2,
			y: 25
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
		this.position.x += this.speed / deltaTime;
		if (this.markedForDeletion) {
			this.game.score.updateScore();
			this.game.score.updateInvaders(-1);
		}
		if (
			this.position.x <= 0 ||
			this.position.x >= this.game.gameWidth - this.width
		) {
			this.speed = -this.speed;
		}
	}
}
