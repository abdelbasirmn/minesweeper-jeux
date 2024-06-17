import React from 'react';

const Header = ({ onReset }) => {
  return (
    <div className="header">
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Header;
