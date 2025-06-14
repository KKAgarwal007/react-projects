import React, { useContext } from 'react'
import { songsData } from '../songs';
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";  
import { datacontext } from '../Context/UserContext';

function Player() {
    let {playingSong, playSong, pauseSong, index} = useContext(datacontext);
  return (
    <div className='w-[100%] md:w-[70%] h-[100px] md:h-[120px] bg-white fixed bottom-[50px] md:bottom-0 rounded-t-[30px] flex'>
         <div className='flex justify-start items-center gap-5 w-[80%] h-[100%] cursor-pointer pb-[40px] md:pb-[15px] pt-[10px] pl-[20px]'>
            <div>
            <img src={songsData[index].image} alt="" className='md:w-[100px] md:max-h-[100px] w-[60px] max-h-[60px] rounded-lg'/>
            </div>
            <div className='text-[15px] md:text-[20px]'>
                <div className='text-black text-[1.2em] font-semibold'>{songsData[index].name}</div>
                <div className='text-gray-800 text-[0.7em] font-semibold'>{songsData[index].singer}</div>
            </div>
         </div>
         <div className='pt-[15px] md:pt-[25px] md:pl-[50px]'>

             {!playingSong ?
                         <div className='w-[50px] md:w-[70px] h-[50px] md:h-[70px] rounded-full bg-black text-white flex justify-center items-center hover:bg-gray-600
                         cursor-pointer transition-all' onClick={()=>playSong()}><FaPlay className='w-[15px] h-[15px]' /></div>
                         :
                         <div className='w-[50px] h-[50px] md:h-[70px] md:w-[70px] rounded-full bg-black  text-white flex justify-center items-center hover:bg-gray-600
                         cursor-pointer transition-all' onClick={() => pauseSong()}><FaPause className='w-[20px] h-[20px]' /></div>
                        }
            
        </div>
    </div>
  )
}

export default Player