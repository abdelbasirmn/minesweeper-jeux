import React from 'react';

const Cell = ({ value, onClick, onRightClick }) => {
  let className = 'cell';
  if (value.isRevealed) {
    className += value.isMine ? ' revealed mine' : ' revealed';
  }

  return (
    <div
      className={className}
      onClick={onClick}
      onContextMenu={onRightClick}
    >
      {value.isRevealed && !value.isMine ? value.neighborCount : ''}
    </div>
  );
};

export default Cell;
