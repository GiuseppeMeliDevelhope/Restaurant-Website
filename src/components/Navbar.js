import React, { useState } from 'react';
import useMediaQuery, { breakPoints } from '../hooks/useMediaQuery';
import { Link } from 'react-scroll';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

function Navbar() {

const isDesktop= useMediaQuery(breakPoints.md);
const [nav, setNav] = useState(false);
const handleClick = () => setNav(!nav);
const handleClose = () => setNav(!nav);

  return (
    <div className='grid grid-cols-6 lg:grid-cols-14 relative h-[80px] z-10 drop-shadow-lg text-yellow-500 mr-[30px]'>
    <div className='col-start-6 col-end-6 tab:col-start-6 tab:col-end-6 md:col-start-5 md:col-end-7 lg:col-start-8 lg:col-end-15 xl:col-start-9 xl:col-end-15 flex gap-[30px] items-center justify-end mr-[20px]'>
        <h1 className='font-bold text-[20px] lg:text-[27px] mr-[60px] md:mr-0'>
            PIZZICOTTI
        </h1>
        <ul className='hidden md:flex gap-[20px] text-[20px] lg:text-[27px]'>
            <li className='cursor-pointer hover:opacity-[0.7] p-0'>
                <Link to='home' smooth={true} duration={500}>
                   HOME
                </Link>
            </li>
            <li className='cursor-pointer hover:opacity-[0.7] p-0'>
                <Link to='menu' smooth={true} duration={500} offset={0}>
                   MENU
                </Link>
            </li>
            <li className='cursor-pointer hover:opacity-[0.7] p-0'>
                <Link to='footer' smooth={true} duration={500} offset={0}>
                   EVENTS
                </Link>
            </li>
            <li className='cursor-pointer hover:opacity-[0.7] p-0'>
                <Link to='footer' smooth={true} duration={500} offset={-100}>
                   CONTACT
                </Link>
            </li>
        </ul>
        {isDesktop ? null : (
            <div className='absolute z-30' onClick={handleClick}>
                {!nav ? (
                    <MenuIcon className='w-7 cursor-pointer' />
                ) : (
                    <XIcon className='w-7 cursor-pointer' />
                )}
            </div>
        )}
     </div>

    {isDesktop ? null :(
        <div className={!nav ? "hidden" : "flex flex-col gap-[10px] text-center font-semibold text-[30px] w-screen h-screen absolute top-0 p-[20px] pt-[80px] bg-[#000000f7] z-20"}>
           <Link className='w-full cursor-pointer hover:opacity-[0.7]' onClick={handleClose}  smooth={true} duration={500}>
                   HOME
                </Link>
                <Link className='w-full cursor-pointer hover:opacity-[0.7]' onClick={handleClose} smooth={true} duration={500} offset={0}>
                   MENU
                </Link>
                <Link className='w-full cursor-pointer hover:opacity-[0.7]' onClick={handleClose}  smooth={true} duration={500} offset={-50}>
                   EVENTS
                </Link>
                <Link className='w-full cursor-pointer hover:opacity-[0.7]' onClick={handleClose}  smooth={true} duration={500} offset={-100}>
                   CONTACT
                </Link>
        </div>
    )}


    </div>
  )
}

export default Navbar;