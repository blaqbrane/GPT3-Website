import React from 'react'
import {useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from "react-icons/ai"

const Navbar = () => {
    const[isopen, setIsopen] = useState(false)
    const handleClick=()=>{
        setIsopen(prevopen => !prevopen)
    }
  return (
    <div className='px-10 py-4'>
        <div className='flex justify-between items-center'>
            <div>
                <h1 className='font-bold'>GPT3</h1>
            </div>
            <ul className='hidden md:flex items-center p-1'>
                <li><a href='#home'>Home</a></li>
                <li className='m-4'><a href='#wgpt3'>What is GPT?</a></li>
                <li><a href='#possibility'>Open AI</a></li>
                <li className='m-4'><a href='#features'>Case Studies</a></li>
                <li><a href='#blog'>Library</a></li>
            </ul>
            <div className='hidden md:flex items-center'>
                <p className='m-2'>SIGN UP</p>
                <button className='transform animate-pulse rounded bg-red-700 px-10 py-3 font-bold'>SIGN IN</button>
            </div>
            <div className='block md:hidden' onClick={handleClick}>
                {isopen ? <AiOutlineClose size={20} />: <AiOutlineMenu size={20}/>}
            </div>
        </div>
        <div className={isopen ? 'fixed flex flex-col z-10 p-1 text-center top-0 left-0 bg-backgd h-full w-[80%] ease-in-out duration-500 border-r border-r-[gray] md:hidden': 'fixed left[-100%]'}>
            <ul className={isopen ? 'block': 'hidden'}>
                <li className='links' onClick={handleClick}><a href='#home'>Home</a></li>
                <li className='links' onClick={handleClick}><a href='#wgpt3'>What is GPT3?</a></li>
                <li className='links' onClick={handleClick}><a href='#possibility'>Open AI</a></li>
                <li className='links'onClick={handleClick}><a href='#features'>Case Studies</a></li>
                <li className='links'onClick={handleClick}><a href='#blog'>Library</a></li>
            </ul>
            <div className={isopen ? 'flex justify-center items-center': 'hidden'}>
                <p className='transform animate-pulse m-2 border text-xs border-red-500 px-10 py-3 text-red-500 rounded cursor-pointer' >SIGN UP</p>
                <button className=' bg-red-500 px-10 py-3 text-xs rounded'>SIGN IN</button>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar