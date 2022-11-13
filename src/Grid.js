import "./Grid.css";
import GridSquare from "./GridSquare";

function Grid({ gridState, flipGridSquare }) {
	const gridSquares = gridState.map((gridSquareState, index) => (
		<GridSquare
			key={index}
			index={index}
			gridSquareState={gridSquareState}
			flipGridSquare={flipGridSquare}
		></GridSquare>
	));
	return <div className="grid">{gridSquares}</div>;
}

export default Grid;
