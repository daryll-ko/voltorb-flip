import "./GridSquare.css";

function GridSquare({ index, faceUp, value, flipGridSquare }) {
	return (
		<div className="gridSquare" onClick={() => flipGridSquare(index)}>
			<p>{faceUp ? value : "?"}</p>
		</div>
	);
}

export default GridSquare;
