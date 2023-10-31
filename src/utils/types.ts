export interface Tile {
    isFaceUp: boolean;
    value: number;
}

export interface Game {
    board: Tile[];
    isGameOver: boolean;
    isLevelClear: boolean;
    flipTile: (index: number) => void;
}
