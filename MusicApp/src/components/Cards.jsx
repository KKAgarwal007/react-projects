import React, { useContext } from 'react'
import { songsData } from '../songs'
import { MdPlaylistAdd, MdPlaylistRemove } from "react-icons/md";
import { MdOutlinePlaylistRemove } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { datacontext } from '../Context/UserContext';
import { useDispatch, useSelector } from 'react-redux';
import { AddSong, RemoveSong } from '../redux/PlaylistSlice';
import { AddLike, RemoveLike } from '../redux/LikedSlice';


function Cards({image, singer, name, songindex}) {
  let {playSong, index, setIndex} = useContext(datacontext);
  let dispatch = useDispatch();
  let gaana = useSelector((state) => state.playlist);
  const songexist = gaana.some((song) => song.songindex == songindex)
  let likedsong = useSelector((state) => state.liked)
  const likeexist = likedsong.some((song) => song.songindex == songindex)

  return (
    <div className='w-[90%] max-h-100px md:h-[120px] bg-gray-700 p-[5px] md:p-[10px] md:m-[10px] flex justify-between items-center mb-[10px]
    hover:bg-gray-600 rounded-lg transition-all'>
        <div className='flex justify-start items-center gap-5 w-[80%] h-[100%] cursor-pointer' onClick={() => {
          setIndex(songindex);
          playSong();
        }}>
            <div>
            <img src={image} alt="" className='md:w-[100px] md:max-h-[100px] w-[60px] max-h-[60px] rounded-lg'/>
            </div>
            <div className='text-[15px] md:text-[20px]'>
                <div className='text-white text-[1.2em] font-semibold'>{name}</div>
                <div className='text-gray-400 text-[0.7em] font-semibold'>{singer}</div>
            </div>
            
        </div>
        <div>
            <div className='flex justify-start items-center gap-5 w-[20%] h-[100%] text-[15px] md:text-[20px]'>
              {!songexist && (<div onClick={()=>{
                dispatch(AddSong({name: name, image: image, singer: singer, songindex: songindex}))
              }}> <MdPlaylistAdd className='text-white text-[1.5em] cursor-pointer'/> </div>)}

               {songexist && (<div onClick={()=>{
                dispatch(RemoveSong(songindex))
              }}> <MdPlaylistRemove className='text-white text-[1.5em] cursor-pointer'/> </div>)}
              {!likeexist && (<div onClick={()=>{
                dispatch(AddLike({name: name, image: image, singer: singer, songindex: songindex}))
              }
              }> <BiLike className='text-white text-[1.25em] cursor-pointer' /></div>)}

              {likeexist && (<div onClick={()=>{
                dispatch(RemoveLike(songindex))
              }
              }> <BiSolidLike className='text-white text-[1.25em] cursor-pointer' /></div>)}


              
            </div>

        </div>
    </div>
  )
}

export default Cards