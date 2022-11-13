import "./FieldSquare.css";

function FieldSquare({ index, faceUp, value, flipGridSquare }) {
	return (
		<div className="gridSquare" onClick={() => flipGridSquare(index)}>
			<p>{faceUp ? value : "?"}</p>
		</div>
	);
}

export default FieldSquare;
