import voltorb from "../images/voltorb.png";
import { GridSquareState } from "../utils/types";

function GridSquare({
  index,
  faceUp,
  value,
  gameOver,
  gameClear,
  flipGridSquare,
}: GridSquareState) {
  return (
    <div
      className={`font-mono flex h-[60px] w-[60px] items-center justify-center border border-solid border-black md:h-[80px] md:w-[80px] ${
        faceUp ? "border-2 border-blue-500 font-bold" : ""
      } ${!(faceUp || gameOver || gameClear) ? "cursor-pointer" : ""} ${
        !faceUp && (gameOver || gameClear)
          ? "border-2 border-gray-500 font-bold"
          : ""
      } ${faceUp && value === 0 ? "border-2 border-red-500 font-bold" : ""} `}
      onClick={() => flipGridSquare(index)}
    >
      {value === 0 ? (
        faceUp || gameOver || gameClear ? (
          <img
            src={voltorb}
            alt="Voltorb"
            className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]"
          />
        ) : (
          <p>?</p>
        )
      ) : (
        <p>{faceUp || gameOver || gameClear ? value : "?"}</p>
      )}
    </div>
  );
}

export default GridSquare;
