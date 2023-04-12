import unflipped from "../images/unflipped.png";
import voltorb from "../images/voltorb.png";
import one from "../images/1.svg";
import two from "../images/2.svg";
import three from "../images/3.svg";

interface Props {
  index: number;
  faceUp: boolean;
  value: number;
  gameOver: boolean;
  gameClear: boolean;
  flipGridSquare: (index: number) => void;
}

function GridSquare({
  index,
  faceUp,
  value,
  gameOver,
  gameClear,
  flipGridSquare,
}: Props) {
  const imageSources = [voltorb, one, two, three];
  const colors = [
    "bg-[#e07050]",
    "bg-[#3fa840]",
    "bg-[#e9a038]",
    "bg-[#3190f8]",
    "bg-[#c060e0]",
  ];

  const showFaceUp = faceUp || gameOver || gameClear;

  return (
    <div
      className="relative z-10 h-[60px] w-[60px] rounded-md border-2 border-solid border-black ring-4 ring-white md:h-[80px] md:w-[80px]"
      onClick={() => flipGridSquare(index)}
    >
      {showFaceUp ? (
        <img
          src={imageSources[value]}
          alt="Card contents"
          className="h-full w-full bg-[#b88880] p-6"
        />
      ) : (
        <img
          src={unflipped}
          alt="Unflipped card"
          className="h-full w-full bg-[#188060] p-1 hover:cursor-pointer"
        />
      )}
      <div
        className={`absolute -right-[22px] bottom-[31px] -z-20 h-[12px] w-[16px] ${
          colors[Math.floor(index / 5)]
        } outline outline-4 outline-white`}
      />
      <div
        className={`absolute -bottom-[22px] right-[31px] -z-20 h-[16px] w-[12px] ${
          colors[index % 5]
        } outline outline-4 outline-white`}
      />
    </div>
  );
}

export default GridSquare;
