import "./Field.css";
import GridSquare from "./GridSquare";
import TallySquare from "./TallySquare";

function Field({ gridState, gameOver, flipGridSquare }) {
	const gridSquares = gridState.map(({ faceUp, value }, index) => (
		<GridSquare
			key={index}
			index={index}
			faceUp={faceUp}
			value={value}
			gameOver={gameOver}
			flipGridSquare={flipGridSquare}
		></GridSquare>
	));

	let fieldSquares = [],
		sum = 0,
		voltorbCount = 0;
	for (let i = 0; i < 25; ++i) {
		fieldSquares.push(gridSquares[i]);
		if (gridState[i].value !== 0) {
			sum += gridState[i].value;
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
			if (gridState[k].value !== 0) {
				sum += gridState[k].value;
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
