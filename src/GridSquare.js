import "./GridSquare.css";

function GridSquare({ index, gridSquareState, flipGridSquare }) {
	return (
		<div className="gridSquare" onClick={() => flipGridSquare(index)}>
			<p>{gridSquareState}</p>
		</div>
	);
}

export default GridSquare;
