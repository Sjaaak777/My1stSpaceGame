import "./styles.css";
import Game from "../src/game";

const GAME_WIDTH = 600;
const GAME_HEIGHT = 350;

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
let game = new Game(GAME_WIDTH, GAME_HEIGHT);

game.start();

let lastTime = 0;

function gameLoop(timeStamp) {
	let deltaTime = lastTime - timeStamp;
	lastTime = timeStamp;

	ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

	game.update(deltaTime);
	game.draw(ctx);

	requestAnimationFrame(gameLoop);
}

gameLoop();
