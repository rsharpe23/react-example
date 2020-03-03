import React from 'react';
import './Burger.css';

function Burger(props) {
  return (
    <button type="button" className="d-flex d-md-none Burger Burger_active1">
      <span className="Burger-Stuffing"></span>
      <span className="Burger-Stuffing"></span>
      <span className="Burger-Stuffing"></span>
    </button>
  );
}

export default Burger;