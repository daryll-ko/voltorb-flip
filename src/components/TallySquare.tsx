import coins from "../images/coins.webp";
import voltorb from "../images/voltorb.png";
import { SeriesData } from "../utils/types";

function TallySquare({ sum, voltorbCount }: SeriesData) {
  return (
    <div className="font-mono box-border h-[80px] w-[80px] border-2 border-solid border-black md:h-[80px] md:w-[80px]">
      <div className="flex h-[30px] items-center border-b-2 border-solid border-black pl-3 md:h-[40px] md:pl-4">
        <img
          src={coins}
          alt="Coin bag"
          className="mr-1 h-[15px] w-[15px] md:h-[20px] md:w-[20px]"
        />
        <p>{sum}</p>
      </div>
      <div className="flex h-[40px] items-center pl-4">
        <img
          src={voltorb}
          alt="Voltorb"
          className="mr-1 h-[15px] w-[15px] md:h-[20px] md:w-[20px]"
        />
        <p>{voltorbCount}</p>
      </div>
    </div>
  );
}

export default TallySquare;
