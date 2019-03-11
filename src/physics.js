export default class PhysicsEngine {
	constructor(game) {
		this.game = game;
	}

	detectCollision(object, otherObject) {
		let topOfObject = object.position.y;
		let rightOfObject = object.position.x;
		let bottomOfObject = object.position.y + object.height;
		let leftOfObject = object.position.x + object.width;

		otherObject.forEach(function(otherArrayObject) {
			let topOfOtherObject = otherArrayObject.position.y;
			let rightOfOtherObject =
				otherArrayObject.position.x + otherArrayObject.width;
			let leftOfOtherObject = otherArrayObject.position.x;
			let bottomOfOtherObject =
				otherArrayObject.position.y + otherArrayObject.height;

			if (
				topOfObject <= bottomOfOtherObject &&
				rightOfObject >= leftOfOtherObject &&
				leftOfObject <= rightOfOtherObject &&
				bottomOfObject >= topOfOtherObject
			) {
				object.markedForDeletion = true;
				otherArrayObject.markedForDeletion = true;
				return true;
			}
		});
		return false;
	}

	// update(deltaTime) {
	// 	if (!deltaTime) return;

	// 	console.log("from events");
	// }
}
