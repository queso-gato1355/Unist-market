import React, { useState } from 'react';

const LoginModal = ({ onClose }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 로직 구현
    console.log('ID:', id);
    console.log('Password:', password);
  };

  return (
    <div className="modal fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-content bg-white rounded-lg shadow-lg p-6">
        <span className="modal-close absolute top-2 right-2 cursor-pointer" onClick={onClose}>
          ✖
        </span>
        <h2 className="text-2xl mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="id" className="block text-sm font-bold mb-2">
              ID
            </label>
            <input
              type="text"
              id="id"
              className="w-full p-2 border rounded"
              placeholder="Enter your ID..."
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded"
              placeholder="Enter your password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Login
          </button>
        </form>
      </div>
      <div className="modal-backdrop fixed inset-0 bg-black bg-opacity-50"></div>
    </div>
  );
};

export default LoginModal;