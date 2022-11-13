import { useState } from "react";
import Grid from "./Grid";

function randomBinaryArray() {
	const array = [];
	for (let i = 0; i < 25; i += 1) {
		array.push(Math.floor(Math.random() * 2));
	}
	return array;
}

function Main() {
	const [gridState, setGridState] = useState(randomBinaryArray());

	const flipGridSquare = (index) => {
		setGridState((currentGridState) =>
			currentGridState.map((value, i) => (i === index ? value ^ 1 : value))
		);
	};

	return (
		<main>
			<Grid gridState={gridState} flipGridSquare={flipGridSquare} />
		</main>
	);
}

export default Main;
