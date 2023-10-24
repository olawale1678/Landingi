import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='h-[85vh]flex items-center           max-[428px]:mb-10'>
      <div className='widthOne grid grid-cols-2 max-[884px]:grid-cols-1'>
        <div className='rounded-s-md mt-20 overflow-hidden'>
          <img className='h-full max-[884px]:w-full' src="./img/signup-img.svg" alt="sign up image" />
        </div>

        <div className='shadow-lg p-10'>
          <div>
            <h1 className='text-xl font-semibold'>Sign Up</h1>
            <div className=' max-[884px]:grid-cols-2  max-[884px]:grid  max-[884px]:gap-5'>
              <label className='block my-5' htmlFor="username"><span className=' block text-xs tracking-wide font-semibold text-slate-400'>USERNAME</span><input className='rounded-md outline-none font-semibold text-lg h-10 w-full py-2 indent-4 mt-2 border-2 text-slate-600 border-blue-500' id='username' placeholder='Username' type="text" /></label>
              <label className='block my-5' htmlFor="password"><span className=' block text-xs tracking-wide font-semibold text-slate-400'>PASSWORD</span><input className='rounded-md outline-none font-semibold text-lg h-10 w-full py-2 indent-4 mt-2 border-2 text-slate-600 border-blue-500' id='password' placeholder='Password' type="password" /></label>
            </div>
            <label className='block my-5  max-[884px]:my-0  max-[884px]:mb-5' htmlFor="email"><span className=' block text-xs tracking-wide font-semibold text-slate-400'>EMAIL</span><input className='rounded-md outline-none font-semibold text-lg h-10 w-full py-2 indent-4 mt-2 border-2 text-slate-600 border-blue-500' id='email' placeholder='email' type="email" /></label>
            <button className='cta-btn w-full'>Login</button>
            <p className='text-lg my-3'>Already have an account <NavLink className='underline underline-offset-2 ml-1 transition ease-linear hover:text-blue-500' to="/login">sign In</NavLink></p>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   signup
    //   <img src="./img/signup-img.svg" alt="" />
    // </div>
  )
}

export default SignUp
