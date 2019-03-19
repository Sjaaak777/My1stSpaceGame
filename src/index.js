import "./styles.css";
import Game from "../src/game";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
let game = new Game(canvas.width, canvas.height);

game.start();

let lastTime = 0;

function gameLoop(timeStamp) {
	let deltaTime = lastTime - timeStamp;
	lastTime = timeStamp;

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	game.update(deltaTime);
	game.draw(ctx);

	requestAnimationFrame(gameLoop);
}

gameLoop();
