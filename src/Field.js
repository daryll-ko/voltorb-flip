import "./Field.css";
import FieldSquare from "./FieldSquare";

function Field({ gridState, flipGridSquare }) {
	const gridSquares = gridState.map(({ faceUp, value }, index) => (
		<FieldSquare
			key={index}
			index={index}
			faceUp={faceUp}
			value={value}
			flipGridSquare={flipGridSquare}
		></FieldSquare>
	));
	return <div className="grid">{gridSquares}</div>;
}

export default Field;
