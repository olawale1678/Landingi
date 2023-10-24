import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {RiHome3Line} from 'react-icons/ri'
import {HiOutlineDocumentRemove} from 'react-icons/hi'
import {FiLogIn} from 'react-icons/fi'

const Nav = () => {
  return (    
    <div >

      <nav className=' px-7 py-3 bg-white flex w-full fixed z-50 justify-between'>
          <div className='flex items-center'>
              <Link to='/'>
                  <img className='w-48' src="./img/nav img.jpeg" alt="nav logo" />
              </Link>
          </div>

          <ul className='w-full flex items-center justify-end'>
            <li className='max-[600px]:hidden'><NavLink className='tag' to='/home'>home</NavLink></li>
            <li className='max-[600px]:hidden'><NavLink className='tag' to="/resume">Resume</NavLink></li>
            <li className='max-[600px]:hidden'><NavLink className='text-lg max-[770px]:px-4 max-[770px]:text-base outline-none hover:text-slate-500 text-blue-500 px-7 py-2 font-semibold block transition ease-linear capitalize' to="/login"><span>login</span></NavLink></li>
            <li><NavLink className='cta-btn' to="/signup">sign up</NavLink></li>
          </ul>
      </nav>

      <ul className='w-full justify-end z-50 hidden        max-[600px]:fixed max-[600px]:items-center max-[600px]:flex max-[600px]:bottom-0 max-[600px]:bg-slate-300  max-[600px]:grid  max-[600px]:grid-cols-3 px-5 max-[600px]:inline-block'>
        <li><NavLink className='tag    max-[600px]:flex max-[600px]:items-center max-[600px]:text-xl ' to='/home'> <RiHome3Line/><span>home</span></NavLink></li>
        <li><NavLink className='tag    max-[600px]:flex max-[600px]:items-center max-[600px]:text-xl ' to="/resume"><HiOutlineDocumentRemove/> <span>Resume</span></NavLink></li>
        <li><NavLink className='text-lg outline-none     max-[770px]:px-4 max-[770px]:text-base max-[600px]:flex max-[600px]:items-center max-[600px]:text-xloutline-none hover:text-slate-500 text-blue-500 px-7 py-2 font-semibold block transition ease-linear capitalize' to="/login"><FiLogIn/><span>login</span></NavLink></li>
        <li className='max-[600px]:hidden'><NavLink className='cta-btn' to="/signup">sign up</NavLink></li>
      </ul>
    </div>
  )
}

export default Nav
