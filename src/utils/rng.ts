function generateInteger(low: number, high: number): number {
	// [low, high)
	return low + Math.floor(Math.random() * (high - low));
}

export default generateInteger;
