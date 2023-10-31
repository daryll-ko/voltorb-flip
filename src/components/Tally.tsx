import coin from "../images/coin.png";
import voltorb from "../images/voltorb.png";

interface Props {
    sum: number;
    voltorbCount: number;
    color: string;
}

function Tally({ sum, voltorbCount, color }: Props) {
    return (
        <div
            className={`z-10 flex h-[60px] w-[60px] flex-col rounded-md border-4 border-solid border-white md:h-[80px] md:w-[80px] ${color}`}
        >
            <div className="flex h-[50%] items-center justify-between border-b-2 border-solid border-white px-2 py-1">
                <img src={coin} alt="Coin" className="h-full" />
                <p className="font-bold">{sum}</p>
            </div>
            <div className="flex h-[50%] items-center justify-between border-t-2 border-solid border-white px-2 py-1">
                <img src={voltorb} alt="Voltorb" className="h-full" />
                <p className="font-bold">{voltorbCount}</p>
            </div>
        </div>
    );
}

export default Tally;
