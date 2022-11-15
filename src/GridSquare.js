import "./GridSquare.css";
import voltorb from "./images/voltorb.png";

function GridSquare({
	index,
	faceUp,
	value,
	gameOver,
	gameClear,
	flipGridSquare,
}) {
	return (
		<div
			className={`gridSquare ${faceUp ? "faceUp" : ""} ${
				!(faceUp || gameOver || gameClear) ? "clickable" : ""
			} ${!faceUp && (gameOver || gameClear) ? "aftermath" : ""} ${
				faceUp && value === 0 ? "offender" : ""
			}`}
			onClick={() => flipGridSquare(index)}
		>
			{value === 0 ? (
				faceUp || gameOver || gameClear ? (
					<img src={voltorb} alt="Voltorb" className="voltorb" />
				) : (
					<p>?</p>
				)
			) : (
				<p>{faceUp || gameOver || gameClear ? value : "?"}</p>
			)}
		</div>
	);
}

export default GridSquare;
