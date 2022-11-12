import "./GridSquare.css";

function flipGridSquareState() {
	
}

function GridSquare({ gridSquareState }) {
	return (
		<div
			className="gridSquare"
			onClick={() => {
				flipGridSquareState();
			}}
		>
			{gridSquareState}
		</div>
	);
}

export default GridSquare;
