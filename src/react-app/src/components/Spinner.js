import React from 'react';
import '../styles/Spinner.css';

function Spinner() {
  return (
    <div className="swapping-squares-spinner">
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
    </div>
  );
}

export default Spinner;