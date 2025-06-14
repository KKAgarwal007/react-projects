import React, { useEffect, useState } from 'react'
import Player from '../components/Player'
import { IoSearch } from "react-icons/io5";
import { songsData } from '../songs';
import Cards from '../components/Cards';

function Search() {
  let [newlist, setNewList] = useState([]);
  let [input, setInput] = useState("");
  useEffect(() =>{
    let a = songsData.filter((song) => (song.name.toLowerCase().includes(input)) || (song.singer.toLowerCase().includes(input)) || (song.name.includes(input)) || (song.singer.includes(input)) || (song.name.toUpperCase()
      .includes(input)) || (song.singer.toUpperCase().includes(input))); 
    setNewList(a);
  }, [input])
  return (
    <div className='w-[100%] h-[100vh] bg-black flex flex-col justify-start items-center md:pt-[100px] pt-[20px] gap-[30px]'>
      <Player/>
      <form action="" className='w-[90%] md:w-[60%] h-[70px] md:h-[80px] bg-gray-800 flex justify-center items-center gap-5 rounded-lg overflow-hidden p-[20px] md:p-0' onSubmit={(e) => e.preventDefault()}>
      <IoSearch className='text-gray-200 text-[20px]'/>   
        <input type="text" className='w-[90%] h-[100%] bg-gray-800 outline-none border-0 text-white p-[10px] text-[20px]' placeholder='Search songs' onChange={(e) => setInput(e.target.value)} value={input} />
      </form>
      {input? <div className='w-[100%] h-[70%] md:h-[100%] flex flex-col justify-start items-center gap-5 overflow-auto'>
          {newlist.map(song => (
            <Cards name={song.name} singer={song.singer} songindex={song.id - 1} image={song.image}/>
          ))}
      </div>:<div className='text-gray-700 text-[30px] font-semibold'>Search Songs</div>}
     
    </div>
  )
}

export default Search