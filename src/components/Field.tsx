import { GameState } from "../utils/types";
import "./Field.css";
import GridSquare from "./GridSquare.tsx";
import TallySquare from "./TallySquare.tsx";

function Field({ board, gameOver, gameClear, flipGridSquare }: GameState) {
	const gridSquares = board.map(({ faceUp, value }, index) => (
		<GridSquare
			key={index}
			index={index}
			faceUp={faceUp}
			value={value}
			gameOver={gameOver}
			gameClear={gameClear}
			flipGridSquare={flipGridSquare}
		></GridSquare>
	));

	let fieldSquares = [],
		sum = 0,
		voltorbCount = 0;
	for (let i = 0; i < 25; ++i) {
		fieldSquares.push(gridSquares[i]);
		if (board[i].value !== 0) {
			sum += board[i].value;
		} else {
			voltorbCount += 1;
		}
		if (i % 5 === 4) {
			fieldSquares.push(
				<TallySquare key={25 + i / 5} sum={sum} voltorbCount={voltorbCount} />
			);
			sum = voltorbCount = 0;
		}
	}
	for (let j = 0; j < 5; ++j) {
		sum = voltorbCount = 0;
		for (let k = j; k < 25; k += 5) {
			if (board[k].value !== 0) {
				sum += board[k].value;
			} else {
				voltorbCount += 1;
			}
		}
		fieldSquares.push(
			<TallySquare key={30 + j} sum={sum} voltorbCount={voltorbCount} />
		);
	}

	return <div className="field">{fieldSquares}</div>;
}

export default Field;
