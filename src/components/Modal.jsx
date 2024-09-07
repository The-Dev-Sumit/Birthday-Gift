import React from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleGoToNextRoute = () => {
    navigate('/mine'); // Replace with your desired route
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded-lg text-center">
        <h2 className="text-xl mb-4">Thank you for Coming in My Life</h2>
        <button
          onClick={handleGoToNextRoute}
          className="p-2 bg-blue-500 text-white rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Modal;
