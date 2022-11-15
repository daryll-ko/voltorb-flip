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
		voltorb = 0;
	for (let i = 0; i < 25; ++i) {
		fieldSquares.push(gridSquares[i]);
		if (gridState[i].value !== 0) {
			sum += gridState[i].value;
		} else {
			voltorb += 1;
		}
		if (i % 5 === 4) {
			fieldSquares.push(<TallySquare sum={sum} voltorb={voltorb} />);
			sum = voltorb = 0;
		}
	}
	for (let j = 0; j < 5; ++j) {
		sum = voltorb = 0;
		for (let k = j; k < 25; k += 5) {
			if (gridState[k].value !== 0) {
				sum += gridState[k].value;
			} else {
				voltorb += 1;
			}
		}
		fieldSquares.push(<TallySquare sum={sum} voltorb={voltorb} />);
	}

	return <div className="field">{fieldSquares}</div>;
}

export default Field;
