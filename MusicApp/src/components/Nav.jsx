import React from 'react'
import { IoMdHome } from "react-icons/io";
import { ImSearch } from "react-icons/im";
import { RiPlayListFill } from "react-icons/ri";
import { BiSolidLike } from "react-icons/bi";
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className='w-full h-[80px] bg-black fixed bottom-0 md:top-0 text-white flex justify-around md:justify-center items-center gap-[50px] p-[10px] z-20 rounded-t-[30px] md:rounded-none shadow-lg'>

            <Link to={"/"}><IoMdHome className='w-[30px] h-[30px]' /></Link>
            <Link to={"/search"}>
                <ImSearch className='w-[23px] h-[23px]' />
            </Link>
            <Link to={"/playlist"}>
                <RiPlayListFill className='w-[23px] h-[23px]' />
            </Link>
            <Link to={"/liked"}>
                <BiSolidLike className='w-[25px] h-[25px]' />
            </Link>
        </div>
    )
}

export default Nav