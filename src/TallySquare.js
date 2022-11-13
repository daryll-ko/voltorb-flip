import "./TallySquare.css";

function TallySquare({ sum, voltorb }) {
	return (
		<div className="tallySquare">
			<p className="tallySquareSum">{sum}</p>
			<p>{voltorb}</p>
		</div>
	);
}

export default TallySquare;
