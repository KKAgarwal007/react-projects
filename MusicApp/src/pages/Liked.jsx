import React from 'react'
import Player from '../components/Player'
import { useSelector } from 'react-redux'
import Cards from '../components/Cards'

function Liked() {
  let songs = useSelector((state) => state.liked)
  return (
    <div className='w-[100%] h-[100vh] bg-black flex flex-col justify-start items-center md:pt-[100px] pt-[20px] gap-[30px]'>
      <Player/>


      {!songs.length<1? <><h1>Liked Song</h1>
      <div className='w-full md:h-[100%] h-[70%] flex flex-col justify-start items-center gap-[10px] overflow-auto '>
        {songs.map((song)=>(
          <Cards name={song.name} image={song.image} singer={song.singer} songindex={song.songindex}/>
        ))}
      </div></>:
      <div className='text-gray-700 text-[30px] font-semibold'>No Songs in Liked</div>}
      
    </div>
  )
}

export default Liked