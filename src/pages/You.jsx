import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextMorphAnimation from '../components/TextMorphAnimation';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';
import image5 from '../assets/images/image5.jpg';
import image6 from '../assets/images/image6.jpg';
import image7 from '../assets/images/image7.jpg';
import image8 from '../assets/images/image8.jpg';
import image9 from '../assets/images/image9.jpg';
import image10 from '../assets/images/image10.jpg';
import image11 from '../assets/images/image11.jpg';
import image12 from '../assets/images/image12.jpg';

const You = () => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const imageUrls = [
    image1, image2, image3, image4, image5, image6,
    image7, image8, image9, image10, image11, image12,
  ];

  const handleClick = () => {
    if (images.length < 12) {
      setImages([...images, { id: Date.now() }]);
    }
  };

  const handleNextClick = () => {
    navigate('/are'); 
  };

  
const positions = [
    { top: '2%', left: '3%' },  // Top-left
    { top: '2%', left: '21%' }, // Top-right
    { top: '2%', left: '40%' }, // Bottom-left
    { top: '2%', left: '54%' }, // Bottom-right
    { top: '2%', right: '18%' },  // Top-center
    { top: '2%', right: '3%' }, // Bottom-center
    { top:'39%', right: '3%' },  // Center-left
    { bottom: '2%', right: '1%' }, // Center-right
    { bottom: '2%', right: '42%' },  // Center-center
    { bottom: '2%', left: '29%' },  // Custom position 1
    { bottom: '2%', left: '3%' }, // Custom position 2
    { bottom: '37%', left: '3%' }, // Custom position 3
  ];

  return (
    <div className="relative overflow-hidden h-screen w-full bg-pink-600">
      <div className="flex justify-center items-center z-20">
        <TextMorphAnimation />
      </div>
      <div className="absolute w-full h-screen bg-transparent">
        <button
          onClick={handleClick}
          className="bg-pink-600 absolute bottom-[16rem] left-[35rem] hover:bg-blue-800 text-white px-4 py-3 rounded-full focus:outline-none z-50 tracking-wide"
        >
          Moments
        </button>

        <div className='absolute  opacity-15 fill-transparent z-0'>
        <img className='w-[90vw] h-[100vh]' src='https://media.tenor.com/yGH5RwRTBwEAAAAi/stars-glitter.gif'/>
        </div>
        
        {images.map((image, index) => (
          <div
            key={image.id}
            className="absolute z-50"
            style={{
              ...positions[index % 12],
              animationDelay: `${index * 0.2}s`,
            }}
          >
            <img
              src={imageUrls[index % 12]}
              alt={`popping effect ${index}`}
              style={{
                 height: index === 7 ? '150px' : index === 11 ? '170px' : '',
                 width: index === 7 ? '480px' : index === 11 ? '260px' : '',
               }}
              className=" h-[220px] rounded-md cursor-pointer shadow-lg transform transition-transform duration-300 hover:scale-125 z-20"
            />
          </div>
        ))}

        {images.length >= 12 && (
          <button
            onClick={handleNextClick}
            className="bg-transparent hover:bg-green-700 text-white px-4 py-2 rounded-full focus:outline-none absolute bottom-[16rem] left-[44rem] z-50"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default You;