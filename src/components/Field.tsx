import { GameState } from "../utils/types";
import GridSquare from "./GridSquare";
import TallySquare from "./TallySquare";

function Field({ board, gameOver, gameClear, flipGridSquare }: GameState) {
  const gridSquares = board.map(({ faceUp, value }, index) => (
    <GridSquare
      key={index}
      index={index}
      faceUp={faceUp}
      value={value}
      gameOver={gameOver}
      gameClear={gameClear}
      flipGridSquare={flipGridSquare}
    ></GridSquare>
  ));

  const colors = [
    "bg-[#e07050]",
    "bg-[#3fa840]",
    "bg-[#e9a038]",
    "bg-[#3190f8]",
    "bg-[#c060e0]",
  ];

  let fieldSquares = [],
    sum = 0,
    voltorbCount = 0;
  for (let i = 0; i < 25; ++i) {
    fieldSquares.push(gridSquares[i]);
    if (board[i].value !== 0) {
      sum += board[i].value;
    } else {
      voltorbCount += 1;
    }
    if (i % 5 === 4) {
      fieldSquares.push(
        <TallySquare
          key={25 + Math.floor(i / 5)}
          sum={sum}
          voltorbCount={voltorbCount}
          color={colors[Math.floor(i / 5)]}
        />
      );
      sum = voltorbCount = 0;
    }
  }
  for (let j = 0; j < 5; ++j) {
    sum = voltorbCount = 0;
    for (let k = j; k < 25; k += 5) {
      if (board[k].value !== 0) {
        sum += board[k].value;
      } else {
        voltorbCount += 1;
      }
    }
    fieldSquares.push(
      <TallySquare
        key={30 + j}
        sum={sum}
        voltorbCount={voltorbCount}
        color={colors[j]}
      />
    );
  }

  return (
    <div className="text-md mx-auto flex w-[420px] flex-wrap gap-[12px] md:w-[560px] md:gap-[16px] md:text-lg">
      {fieldSquares}
    </div>
  );
}

export default Field;
