import { useState } from "react";
import "./Main.css";
import Field from "./Field";
import generateBoard from "../utils/generateBoard";
import { CellState } from "../utils/types";

function Main() {
	const [gridState, setGridState] = useState({
		level: 1,
		board: generateBoard(1),
	});
	const [globalScore, setGlobalScore] = useState(0);
	const [localScore, setLocalScore] = useState(1);

	const flipGridSquare = (index: number) => {
		setGridState((currentGridState) => ({
			...currentGridState,
			board: currentGridState.board.map(({ faceUp, value }: CellState, i: number) => ({
				faceUp:
					i === index && !faceUp && !gameOver && !gameClear ? !faceUp : faceUp,
				value,
			})),
		}));
		setLocalScore((currentLocalScore) => {
			const multiplier = gridState.board.reduce(
				(acc: number, { faceUp, value }: CellState, i: number) =>
					i === index && !faceUp && !gameOver && !gameClear ? value : acc,
				1
			);
			return currentLocalScore * multiplier;
		});
	};

	const gameOver = gridState.board.reduce(
		(acc: boolean, { faceUp, value }: CellState) => acc || (value === 0 && faceUp),
		false
	);

	const gameClear = gridState.board.reduce(
		(acc: boolean, { faceUp, value }: CellState) => acc && (value <= 1 || faceUp),
		true
	);

	const nextStage = () => {
		setGridState((currentGridState) => ({
			level: currentGridState.level + 1,
			board: generateBoard(currentGridState.level + 1),
		}));
		setGlobalScore((currentGlobalScore) => currentGlobalScore + localScore);
		setLocalScore(1);
	};

	const restartGame = () => {
		setGridState({ level: 1, board: generateBoard(1) });
		setGlobalScore(0);
		setLocalScore(1);
	};

	return (
		<main>
			<div className="wrapper">
				<Field
					board={gridState.board}
					gameOver={gameOver}
					gameClear={gameClear}
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
