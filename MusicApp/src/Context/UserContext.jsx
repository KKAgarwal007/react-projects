import React, { createContext, useEffect, useRef, useState } from 'react'
import Home from '../pages/Home';
import { songsData } from '../songs';

export const datacontext = createContext();
function UserContext({Children}) {
    let audioRef = useRef(new Audio());
    let [index, setIndex] = useState(0);
    let [playingSong, setPlayingSong] = useState(false);
    

    useEffect(() =>{
      audioRef.current.src = songsData[index].song;
      audioRef.current.load();
      if(playingSong){
        audioRef.current.play();
      }
    }, [index]) 

    function playSong(){
      setPlayingSong(true);
      audioRef.current.play();
    }
    function pauseSong(){
      setPlayingSong(false);
      audioRef.current.pause();
    }

    function nextSong(){
      setIndex((perv) => (perv + 1)%songsData.length);
    }
    function prevSong(){
      setIndex((perv)=> {
        if(perv === 0){
          return songsData.length - 1;
        }
        else{
          return perv - 1;
        }
      })
    }
    let value = {
audioRef, playSong, pauseSong, playingSong, setPlayingSong, nextSong, index, setIndex, prevSong
    }
  return (
    <div>
        <datacontext.Provider value={value}>
            {Children}
        </datacontext.Provider>
    </div>
  )
}

export default UserContext