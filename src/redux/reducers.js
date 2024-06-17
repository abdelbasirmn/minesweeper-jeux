import {
    INIT_BOARD,
    REVEAL_CELL,
    FLAG_CELL,
    RESET_GAME,
  } from './actions';
  
  const initialState = {
    board: [],
  };
  
  const createBoard = () => {
    // Create a 10x10 board with random mines
    const board = Array(10)
      .fill(null)
      .map(() => Array(10).fill({ isRevealed: false, isMine: false, neighborCount: 0 }));
  
    // Add mines
    for (let i = 0; i < 10; i++) {
      const row = Math.floor(Math.random() * 10);
      const col = Math.floor(Math.random() * 10);
      board[row][col].isMine = true;
    }
  
    // Calculate neighbor counts
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        if (!board[row][col].isMine) {
          let count = 0;
          for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
              const newRow = row + i;
              const newCol = col + j;
              if (newRow >= 0 && newRow < 10 && newCol >= 0 && newCol < 10) {
                if (board[newRow][newCol].isMine) {
                  count++;
                }
              }
            }
          }
          board[row][col].neighborCount = count;
        }
      }
    }
  
    return board;
  };
  
  const revealBoard = (board, row, col) => {
    if (board[row][col].isRevealed || board[row][col].isMine) {
      return board;
    }
    board[row][col].isRevealed = true;
  
    if (board[row][col].neighborCount === 0) {
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          const newRow = row + i;
          const newCol = col + j;
          if (newRow >= 0 && newRow < 10 && newCol >= 0 && newCol < 10) {
            revealBoard(board, newRow, newCol);
          }
        }
      }
    }
  
    return board;
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case INIT_BOARD:
        return {
          ...state,
          board: createBoard(),
        };
      case REVEAL_CELL:
        return {
          ...state,
          board: revealBoard([...state.board], action.payload.row, action.payload.col),
        };
      case FLAG_CELL:
        return {
          ...state,
          board: state.board.map((row, rowIndex) =>
            row.map((cell, colIndex) => {
              if (rowIndex === action.payload.row && colIndex === action.payload.col) {
                return { ...cell, isFlagged: !cell.isFlagged };
              }
              return cell;
            })
          ),
        };
      case RESET_GAME:
        return {
          ...state,
          board: createBoard(),
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  