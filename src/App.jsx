import './App.css';
import { useState } from 'react';
import CardList from './components/CardList.jsx';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleRegisterClick = () => {
    setShowRegisterModal(true);
    console.log("Register Clicked");
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">UNIST 짐 보관 서비스</h1>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={handleLoginClick}>
            로그인하기
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleRegisterClick}>
            회원가입
          </button>
        </div>
      </header>
      <main>
        <div className='ml-10 mr-10 mt-3'>
            <h2 className="text-xl ml-3 mb-4 font-bold">See What's Here</h2>
            <CardList />
        </div>
      </main>
      {(showLoginModal && !showRegisterModal) && <LoginModal onClose={handleCloseModal} />}
      {(showRegisterModal && !showLoginModal) && <RegisterModal onClose={handleCloseModal} />}
    </div>
  );
}

export default App;
