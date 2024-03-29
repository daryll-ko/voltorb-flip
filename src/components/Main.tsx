import { useState } from "react";
import Board from "./Board";
import generateBoard from "../utils/generateBoard";

export default function Main() {
    const [boardState, setBoardState] = useState({
        board: generateBoard(1),
        level: 1,
        totalCoins: 0,
        levelCoins: 1,
    });

    const flipTile = (index: number) => {
        setBoardState((currentBoardState) => ({
            ...currentBoardState,
            board: currentBoardState.board.map(({ isFaceUp, value }, i) => ({
                isFaceUp:
                    i === index && !(isFaceUp || isGameOver || isLevelClear)
                        ? !isFaceUp
                        : isFaceUp,
                value,
            })),
            levelCoins:
                currentBoardState.levelCoins *
                currentBoardState.board.reduce(
                    (acc, { isFaceUp, value }, i) =>
                        i === index && !(isFaceUp || isGameOver || isLevelClear)
                            ? value
                            : acc,
                    1
                ),
        }));
    };

    const isGameOver = boardState.board.reduce(
        (acc, { isFaceUp, value }) => acc || (value === 0 && isFaceUp),
        false
    );

    const isLevelClear = boardState.board.reduce(
        (acc, { isFaceUp, value }) => acc && (value <= 1 || isFaceUp),
        true
    );

    const goToNextStage = () => {
        setBoardState((currentBoardState) => ({
            board: generateBoard(currentBoardState.level + 1),
            level: currentBoardState.level + 1,
            totalCoins:
                currentBoardState.totalCoins + currentBoardState.levelCoins,
            levelCoins: 1,
        }));
    };

    const restartGame = () => {
        setBoardState({
            board: generateBoard(1),
            level: 1,
            totalCoins: 0,
            levelCoins: 1,
        });
    };

    const { board, level, totalCoins, levelCoins } = boardState;

    return (
        <main className="p-12 text-center">
            <Board
                board={boardState.board}
                isGameOver={isGameOver}
                isLevelClear={isLevelClear}
                flipTile={flipTile}
            />
            <div className="mt-4 flex items-center justify-center gap-8">
                <p>
                    Total coins: <span className="font-bold">{totalCoins}</span>
                </p>
                <p>
                    Current coins:{" "}
                    <span className="font-bold">{levelCoins}</span>
                </p>
                {isGameOver && (
                    <>
                        <p>Game over!</p>
                        <button
                            onClick={restartGame}
                            className="cursor-pointer rounded-lg border-2 border-solid border-black px-3 py-1 transition-all hover:scale-105"
                        >
                            Restart
                        </button>
                    </>
                )}
                {isLevelClear && (
                    <>
                        <p>Stage clear!</p>
                        <button
                            onClick={goToNextStage}
                            className="cursor-pointer rounded-lg border-2 border-solid border-black px-3 py-1 transition-all hover:scale-105"
                        >
                            Next stage
                        </button>
                    </>
                )}
            </div>
        </main>
    );
}
