import React from 'react';
import textCutter from '../../utils/textCutter';
import "./Card.css";

const Card = ({ card, onCardClick }) => {
  const handleClick = () => {
    onCardClick(card);
  };

  return (
    <div className="card min-w-[200px] min-h-[300px] max-h-[300px] bg-white hover:bg-gray-100 hover:brightness-90 transition-all duration-300 cursor-pointer" onClick={handleClick}>
      <img src="https://via.placeholder.com/200x150" alt="test" />
      <div className="card-content">
        <p className='text-gray-500'>{card.seller}</p>
        <p className="card-title">{textCutter(card.title, 21)}</p>
        <p className="text-xl font-bold">{card.price}</p>
        <p>{card.location}</p>
      </div>
    </div>
  );
};

export default Card;