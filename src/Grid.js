import "./Grid.css";
import GridSquare from "./GridSquare";

function Grid({ gridState, flipGridSquare }) {
	const gridSquares = gridState.map(({ faceUp, value }, index) => (
		<GridSquare
			key={index}
			index={index}
			faceUp={faceUp}
			value={value}
			flipGridSquare={flipGridSquare}
		></GridSquare>
	));
	return <div className="grid">{gridSquares}</div>;
}

export default Grid;
