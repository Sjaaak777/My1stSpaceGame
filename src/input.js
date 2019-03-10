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
					game.spawnInvaders(3);
					break;
				//DOWN: RIGHT ARROW
				case 39:
					game.tank.moveRight();
					break;
				//DOWN: ARROW DOWN
				case 40:
					game.tank.upgradeTank();
					game.showObjects();
					break;
				//DOWN: SPACE
				case 32:
					game.tank.shoot();
					break;
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
