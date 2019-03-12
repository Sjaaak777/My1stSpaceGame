export default class Invader {
	constructor(game, row, color) {
		this.game = game;
		this.name = "Invader";
		this.width = 50;
		this.height = 25;
		this.color = color;
		this.speed = Math.random() * -100;
		this.row = row;
		this.position = {
			x: game.gameWidth / 2 - this.width / 2,
			y: this.row
		};
		this.markedForDeletion = false;
	}

	spawnInvaders(amountOfInvaders, row, color) {
		let i;

		for (i = 1; i <= amountOfInvaders; i++) {
			this.game.invaders.push(new Invader(this.game, row, color));
			this.game.ui.updateInvaders(1);
		}
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
			this.game.ui.updateScore();
			this.game.sound.playBoom();
			this.game.ui.updateInvaders(-1);
		}
		if (
			this.position.x <= 0 ||
			this.position.x >= this.game.gameWidth - this.width
		) {
			this.speed = -this.speed;
		}
	}
}
