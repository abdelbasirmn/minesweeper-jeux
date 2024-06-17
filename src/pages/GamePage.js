import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initBoard, revealCell, flagCell, resetGame } from '../redux/actions';
import Board from '../components/Board';
import Header from '../components/Header';

const GamePage = () => {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.board);

  useEffect(() => {
    dispatch(initBoard());
  }, [dispatch]);

  const handleCellClick = (row, col) => {
    dispatch(revealCell(row, col));
  };

  const handleCellRightClick = (row, col) => {
    dispatch(flagCell(row, col));
  };

  const handleReset = () => {
    dispatch(resetGame());
  };

  return (
    <div className="game-page">
      <Header onReset={handleReset} />
      <Board
        board={board}
        onCellClick={handleCellClick}
        onCellRightClick={handleCellRightClick}
      />
    </div>
  );
};

export default GamePage;
