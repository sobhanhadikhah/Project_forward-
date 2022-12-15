import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import Button from './Button';
function Navbar() {
  const [Toggleh, setToggleh] = useState(false);
  const handleToggleclick = () => setToggleh(!Toggleh)
  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg  ' >
      <div className='px-2 flex justify-between items-center w-full h-full' >
        <div className='flex items-center' >
          <h1 className='animate__animated animate__jackInTheBox text-3xl font-bold mr-4 sm:text-4xl' >
            Brand.
          </h1>
          <ul className="hidden md:flex font-semibold ">
            <NavLink to={`/home`} className={`p-4 hover:text-purple-600 transition duration-200  ease-linear  `} > Home </NavLink>
            <NavLink className={`p-4 hover:text-purple-600 transition duration-200  ease-linear  `} > Support </NavLink>
            <NavLink className={`p-4 hover:text-purple-600 transition duration-200  ease-linear  `} > About </NavLink>
            <NavLink className={`p-4 hover:text-purple-600 transition duration-200  ease-linear  `} > Platforms </NavLink>

          </ul>
        </div>
        <div className='hidden md:flex pr-4 pl-5 ' >
          <Button text={`Login`} animition={`transition duration-300 hover:scale-105 ease-in   `} newstyle={`border-none bg-transparent text-black `} />
          <Button text={`Sign up`} animition={`transition duration-300 hover:scale-105 ease-in  `} />
        </div>
        <div className='md:hidden  ' >

          {Toggleh === false ? <MenuIcon className={`w-[28px] mr-4 ${Toggleh === true ? " " : `animate__animated animate__rotateIn`} `}
            onClick={handleToggleclick} /> : <XIcon className={`w-5 mr-4 ${Toggleh === true ? "animate__animated animate__rotateIn " : ``}`} onClick={handleToggleclick} />}
        </div>
      </div>
      <div className={`${Toggleh === false ? "hidden " : `animate__animated  animate__fadeInDown  `}  bg-zinc-200 transition duration-300 ease-out   `} >
        <ul className={`flex flex-col text-center    md:hidden font-semibold  `}>
          <NavLink to={`/home`} className={`p-4 hover:text-purple-600 transition border-b-2 border-zinc-300 w-full duration-200  ease-linear  `} > Home </NavLink>
          <NavLink className={`p-4 hover:text-purple-600 transition duration-200  ease-linear border-b-2 border-zinc-300 w-full  `} > Support </NavLink>
          <NavLink className={`p-4 hover:text-purple-600 transition duration-200  ease-linear border-b-2 border-zinc-300 w-full  `} > About </NavLink>
          <NavLink className={`p-4 hover:text-purple-600 transition duration-200  ease-linear border-b-2 border-zinc-300 w-full   `} > Platforms </NavLink>

        </ul>
        <div className='flex flex-col md:hidden ' >
          <Button text={`Login`} animition={`transition duration-300 hover:scale-105 ease-in   `} newstyle={` bg-transparent text-black py-2 my-3 mx-2 `} />
          <Button text={`Sign up`} animition={`transition duration-300 hover:scale-105 ease-in  `} newstyle={` py-2 my-3 mx-2 `} />
        </div>
      </div>
    </div>
  )
}

export default Navbar