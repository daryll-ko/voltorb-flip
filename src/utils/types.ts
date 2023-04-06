export interface CellState {
  faceUp: boolean;
  value: number;
}

export interface SeriesData {
  sum: number;
  voltorbCount: number;
}

export interface GameState {
  board: CellState[];
  gameOver: boolean;
  gameClear: boolean;
  flipGridSquare: (index: number) => void;
}

export interface GridSquareState {
  index: number;
  faceUp: boolean;
  value: number;
  gameOver: boolean;
  gameClear: boolean;
  flipGridSquare: (index: number) => void;
}
