import React from 'react';

import './Modal.css';

const Modal = ({ card, onClose }) => {
  return (
    <div className="modal-backdrop fixed inset-0 bg-black bg-opacity-50">
        <div className="modal inset-0 flex items-center justify-center z-50">
            <span className="modal-close absolute top-2 right-2 cursor-pointer" onClick={onClose}>✖</span>
            <div className="modal-content bg-white rounded-lg p-1">
                <img src="https://via.placeholder.com/600x200" alt="test" />
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                            <img src="https://via.placeholder.com/50" alt="Profile" className="rounded-full mr-2" />
                            <div>
                                <div className="font-bold">{card.seller}</div>
                                <div className="text-gray-500 text-sm">welcome to my...</div>
                            </div>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold">{card.title}</h3>
                    <p className="text-lg font-bold">{card.price} / box</p>
                    <p>Location: {card.location}</p>
                    <p>Description: Test paragraph 1</p>
                    <p>Test paragraph 2</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Contact!</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Modal;