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
	const [globalScore, setGlobalScore] = useState(0);
	const [localScore, setLocalScore] = useState(1);

	const flipGridSquare = (index) => {
		setGridState((currentGridState) =>
			currentGridState.map(({ faceUp, value }, i) => ({
				faceUp:
					i === index && !faceUp && !gameOver && !gameClear ? !faceUp : faceUp,
				value,
			}))
		);
		setLocalScore((currentLocalScore) => {
			const multiplier = gridState.reduce(
				(acc, { faceUp, value }, i) =>
					i === index && !faceUp && !gameOver && !gameClear ? value : acc,
				1
			);
			return currentLocalScore * multiplier;
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

	const nextStage = () => {
		setGridState(randomStateArray());
		setGlobalScore((currentGlobalScore) => currentGlobalScore + localScore);
		setLocalScore(1);
	};

	const restartGame = () => {
		setGridState(randomStateArray());
		setGlobalScore(0);
		setLocalScore(1);
	};

	return (
		<main>
			<div className="wrapper">
				<Field
					gridState={gridState}
					gameOver={gameOver}
					flipGridSquare={flipGridSquare}
				/>
				<div className={`scores ${gameOver || gameClear ? "adjusted" : ""}`}>
					<p>
						Total coins: <span className="bold">{globalScore}</span>
					</p>
					<p>
						Current coins: <span className="bold">{localScore}</span>
					</p>
					{gameOver && (
						<>
							<p>Game over!</p>
							<button onClick={restartGame} className="button">
								Restart
							</button>
						</>
					)}
					{gameClear && (
						<>
							<p>Stage clear!</p>
							<button onClick={nextStage} className="button">
								Next stage
							</button>
						</>
					)}
				</div>
			</div>
		</main>
	);
}

export default Main;
