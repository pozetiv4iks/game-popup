import { useState } from 'react';
import { Popup } from './components/Popup/Popup';
import './App.css';

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleRestart = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="app">
      <button 
        className="open-button"
        onClick={() => setIsPopupOpen(true)}
      >
        Показать попап
      </button>

      <Popup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)}
        onRestart={handleRestart}
      />
    </div>
  );
}