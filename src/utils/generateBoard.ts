import generateInteger from "./rng.ts";
import shuffleArray from "./shuffleArray.ts";

const possibleBoardStates: number[][][] = [
	[
		// Level 1
		[6, 15, 3, 1],
		[6, 16, 0, 3],
		[6, 14, 5, 0],
		[6, 15, 2, 2],
		[6, 14, 4, 1],
	],
	[
		// Level 2
		[7, 14, 1, 3],
		[7, 12, 6, 0],
		[7, 13, 3, 2],
		[7, 14, 0, 4],
		[7, 12, 5, 1],
	],
	[
		// Level 3
		[8, 12, 2, 3],
		[8, 10, 7, 0],
		[8, 11, 4, 2],
		[8, 12, 1, 4],
		[8, 10, 6, 1],
	],
	[
		// Level 4
		[8, 11, 3, 3],
		[8, 12, 0, 5],
		[10, 7, 8, 0],
		[10, 8, 5, 2],
		[10, 9, 2, 4],
	],
	[
		// Level 5
		[10, 7, 7, 1],
		[10, 8, 4, 3],
		[10, 9, 1, 5],
		[10, 6, 9, 0],
		[10, 7, 6, 2],
	],
	[
		// Level 6
		[10, 8, 3, 4],
		[10, 9, 0, 6],
		[10, 6, 8, 1],
		[10, 7, 5, 3],
		[10, 8, 2, 5],
	],
	[
		// Level 7
		[10, 6, 7, 2],
		[10, 7, 4, 4],
		[13, 5, 1, 6],
		[13, 2, 9, 1],
		[10, 6, 6, 3],
	],
	[
		// Level 8 and above
		[10, 8, 0, 7],
		[10, 5, 8, 2],
		[10, 6, 5, 4],
		[10, 7, 2, 6],
		[10, 5, 7, 3],
	],
];

function generateBoard(level: number) {
	const index = generateInteger(0, 5);
	const counts = possibleBoardStates[level - 1][index];
	let valueArray = [];
	for (let value = 0; value <= 3; ++value) {
		for (let _ = 0; _ < counts[value]; ++_) {
			valueArray.push(value);
		}
	}
	valueArray = shuffleArray(valueArray, 25);
	return valueArray.map((value) => ({
		faceUp: false,
		value,
	}));
}

export default generateBoard;
