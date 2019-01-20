export default class Invader {
	constructor(game) {
		this.gameObjects = game.gameObjects;
		this.gameWidth = game.gameWidth;
		this.width = 50;
		this.height = 30;
		this.color = "#dd0";
		this.speed = 50;
		this.position = {
			x: game.gameWidth / 2 - this.width / 2,
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

		if (this.position.x <= 0 || this.position.x >= this.gameWidth - this.width) {
			this.speed = -this.speed;
			//console.log("gameObjects are: " + this.gameObjects);
			//console.log("toink");
			this.markedForDeletion = true;
		}
	}
}
