import React from 'react'
import Bar from '../assets/images/bar.png';

const Barrier = ({ onEnter }) => {
  return (
    <div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50'>
      <img src={Bar} alt="Barrier" className="h-full w-full object-cover" />
      <button
        onClick={onEnter}
        className="absolute bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white text-lg font-bold py-3 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none"
      >
        Enter
      </button>
    </div>
  )
}

export default Barrier;
