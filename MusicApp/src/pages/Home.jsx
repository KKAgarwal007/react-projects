import React, { useContext, useEffect, useRef, useState } from 'react'
import { songsData } from '../songs'
import Music from '../assets/musicanim.webp';
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { datacontext } from '../Context/UserContext';
import { FaPause } from "react-icons/fa6";  
import Cards from '../components/Cards';
import { MdKeyboardArrowDown } from "react-icons/md";
import Player from '../components/Player';
function Home() {
  let {audioRef,playSong,pauseSong,playingSong,nextSong, setIndex, index, prevSong} = useContext(datacontext);
  let [range, setRange] = useState(0);
  let progress = useRef(null);
  let [arrow, setArrow] = useState(false);
  useEffect(() =>{
    const updateprogress = () =>{
      let duration = audioRef.current.duration || 0;
      let currentTime = audioRef.current.currentTime || 0;
      let progressPercentage = (currentTime/duration) * 100 || 0;
      setRange(progressPercentage);
      if(progress.current){
        progress.current.style.width = `${progressPercentage}%`;
      }
      if(progress.current && progressPercentage === 100){
        setIndex((prevIndex) => (prevIndex + 1) % songsData.length);
        audioRef.current.currentTime = 0; // Reset current time to 0
        playSong(); // Play the next song automatically
      }


    }
    audioRef.current.addEventListener('timeupdate', updateprogress);
  })
 function handleRange(e){
    let newrange = e.target.value;
    setRange(newrange);
    audioRef.current.currentTime = (newrange * audioRef.current.duration)/100;
 }


  return (
    <div className='w-full flex h-screen bg-black overflow-hidden'>
      <MdKeyboardArrowDown className={`text-white absolute top-[30px] left-[7%] text-[30px] md:hidden ${arrow?"rotate-[-90deg]":null} cursor-pointer`} onClick={()=>setArrow(prev=>!prev)}/>
      {!arrow?<>
        <div className='w-[100%] md:w-[50%] flex flex-col justify-start items-center md:pt-[100px] p-[30px] pt-[50px] gap-[10px]'>
            <h1 className='text-white font-semibold text-[20px] mt-[20px]'>Now Playing</h1>
            <div className='w-full max-w-[250px] h-[250px] object-fill rounded-md overflow-hidden relative flex justify-center items-center mt-[20px]'>
                <img src={songsData[index].image} alt="" />
                {playingSong ?
                <div className='w-full h-full bg-black absolute top-0 opacity-[0.6] flex justify-center items-center'>
                <img src={Music} alt="" className='w-[50%]' />  
                </div>: null}
            </div>
            <div>
            <div className='text-white font-bold text-[20px] md:text-[30px]'>
                {songsData[index].name}
            </div>
            <div className='text-gray-400 font-semibold text-[20px] md:text-[20px] text-center'>
            {songsData[index].singer}
            </div>

            </div>

            <div className='w-[50%] flex justify-center items-center mt-[10px] md:mt-[10px] relative rounded-md '>
              <input type="range" className='appearance-none w-[100%] h-[3px] rounded-md' id='range' value={range} onChange={handleRange}/>

              <div className={`bg-blue-500 h-[6px] absolute left-0`} ref={progress}>

              </div>
            </div>
            <div className='text-white flex justify-center items-center gap-5 pt-[10px] mt-[20px]'>
            <MdSkipPrevious className='w-[28px] h-[28px]  hover:text-gray-600
             cursor-pointer transition-all' onClick={() => prevSong()} />
             {!playingSong ?
             <div className='w-[50px] h-[50px] rounded-full bg-white text-black flex justify-center items-center hover:bg-gray-600
             cursor-pointer transition-all' onClick={()=>playSong()}><FaPlay className='w-[15px] h-[15px]' /></div>
             :
             <div className='w-[50px] h-[50px] rounded-full bg-white text-black flex justify-center items-center hover:bg-gray-600
             cursor-pointer transition-all' onClick={() => pauseSong()}><FaPause className='w-[20px] h-[20px]' /></div>
             }
            
             

            <MdSkipNext className='w-[28px] h-[28px]  hover:text-gray-600
             cursor-pointer transition-all' onClick={() => nextSong()}/>
            </div>
           

        </div>

        <div className='w-[100%] md:w-[50%] h-full md:flex flex-col hidden pt-[120px] rounded-lg bg-slate-800 overflow-auto'>
          
          {songsData.map((song) => (
            <Cards name={song.name} image={song.image} singer={song.singer} songindex={song.id-1}/>
          ))}

        </div>
      </>: 
      <div className='w-[100%] md:w-[50%] h-[70%] flex flex-col mt-[70px] items-center rounded-lg bg-black overflow-auto pb-[70px] relative'>
                <Player/>
          {songsData.map((song) => (
            <Cards name={song.name} image={song.image} singer={song.singer} songindex={song.id-1}/>
          ))}

        </div>}
        
      
    </div>
  )
}
 
export default Home