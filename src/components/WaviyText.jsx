import React from 'react';

const WaviyText = () => {
  return (
    <div className="waviy">
      {['V', 'I', 'D', 'H', 'I'].map((letter, index) => (
        <span className='tracking-widest text-pink-800 font-Lemon font-bold' key={index} style={{ '--i': index + 1 }}>{letter}</span>
      ))}
    </div>
  );
};

export default WaviyText;
