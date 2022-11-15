import generateInteger from "./rng";

function shuffleArray(a, n) {
	for (let i = 0; i < n; ++i) {
		const j = generateInteger(i + 1, n);
		const copy = a[i];
		a[i] = a[j];
		a[j] = copy;
	}
	return a;
}

export default shuffleArray;
