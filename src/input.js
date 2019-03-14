export default class InputHandler {
	constructor(game) {
		document.addEventListener("keydown", event => {
			switch (event.keyCode) {
				//DOWN: LEFT ARROW
				case 37:
					game.tank.moveLeft();
					break;
				//DOWN: ARROW UP
				case 38:
					game.invader.spawnInvaders(2, 115, "#099");
					break;
				//DOWN: RIGHT ARROW
				case 39:
					game.tank.moveRight();
					break;
				//DOWN: ARROW DOWN
				case 40:
					game.showAllObjects();
					game.sound.spawnSound();
					break;
				//DOWN: SPACE
				case 32:
					game.tank.shoot();
					//DOWN SPACE
					break;
				case 13:
					game.sound = null;
					window.location.reload();
			}
		});

		document.addEventListener("keyup", event => {
			switch (event.keyCode) {
				//UP: LEFT ARROW
				case 37:
					game.tank.stop();
					break;
				//UP: RIGHT ARROW
				case 39:
					game.tank.stop();
					break;
			}
		});
	}
}
