import { useState } from "react";
import "./Main.css";
import Grid from "./Grid";

function randomStateArray() {
	const valueArray = [];
	for (let i = 0; i < 25; i += 1) {
		valueArray.push(Math.floor(Math.random() * 4));
	}
	return valueArray.map((value) => ({
		faceUp: false,
		value,
	}));
}

function Main() {
	const [gridState, setGridState] = useState(randomStateArray());

	const flipGridSquare = (index) => {
		setGridState((currentGridState) =>
			currentGridState.map(({ faceUp, value }, i) => ({
				faceUp: i === index ? !faceUp : faceUp,
				value,
			}))
		);
	};

	return (
		<main>
			<Grid gridState={gridState} flipGridSquare={flipGridSquare} />
		</main>
	);
}

export default Main;
