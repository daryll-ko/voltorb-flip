import "./GridSquare.css";

function GridSquare({ index, gridSquareState, flipGridSquare }) {
	return (
		<div className="gridSquare" onClick={() => flipGridSquare(index)}>
			{gridSquareState}
		</div>
	);
}

export default GridSquare;
