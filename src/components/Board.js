// src/components/Board.js
import React from 'react';
import Cell from './Cell';

const Board = ({ board, onCellClick, onCellRightClick }) => {
  return (
    <div className="board">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            value={cell}
            onClick={() => onCellClick(rowIndex, colIndex)}
            onRightClick={(e) => {
              e.preventDefault();
              onCellRightClick(rowIndex, colIndex);
            }}
          />
        ))
      )}
    </div>
  );
};

export default Board;
