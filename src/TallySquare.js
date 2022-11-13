import "./TallySquare.css";

function TallySquare({ sum, voltorb }) {
	return (
		<div className="tallySquare">
			{sum} | {voltorb}
		</div>
	);
}

export default TallySquare;
