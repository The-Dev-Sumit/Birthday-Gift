import React, { useState, useEffect, useRef } from 'react';
import Moon from '../assets/images/moon.png';
import Stars from '../components/Stars';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';

const NightSky = () => {
    const [showWishForm, setShowWishForm] = useState(false);
    const wishInputRef = useRef(null);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

      // Trigger the starfall after a certain delay (e.g., 10 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWishForm(true);
    }, 5000); // 10 seconds delay before stars fall

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  const handleWishSubmit = (event) => {
    event.preventDefault();
    const wish = wishInputRef.current.value;
      alert(`God Vidhi Ne Jo Bhi Manga Ho Use Mil Jaye`);
      
      wishInputRef.current.value = '';

      setShowModal(true);
    };

     const handleCloseModal = () => {
    setShowModal(false);
  };
    
  return (
   <div className="h-screen w-full bg-black relative overflow-hidden">
      {/* Moon */}
          <span className="absolute top-[4rem] left-[30rem] w-[25rem] h-[25rem]  rounded-full z-20">
            <img src={Moon} alt="Moon" className="w-full h-full object-cover" />
      </span>

      {/* Stars */}
      <span className="absolute inset-0">
        {[...Array(500)].map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 object-fill animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          > <Stars/></span>
        ))}
      </span>

      {/* Starfall effect */}
      {showWishForm && (
        <span className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <span
              key={i}
              className="absolute h-2 w-4 animate-fall"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 5 + 2}s`,
              }}
            ><Stars/></span>
          ))}

          {/* Wish Form */}
          <form
            onSubmit={handleWishSubmit}
            className="absolute bottom-[7rem] left-[35rem] transform  text-center animate-fade-slide-up"
          >
            <input
              type="text"
              name="wish"
              placeholder="Koi Wish Maang Lo..."
                          className="p-2 rounded-lg border-2 border-white text-black"
                           ref={wishInputRef}
            />
            <button
              type="submit"
                          className="ml-4 p-2 rounded-lg bg-blue-500 text-white"
                         
            >
              My Wish
            </button>
          </form>
              </span>
              
          )}
           {showModal && (
        <Modal onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default NightSky