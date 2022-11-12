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

	return (
		<main>
			<Grid gridState={gridState} />
		</main>
	);
}

export default Main;
