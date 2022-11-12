import "./Grid.css";
import GridSquare from "./GridSquare";

function Grid({ gridState }) {
	const gridSquares = gridState.map((gridSquareState) => (
		<GridSquare gridSquareState={gridSquareState}></GridSquare>
	));
	return <div className="grid">{gridSquares}</div>;
}

export default Grid;
