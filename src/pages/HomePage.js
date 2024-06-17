import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Bienvenue au Jeu de Démineur</h1>
      <Link to="/game">Commencer le Jeu</Link>
    </div>
  );
};

export default HomePage;
