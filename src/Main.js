import { useState } from "react";
import "./Main.css";
import Field from "./Field";

function randomStateArray() {
	const valueArray = [];
	for (let i = 0; i < 25; i += 1) {
		valueArray.push(Math.floor(Math.random() * 4));
	}
	return valueArray.map((value) => ({
		faceUp: false,
		value,
	}));
}

function Main() {
	const [gridState, setGridState] = useState(randomStateArray());
	const [score, setScore] = useState(1);

	const flipGridSquare = (index) => {
		setGridState((currentGridState) =>
			currentGridState.map(({ faceUp, value }, i) => ({
				faceUp:
					i === index && !faceUp && !gameOver && !gameClear ? !faceUp : faceUp,
				value,
			}))
		);
		setScore((currentScore) => {
			const multiplier = gridState.reduce(
				(acc, { faceUp, value }, i) =>
					i === index && !faceUp && !gameOver && !gameClear ? value : acc,
				1
			);
			return currentScore * multiplier;
		});
	};

	const gameOver = gridState.reduce(
		(acc, { faceUp, value }) => acc || (value === 0 && faceUp),
		false
	);

	const gameClear = gridState.reduce(
		(acc, { faceUp, value }) => acc && (value <= 1 || faceUp),
		true
	);

	return (
		<main>
			<Field gridState={gridState} flipGridSquare={flipGridSquare} />
			<br />
			<p>Current score: {score}</p>
			{gameOver && <p>Game over!</p>}
			{gameClear && <p>Clear!</p>}
		</main>
	);
}

export default Main;
