import "./GridSquare.css";

function GridSquare({ index, faceUp, value, gameOver, flipGridSquare }) {
	return (
		<div
			className={`gridSquare ${faceUp && "faceUp"} ${
				!gameOver && "clickable"
			} ${!faceUp && gameOver && "aftermath"} ${
				faceUp && value === 0 && "offender"
			}`}
			onClick={() => flipGridSquare(index)}
		>
			<p>{faceUp || gameOver ? value : "?"}</p>
		</div>
	);
}

export default GridSquare;
