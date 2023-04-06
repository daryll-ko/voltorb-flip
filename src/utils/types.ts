export interface CellState {
  faceUp: boolean;
  value: number;
}

export interface GameState {
  board: CellState[];
  gameOver: boolean;
  gameClear: boolean;
  flipGridSquare: (index: number) => void;
}
