import React, { useState, useRef, useEffect } from 'react';
import Popup from '../components/Popup.jsx';
import Popup2 from '../components/Popup2.jsx';
import Barrier from '../components/Barrier.jsx';
import Mine from '../assets/videos/Mine.mp4';
import Vidhi from '../assets/videos/Vidhi.mp4';
import Confetti from 'react-confetti';
import Burst from '../assets/audios/Burst.mp3';
import WaviyText from '../components/WaviyText.jsx';

const Home = () => {
  const [isFirstVideoVisible, setIsFirstVideoVisible] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSecondVideoVisible, setIsSecondVideoVisible] = useState(false);
  const [isSecondPopupOpen, setIsSecondPopupOpen] = useState(false);
  const [isBarrierVisible, setIsBarrierVisible] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiWidth, setConfettiWidth] = useState(window.innerWidth);
  const [confettiHeight, setConfettiHeight] = useState(window.innerHeight);
  const [numberOfPieces, setNumberOfPieces] = useState(3000);
  const firstVideoRef = useRef(null);
  const secondVideoRef = useRef(null);
  const audioRef = useRef(null);

  
      
 
  const handleEnter = () => {
    setIsBarrierVisible(false);
    setIsFirstVideoVisible(true);

    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 1000);
  };



  useEffect(() => {
    if (isFirstVideoVisible && firstVideoRef.current) {
      const videoElement = firstVideoRef.current;

      videoElement.play();
      videoElement.onended = () => {
        setIsFirstVideoVisible(false);
        setIsPopupOpen(true);
      };

      // Play the audio
      if (audioRef.current) {
        audioRef.current.play();
      }
   
      
      // Gradually decrease the confetti pieces over 5 seconds
        const interval = setInterval(() => {
          setNumberOfPieces(prev => Math.max(prev - 100, 0));
        }, 500);

      setTimeout(() => {
        clearInterval(interval);
          setShowConfetti(false);
        }, 10000);
    }
  }, [isFirstVideoVisible]);

  const handleStart = () => {
    setIsPopupOpen(false);
    setIsSecondVideoVisible(true);
  };

  useEffect(() => {
    if (isSecondVideoVisible && secondVideoRef.current) {
      const videoElement = secondVideoRef.current;

      videoElement.play();
      videoElement.onended = () => {
        setIsSecondVideoVisible(false);
        setIsSecondPopupOpen(true);
      };
    }
  }, [isSecondVideoVisible]);

  return (
    <div className="relative h-screen w-full bg-pink-400 flex flex-col justify-center items-center overflow-hidden">
       <div className="waviy absolute top-32 right-[32rem] z-20">
          <WaviyText/>
        </div>
      <audio ref={audioRef} src={Burst} />
      
      {showConfetti && <Confetti onEnter={handleEnter} 
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={numberOfPieces}
        recycle={false}
         style={{ zIndex: 999 }}
      />}
      
      {isBarrierVisible && <Barrier onEnter={handleEnter} />}

      <div className='absolute top-1 left-[40%] z-10' >
      </div>
      <div className='cropped-gif absolute left-0 z-10'>
       <img className='w-[20rem] h-[26rem] drop-shadow-lg' src='https://media.tenor.com/dx5mOwwCQ8cAAAAi/amor-balloons.gif'/>
      </div>
      <div className='absolute right-14 z-10'>
        <img className='w-[16rem] h-[22rem] drop-shadow-lg' src='https://media.tenor.com/vV0vqBZt4cIAAAAi/sparkling-pink-roses.gif'/>
      </div>
      <div className='absolute  opacity-15 fill-transparent z-0'>
        <img className='w-[90vw] h-[100vh]' src='https://media.tenor.com/yGH5RwRTBwEAAAAi/stars-glitter.gif'/>
      </div>
      
      {isFirstVideoVisible && (
        <div className="video-container mx-auto flex justify-center items-center z-10">
          <video ref={firstVideoRef} width="50%" height="50%" autoplay >
            <source src={Vidhi} type="video/mp4" />
          </video>
        </div>
      )}

      {isPopupOpen && <Popup onClose={handleStart} />}

      {isSecondVideoVisible && (
        <div className="z-30">
          <video ref={secondVideoRef} width="100%" height="100%" autoPlay >
            <source src={Mine} type="video/mp4" />
          </video>
        </div>
      )}

      {isSecondPopupOpen && <Popup2 />}
      
    </div>
  );
};

export default Home;