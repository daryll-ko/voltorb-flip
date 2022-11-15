import "./GridSquare.css";
import voltorb from "./voltorb.png";

function GridSquare({ index, faceUp, value, gameOver, flipGridSquare }) {
	return (
		<div
			className={`gridSquare ${faceUp ? "faceUp" : ""} ${
				!gameOver ? "clickable" : ""
			} ${!faceUp && gameOver ? "aftermath" : ""} ${
				faceUp && value === 0 ? "offender" : ""
			}`}
			onClick={() => flipGridSquare(index)}
		>
			{value === 0 ? (
				faceUp || gameOver ? (
					<img src={voltorb} alt="Voltorb" className="voltorb" />
				) : (
					<p>?</p>
				)
			) : (
				<p>{faceUp || gameOver ? value : "?"}</p>
			)}
		</div>
	);
}

export default GridSquare;
