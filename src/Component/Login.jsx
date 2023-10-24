import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {
  return (
    <div className='h-[85vh] flex items-center'>
      <div className='widthOne grid grid-cols-2 max-[884px]:grid-cols-1'>
        <div className='rounded-s-md mt-20 overflow-hidden'>
          <img className='h-full max-[884px]:w-full' src="./img/login-img.jpg" alt="" />
        </div>

        <div className='shadow-lg p-10 '>
          <div>
            <h1 className='text-xl font-semibold'>Log In</h1>
            <div className=' max-[884px]:grid-cols-2  max-[884px]:grid  max-[884px]:gap-5'>
              <label className='block my-5' htmlFor="username"><span className=' block text-xs tracking-wide font-semibold text-slate-400'>USERNAME</span><input className='rounded-md outline-none font-semibold text-lg h-10 w-full py-2 indent-4 mt-2 border-2 text-slate-600 border-blue-500' id='username' placeholder='Username' type="text" /></label>
              <label className='block my-5' htmlFor="password"><span className=' block text-xs tracking-wide font-semibold text-slate-400'>PASSWORD</span><input className='rounded-md outline-none font-semibold text-lg h-10 w-full py-2 indent-4 mt-2 border-2 text-slate-600 border-blue-500' id='password' placeholder='Password' type="text" /></label>
            </div>
            <button className='cta-btn w-full'>Login</button>
            <p className='text-lg mt-3'>Don't have an account <NavLink className='underline underline-offset-2 ml-1 transition ease-linear hover:text-blue-500' to="/signup">sign up</NavLink></p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login
