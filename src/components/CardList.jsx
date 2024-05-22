import React, { useState } from 'react';
import Card from './Card/Card';
import Modal from './Modal';

const CardList = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  const cards = [
    { id: 1, title: 'Short', price: '100', seller: 's1', location: 'location1' },
    { id: 2, title: 'This is a long text. I wonder how long would this?', price: '200', seller: 'seller name2', location: 'location2' },
    { id: 3, title: '한국어', price: '300', seller: 'seller name34', location: 'location3' },
    { id: 4, title: '긴 한국어 테스트 테스트테스트', price: '400', seller: 'seller name1', location: 'location4' },
    { id: 5, title: 'Summer time', price: '500', seller: 'seller name14', location: 'location5' },
    { id: 6, title: 'Winter time', price: '600', seller: 'seller name234', location: 'location6' },
    { id: 7, title: 'Never gonna give you up', price: '700', seller: 'seller name123', location: 'location7' },
    { id: 8, title: 'Never gonna let you down', price: '800', seller: 'seller name235', location: 'location8' },
    { id: 9, title: 'Never gonna turn around', price: '900', seller: 'seller name1234', location: 'location9' }
  ];

  return (
    <div>
      <div className="flex overflow-x-auto mb-4">
        {cards.map((card) => (
        <Card key={card.id} card={card} onCardClick={handleCardClick} />
        ))}
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">+ Add Mine!</button>
      {selectedCard && <Modal card={selectedCard} onClose={handleCloseModal} />}
    </div>
  );
};

export default CardList;