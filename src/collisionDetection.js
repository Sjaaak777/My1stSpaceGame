export function detectCollision(object, otherObject) {
	let topOfObject = object.position.y;
	let rightOfObject = object.position.x;
	let bottomOfObject = object.position.y + object.height;
	let leftOfObject = object.position.x + object.width;

	let topOfOtherObject = otherObject.position.y;
	let rightOftherObject = otherObject.position.x + otherObject.width;
	let leftOfOtherObject = otherObject.position.x;
	let bottomOfOtherObject = otherObject.position.y + otherObject.height;

	if (
		topOfObject <= bottomOfOtherObject &&
		rightOfObject <= rightOftherObject &&
		leftOfObject >= leftOfOtherObject &&
		bottomOfObject >= topOfOtherObject
	) {
		//console.log(rightOftherObject);

		return true;
	} else {
		return false;
	}
}
