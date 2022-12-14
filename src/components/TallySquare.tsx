import "./TallySquare.css";
import coins from "../images/coins.webp";
import voltorb from "../images/voltorb.png";
import { SeriesData } from "../utils/types";

function TallySquare({ sum, voltorbCount }: SeriesData) {
	return (
		<div className="tallySquare">
			<div className="tallySquareSum tallySquareInner">
				<img src={coins} alt="Coin bag" className="image" />
				<p>{sum}</p>
			</div>
			<div className="tallySquareInner">
				<img src={voltorb} alt="Voltorb" className="image" />
				<p>{voltorbCount}</p>
			</div>
		</div>
	);
}

export default TallySquare;
