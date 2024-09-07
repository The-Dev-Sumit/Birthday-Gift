import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward, faDownload } from '@fortawesome/free-solid-svg-icons';
import song1 from '../assets/audios/song1.mp3';
import song2 from '../assets/audios/song2.mp3';
import song3 from '../assets/audios/song3.mp3';
import song4 from '../assets/audios/song4.mp3';
import song5 from '../assets/audios/song5.mp3';
import song6 from '../assets/audios/song6.m4a';
import song7 from '../assets/audios/song7.m4a';
import song8 from '../assets/audios/song8.m4a';
import song9 from '../assets/audios/song9.m4a';
import song10 from '../assets/audios/song10.wav';
import song11 from '../assets/audios/song11.wav';
import song12 from '../assets/audios/song12.mp3';
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';
import img6 from '../assets/images/img6.jpg';
import img7 from '../assets/images/img7.jpg';
import img8 from '../assets/images/img8.jpg';
import img9 from '../assets/images/img9.jpg';
import img10 from '../assets/images/img10.jpg';
import img11 from '../assets/images/img11.jpg';
import img12 from '../assets/images/img12.jpg';

const Mine = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const songs = [
    { title: 'Main Koi Aisa Geet Gaun', src: song1, img: img1 },
    { title: 'Main Rahun Ya Na Rahu', src: song2, img: img2 },
    { title: 'Tum Aur Main', src: song3, img: img3 },
    { title: 'O Meri Jana', src: song4, img: img4 },
    { title: 'Tumhe Jo Maine Dekha', src: song5, img: img5 },
    { title: 'Aaj Se Teri', src: song6, img: img6 },
    { title: 'Neele Neele Ambar Par', src: song7, img: img7 },
    { title: 'Suno Na', src: song8, img: img8 },
    { title: 'Chaar Kadam', src: song9, img: img9 },
    { title: 'Channa mereya', src: song10, img: img10 },
    { title: 'Mrighnaini', src: song11, img: img11 },
    { title: 'Dil Jaane Jigar', src: song12, img: img12 },
  ];


   useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    audio.addEventListener('timeupdate', updateProgress);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
    };
   }, [currentSongIndex]);
  
  
  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
  const nextIndex = (currentSongIndex + 1) % songs.length;
  setCurrentSongIndex(nextIndex);
  setIsPlaying(true); 
  setTimeout(() => {
    audioRef.current.play();
  }, 0); 
  };
  
   const handlePrevious = () => {
  const previousIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  setCurrentSongIndex(previousIndex);
  setIsPlaying(true); // Set isPlaying to true to start playing the previous song
  setTimeout(() => {
    audioRef.current.play();
  }, 0); // Ensures play starts after state update
  };
  
  const handleProgressBarChange = (e) => {
    const audio = audioRef.current;
    const newTime = (e.target.value / 100) * audio.duration;
    audio.currentTime = newTime;
    setProgress(e.target.value);
  };

  const handleSongClick = (index) => {
  setCurrentSongIndex(index);
  setIsPlaying(true); // Ensure that the selected song starts playing automatically
  setTimeout(() => {
    audioRef.current.play();
  }, 0); // Play the song after state updates
};


  return (
     <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-800 text-white">
      <div className="w-[32rem] relative h-screen bg-gray-600 backdrop-blur-lg p-4">
        <div className="absolute top-2 w-[23rem] h-[20rem] bg-black left-[4rem] rounded-md overflow-hidden  px-1 py-1">
          <img
            src={songs[currentSongIndex].img}
            alt={`Album cover of ${songs[currentSongIndex].title}`}
            className="w-full h-full object-contain rounded-md"
          />
        </div>

        <div className="absolute  top-[20rem] left-[5rem]">
        <input
          type="range"
          value={progress}
            onChange={handleProgressBarChange}
            className='w-[20rem] cursor-pointer h-[2px] bg-gray-300 rounded-md'
        />
      </div>

        <div className="text-center mt-[23rem] mr-5 py-1">
          <h2 className="text-lg font-bold">{songs[currentSongIndex].title}</h2>
        </div>

        <audio ref={audioRef} src={songs[currentSongIndex].src} onEnded={handleNext} />

        <div className=" absolute top-[21.5rem] text-xl left-[10rem] flex justify-center gap-2 ">
          <button onClick={handlePrevious} className="bg-transparent px-4 py-2 rounded-full">
          <FontAwesomeIcon icon={faBackward} />
          </button>
          <button onClick={handlePlayPause} className="bg-transparent  px-4 py-2 rounded-full">
             <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
          </button>
          <button onClick={handleNext}  className="bg-transparent px-4 py-2 rounded-full">
           <FontAwesomeIcon icon={faForward} />
          </button>
        </div>

        <div className="scroll space-y-2 mt-[.7rem] h-[230px]  overflow-y-auto">
  {songs.map((song, index) => (
    <div key={index} className="flex justify-between items-center h-10 w-full  px-4">
      <span 
        onClick={() => handleSongClick(index)}
        className={`cursor-pointer font-DaysOne  bg-transparent rounded-md flex-grow ${
          index === currentSongIndex ? 'text-white' : 'text-white'} hover:text-green-400 text-shadow-custom`}
      >
        {song.title}
      </span>
      <a
        href={song.src}
        download
        className="text-md bg-transparent text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <FontAwesomeIcon icon={faDownload} />
      </a>
    </div>
          ))}
        </div>
      </div>
      <div className='absolute top-[15rem] font-Righteous tracking-wider text-lg left-3 text-center w-[25rem] bg-transparent'>
          <h2>" Kya tumhe woh din yaad hai?, <br/> jab tumhe madad chahiye tha, <br/> par bharose ke layak koi mard jaat nhi tha, <br/> tum mile to anjaane me the, <br/> par jab aaj sochta hu to woh din bhi kya din the. "</h2>
        </div>

        <div className='absolute top-[15rem] font-Righteous tracking-wider text-lg right-3 text-center w-[25rem] bg-transparent'>
          <h2>" Suno, tumhe ek baat batani hai, <br/> mujhe jyada baat karni nhi aati, <br/> par fir bhi tumhe sunani hai, <br/> main bahot achha nhi dikhta, naahi paise wala hu, <br/> mujhme bas ek sachhai hai jo agar tum dekh sako to tumhe dikhani hai. "</h2>
        </div>
    </div>
  );
}

export default Mine;