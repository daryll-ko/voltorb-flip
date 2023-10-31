import { useState } from "react";
import Field from "./Field";
import generateBoard from "../utils/generateBoard";
import { CellState } from "../utils/types";

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
            board: currentBoardState.board.map(({ faceUp, value }, i) => ({
                faceUp:
                    i === index && !(faceUp || isGameOver || isLevelClear)
                        ? !faceUp
                        : faceUp,
                value,
            })),
            levelCoins:
                currentBoardState.levelCoins *
                currentBoardState.board.reduce(
                    (acc, { faceUp, value }, i) =>
                        i === index && !(faceUp || isGameOver || isLevelClear)
                            ? value
                            : acc,
                    1
                ),
        }));
    };

    const isGameOver = boardState.board.reduce(
        (acc, { faceUp, value }) => acc || (value === 0 && faceUp),
        false
    );

    const isLevelClear = boardState.board.reduce(
        (acc, { faceUp, value }) => acc && (value <= 1 || faceUp),
        true
    );

    const nextStage = () => {
        setBoardState((currentBoardState) => ({
            board: generateBoard(currentBoardState.level + 1),
            level: currentBoardState.level + 1,
            totalCoins:
                currentBoardState.totalCoins + currentBoardState.levelCoins,
            levelCoins: 0,
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
            <Field
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
                            onClick={nextStage}
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
