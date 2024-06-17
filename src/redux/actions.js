export const INIT_BOARD = 'INIT_BOARD';
export const REVEAL_CELL = 'REVEAL_CELL';
export const FLAG_CELL = 'FLAG_CELL';
export const RESET_GAME = 'RESET_GAME';

export const initBoard = () => ({
  type: INIT_BOARD,
});

export const revealCell = (row, col) => ({
  type: REVEAL_CELL,
  payload: { row, col },
});

export const flagCell = (row, col) => ({
  type: FLAG_CELL,
  payload: { row, col },
});

export const resetGame = () => ({
  type: RESET_GAME,
});
