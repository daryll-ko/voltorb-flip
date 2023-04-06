import coins from "../images/coins.webp";
import voltorb from "../images/voltorb.png";

interface Props {
  sum: number;
  voltorbCount: number;
  color: string;
}

function TallySquare({ sum, voltorbCount, color }: Props) {
  return (
    <div
      className={`z-10 flex h-[60px] w-[60px] flex-col rounded-md border-4 border-solid border-white md:h-[80px] md:w-[80px] ${color}`}
    >
      <div className="flex h-[50%] items-center border-b-2 border-solid border-white p-1">
        <img src={coins} alt="Coin bag" className="h-full" />
        <p>{sum}</p>
      </div>
      <div className="flex h-[50%] items-center border-t-2 border-solid border-white p-1">
        <img src={voltorb} alt="Voltorb" className="h-full" />
        <p>{voltorbCount}</p>
      </div>
    </div>
  );
}

export default TallySquare;
