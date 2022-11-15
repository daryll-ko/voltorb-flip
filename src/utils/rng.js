function generateInteger(low, high) {
	// [low, high)
	return low + Math.floor(Math.random() * (high - low));
}

export default generateInteger;
