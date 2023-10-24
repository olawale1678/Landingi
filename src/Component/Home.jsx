import React from 'react'
import {GrStar} from 'react-icons/gr';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="App w-full h-auto font-nunito">
      <main>
        <div className='bg-slate-100 pt-40 max-[428px]:pt-20'>
          <header className='text-center block tracking-wide widthOne leading-6 mx-auto      max-[428px]:pt-20'>
            <h5 className='font-semibold'>ONLINE RESUME BUILDER</h5>
            <h1 className='heading-one my-4   max-[428px]:my-3'>Only 2% of resumes make it past the first round. Be in the top 2%</h1>
            <h3 className='text-xl font-semibold    max-[428px]:text-sm'>Use professional field-tested resume templates that follow the exact ‘resume rules’ employers look for. Easy to use and done within minutes - try now for free!</h3>
            <NavLink to='/resume'>
              <button className='my-6 cta-btn'>Create My Resume</button>
            </NavLink>

            <div>
              <h5><span className='inline-block mr-1 items-center h-2 w-2 bg-green-400 rounded-full'></span>36,718 resumes created today</h5>
              <div className='mt-6 rounded-tr-md rounded-tl-md overflow-hidden shadow-sm'><img src="./img/hero img.avif" alt="hero image"/></div>
            </div>
          </header>
        </div>

        <section className='border-b-2 border-slate-200 '>

          <header>
            <h1 className='heading-one widthOne mx-auto newPhase'>Reviewed by the community. Trusted by professionals</h1>
          </header>

          <div className='widthTwo grid grid-cols-4 gap-4 newPhase     max-[884px]:grid max-[884px]:grid-cols-2 max-[884px]:gap-16 max-[428px]:grid-cols-1'>
            
            <div className='text-center relative z-10 max-[884px]:order-3 max-[428px]:hidden'>
              <div className='mb-8'>
                <h2 className='text-2xl'>4.5 out of 5</h2>
                <div className='arrangeStars'>
                  <GrStar className='starOne'/>
                  <GrStar className='starOne'/>
                  <GrStar className='starOne'/>
                  <GrStar className='starOne'/>
                  <GrStar className='text-3xl text-slate-300'/>
                </div>
              </div>

              <div className='text-center absolute bottom-0 right-0 w-full'>
                <svg className='w-24 h-9 flex mx-auto justify-center' xmlns="http://www.w3.org/2000/svg" width="600" height="148" viewBox="0 0 600 148" fill="none"><path d="M157.7 53.4h60.7v11.4h-23.9v64h-13.1v-64h-23.8l.1-11.4zm58.1 20.8H227v10.6h.2a16.7 16.7 0 015.8-8.1c1.4-1.2 3-2.2 4.8-2.9a14 14 0 015.3-1h2.9l1.6.2v11.6l-2.6-.4-2.6-.2a13.8 13.8 0 00-10.4 4.7 19 19 0 00-3.2 5.8c-.8 2.4-1.2 5-1.2 8v26h-12l.2-54.3zm86.8 54.6h-11.8v-7.6h-.2c-1.5 2.8-3.7 4.9-6.6 6.6a17.4 17.4 0 01-8.9 2.5c-7.1 0-12.3-1.7-15.5-5.3-3.2-3.5-4.8-9-4.8-16V74.1h12v33.5c0 4.8.9 8.2 2.8 10.2 1.8 2 4.4 3 7.7 3 2.5 0 4.6-.4 6.3-1.2 1.7-.8 3.1-1.8 4.1-3.2 1.1-1.3 1.8-2.9 2.3-4.7.5-1.8.7-3.8.7-5.9V74.2h12v54.6h-.1zm20.4-17.5c.4 3.5 1.7 6 4 7.5 2.3 1.4 5.1 2 8.3 2a27.5 27.5 0 007.8-1.2 7 7 0 003.1-2.3c.8-1 1.2-2.2 1.1-3.7a5.4 5.4 0 00-1.7-3.8c-1.1-1-2.4-1.7-4-2.4-1.6-.6-3.5-1.1-5.6-1.5l-6.4-1.4c-2.2-.5-4.4-1.1-6.5-1.8-2.1-.7-3.9-1.6-5.6-3-1.6-1.1-3-2.6-3.9-4.6-1-1.9-1.5-4-1.5-6.9 0-3 .7-5.4 2.2-7.4a16 16 0 015.5-4.8c2.2-1.3 4.7-2.2 7.4-2.7a42.2 42.2 0 0115.7.2c2.5.6 4.9 1.6 6.9 3 2.1 1.3 3.8 3 5.1 5.2 1.4 2 2.2 4.7 2.6 7.7H345c-.6-2.9-1.9-4.8-3.9-5.8A16 16 0 00334 82a17.6 17.6 0 00-6.3 1c-1 .4-1.9 1-2.6 1.7a4 4 0 00-1.1 3c0 1.4.5 2.5 1.5 3.4 1 1 2.3 1.6 4 2.3 1.6.6 3.5 1.1 5.6 1.5l6.5 1.5c2.2.5 4.3 1 6.4 1.8a17.5 17.5 0 019.6 7.4 14 14 0 011.5 6.7c0 3.2-.7 6-2.2 8.3a18.7 18.7 0 01-5.7 5.5c-2.3 1.4-5 2.4-7.8 3.1a35.6 35.6 0 01-18-.2c-2.9-.8-5.5-2-7.6-3.5a16.8 16.8 0 01-5-6 19.4 19.4 0 01-2-8.4h12.1v.1h.1zm39.5-37h9.1V57.7h12V74h10.8v9h-10.8v29.1l.2 3.3c.1 1 .4 1.8.7 2.4a4 4 0 001.7 1.4c.8.3 1.8.5 3.2.5l2.5-.1 2.5-.4v9.3l-3.9.4c-1.3.2-2.5.2-3.9.2-3.2 0-5.7-.3-7.6-.9a11 11 0 01-4.5-2.6 9.4 9.4 0 01-2.2-4.3c-.4-1.7-.6-3.8-.7-6V83.1h-9.1V74v.2zm40.3 0h11.3v7.4h.2c1.7-3.2 4-5.4 7-6.9 3-1.4 6.2-2 9.8-2 4.3 0 8 .6 11.2 2.3a21 21 0 017.9 6.2 26 26 0 014.7 9.2 41.3 41.3 0 01.2 22c-1 3.3-2.4 6.5-4.3 9a21.3 21.3 0 01-17.7 8.8 30.3 30.3 0 01-10.2-2 17.9 17.9 0 01-7.8-6.5h-.2V149h-12V74.2h-.1zm41.9 27.3a24.6 24.6 0 00-3.9-13.3 16 16 0 00-4.7-4.3 12.7 12.7 0 00-6.5-1.6c-5 0-8.8 1.7-11.4 5.2a23.9 23.9 0 00-3.8 14c0 2.9.3 5.4 1 7.7a17 17 0 003 6c1.3 1.7 2.9 3 4.8 4s4 1.6 6.5 1.6c2.8 0 5-.6 6.9-1.7 1.9-1.1 3.4-2.7 4.7-4.4 1.2-1.8 2.1-3.8 2.6-6 .5-2.5.8-4.8.8-7.2zm21.1-48.2h12v11.4h-12V53.4zm0 20.8h12v54.6h-12V74.2zm22.7-20.8h12v75.4h-12V53.4zm48.6 77c-4.3 0-8.2-.8-11.6-2.3a26.3 26.3 0 01-8.6-6 25.8 25.8 0 01-5.3-9 35.9 35.9 0 010-23 24 24 0 0113.9-15c3.4-1.6 7.3-2.4 11.6-2.4s8.2.7 11.6 2.2c3.4 1.5 6.2 3.5 8.6 6 2.3 2.5 4.1 5.6 5.3 9.1a35.3 35.3 0 010 23 24 24 0 01-13.9 15 29.9 29.9 0 01-11.6 2.3zm0-9.6a13.8 13.8 0 0011.7-6.2 19 19 0 002.8-6 27.7 27.7 0 000-14 18 18 0 00-2.8-6.2 14 14 0 00-11.7-6 13.8 13.8 0 00-11.7 6 18 18 0 00-2.8 6.1 27.5 27.5 0 000 14 18 18 0 002.8 6.1c1.3 1.8 2.9 3.4 4.8 4.5a13 13 0 006.9 1.7zm31-46.6h9.1V57.8h12V74H600v9h-10.8v29.1l.2 3.3c.1 1 .4 1.8.7 2.4a4 4 0 001.7 1.4c.8.3 1.8.5 3.2.5l2.5-.1 2.5-.4v9.3l-3.9.4c-1.3.2-2.5.2-3.9.2-3.2 0-5.7-.3-7.6-.9a11 11 0 01-4.5-2.6 9.4 9.4 0 01-2.2-4.3c-.4-1.7-.6-3.8-.7-6V83.1h-9.1V74v.2z" fill="#000"/><path d="M143.7 53.4H88.8L71.9 1l-17 52.4H0l44.4 32.4-17 52.4 44.4-32.4 44.4 32.4-16.9-52.4 44.4-32.4z" fill="#00B67A"/><path d="M103.1 97.7l-3.8-11.9-27.4 20 31.2-8.1z" fill="#005128"/></svg>
                <p className='text-sm'>based on 47,385 reviews</p>
              </div>
            </div>

            <div className='relative z-10'>

              <div className='leading-1 mb-8'>
                <div className='flex text justify-start mb-2'>
                  <GrStar className='starTwo'/>
                  <GrStar className='starTwo'/>
                  <GrStar className='starTwo'/>
                  <GrStar className='starTwo'/>
                  <GrStar className='starTwo'/>
                </div>

                <h1 className='text-xl font-bold mb-2'>Easy to use</h1>
                <h3>Easy to get started with very few issues customizing for your own needs.</h3>
              </div>

              <p className='text-sm absolute bottom-0 left-0 text-slate-600 grid items-end'>Christopher Gadson • about 8 hours ago</p>
            </div>

            <div className='relative z-10 max-[884px]:order-1'>

              <div className='leading-1 mb-8'>
                <div className='flex text justify-start mb-2'>
                  <GrStar className='starTwo'/>
                  <GrStar className='starTwo'/>
                  <GrStar className='starTwo'/>
                  <GrStar className='starTwo'/>
                  <GrStar className='starTwo'/>
                </div>

                <h1 className='text-xl font-bold mb-2'>Everything has been great</h1>
                <h3>Everything has been great. I love the templates, would like to see more. I love the suggestions for how long to make each section.</h3>
              </div>

              <p className='text-sm absolute bottom-0 left-0 text-slate-600 grid items-end'>Sangye Fochid • about 14 hours ago</p>
            </div>

            <div className='relative z-10'>

              <div className='leading-1 mb-8'>
                <div className='flex text justify-start mb-2'>
                  <GrStar className='starTwo'/>
                  <GrStar className='starTwo'/>
                  <GrStar className='starTwo'/>
                  <GrStar className='starTwo'/>
                  <GrStar className='starTwo'/>
                </div>

                <h1 className='text-xl font-bold mb-2'>So easy to use</h1>
                <h3>So easy to use. Within a couple of minutes I made my CV and my cover letter!</h3>
              </div>

              <p className='text-sm absolute bottom-0 left-0 text-slate-600 grid items-end'>Mansur Karadavut • about 22 hours ago</p>
            </div>
          </div>


        </section>

        <section className='widthTwo newPhase'>
          <header>
            <div className='grid gap-16 grid-cols-2      max-[884px]:grid max-[884px]:grid-cols-1'>
              <div className='col-span-1 w-full h-full       max-[884px]:order-2'>
                <img className='w-full bg-contain h-full bg-center' src="./img/img-2.png"/>
              </div>

              <div className='grid grid-rows-2      max-[884px]:order-1'>
                <div className='leading-5 col-span-1 '>
                  <h1 className='text-4xl font-bold  max-[428px]:text-2xl'>Use the best resume maker as your guide</h1>
                  <h3 className='font-semibold text-lg mt-4'>
                    Getting that dream job can seem like an impossible task. We’re here to change that. Give yourself a real advantage with the best online resume maker: created by experts, improved by data, trusted by millions of professionals.
                  </h3>
                </div>

                <div className='col-span-1 flex items-end'>
                    <button className='cta-btn w-full'>
                      <NavLink className='w-full' to='/resume'>
                        Create My Resume
                      </NavLink>
                    </button>
                </div>
              </div>
              
            </div>
            <div>    
            </div>
          </header>

          <div className='grid grid-cols-3 gap-7 mt-20    max-[884px]:grid-cols-1'>
            <div className='max-[884px]:flex'>
              <div className="mb-4     max-[884px]:mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="none"><path d="M9.3 30.6c.7-3 2.8-4.7 5.8-5 2-.2 2-3.4 0-3.2-4.4.4-8 2.9-8.9 7.3-.4 2 2.7 2.9 3.1.9z" fill="#1E2882"/><path d="M49.8 55.9c.7-.1 3 0 2.8.7-.2.3-.3.8-.6 1-3.7 1.7-8 2-12.1 2s-8.2-.4-12.3-1c-2.7-.4-9.2 0-9.6-.4-.4-.2-.7-2.3-.1-2.3 3 .3 10.8.6 14.8.8 0 0 1-6.2.9-7l-.7-4.1c-2.3 0-6.2-1-8-2.6-2-1.7-3.6-3.7-5-6A38.2 38.2 0 0117.2 16c1.3-.7 2.7-1.3 4.1-1.7a95.6 95.6 0 0128.4-2.1c2.1 0 3.9 1 5.7 2.2.5 7.3 1.2 14.3-1.5 21.2a19 19 0 01-5.8 8.2 28.6 28.6 0 01-9.6 2.7l-.2 4.2L38 57l11.8-1.1z" fill="#B8DDF0"/><path d="M49.8 57.5c2.4-.2-.4-.5-1.4-.4-1.3.2-2.6.6-4 .7-2.7.3-5.5.3-8.2.1-4.4-.2-8.7-1-13.1-1.1-1.2 0-3.2-.4-4.3 0-.5 0-.3 0 .4.3-1 .4-1.1.6-.2.5.7.2 1.4.2 2.1.2l11.6.5a1.6 1.6 0 001.5-1.2c.7-4.3 1-7.7.3-12a1.6 1.6 0 00-1.6-1.2c-14-.6-15-17.5-14.1-28l-.8 1.4c5-2.7 11.3-3.2 16.9-3.6 6.1-.5 14.2-1.4 19.6 2l-.8-1.4c.6 7.9 1.4 16.4-2.8 23.6-2.9 5-7 6.2-12.5 6.9a1.7 1.7 0 00-1.6 1.6c0 3.5-.2 7-.4 10.6a1.6 1.6 0 001.6 1.6l11.8-1.1c2-.3 2-3.5 0-3.3-4 .5-7.8.8-11.8 1.1l1.7 1.7c0-3.6.2-7.1.4-10.6L38.4 48c2.6-.3 5.1-.8 7.6-1.6 3.6-1.2 6.1-4 8-7.4 2.4-4.4 3.3-9.5 3.4-14.5 0-2.7-.1-5.3-.3-8-.2-2.4-.1-3.2-2.4-4.4-4.2-2.3-9.3-1.9-14-1.8a90 90 0 00-21 2.7c-1 .4-3 .9-3.7 1.8-1 1.2-.6 3.7-.7 5.2-.1 2.8 0 5.6.3 8.4 1.3 9.4 7 18.3 17.3 18.8L31.4 46c.4 3.4.4 6.9-.3 10.3l1.6-1.2-10-.5c-1.6 0-5.1-1-6.3.5-1 1.1-.5 3.7.8 4.5 1.5 1 4.6.4 6.3.4 8 0 15.6 2 23.6.6 2.1-.3 7-1 7-4 0-2.3-2.7-2.5-4.3-2.4-2 .1-2 3.4 0 3.3z" fill="#B8DDF0"/><path d="M9.3 36.9c3.1 1.5 6.6 2 10 1.4 2-.5 1.2-3.6-.8-3.1a12 12 0 01-7.6-1.1c-1.8-1-3.4 1.8-1.6 2.7zM59.3 25c1.7.6 3.5 1.8 3.4 3.8a4.6 4.6 0 01-2.7 3.8c-1.9.9-.3 3.7 1.6 2.7a7.7 7.7 0 004.3-7.1c-.2-3.3-3-5.3-5.8-6.4-1.9-.7-2.7 2.4-.8 3.1z" fill="#FFD15A"/><path d="M55.4 23.9c1.6.2 3.1.7 4.5 1.4 1.9.9 3.5-1.9 1.6-2.8-1.9-1-4-1.6-6-1.9-2.1-.1-2.1 3.1 0 3.3z" fill="#1E2882"/><path d="M54.8 37a16 16 0 006.8-1.5c.8-.4 1-1.6.6-2.2a1.6 1.6 0 00-2.2-.6c-1.7.7-3.4 1.1-5.2 1.1-2 0-2 3.2 0 3.2z" fill="#009AFA"/><path d="M10.4 33.7c-1-.6-1.3-2-1-3.1.3-2-2.8-3-3.2-.9-.5 2.5.2 5.4 2.5 6.8 1.9 1 3.5-1.8 1.7-2.8z" fill="#1E2882"/><path d="M47.7 61.2a15 15 0 006-2.1c1.7-1.2.1-4-1.6-2.8-1.6 1-3.4 1.6-5.3 1.8-2 .4-1.1 3.5.9 3.1zM17.4 60c3 1.2 6.8 1.4 10 1.7 4 .5 8 .6 12 .4 2-.2 2-3.4 0-3.3-3.7.3-7.4.2-11.1-.2-3.3-.3-7-.5-10-1.8-2-.8-2.7 2.3-.9 3.1zM30 47.8v6c-.1 2 3 2 3.2 0v-6c-.1-2-3.3-2-3.2 0z" fill="#009AFA"/><path d="M14.7 38.5h3.9c2 0 2-3.3 0-3.3-1.3 0-2.6.2-3.9.1a1.6 1.6 0 00-1.6 1.6 1.6 1.6 0 001.6 1.6z" fill="#1E2882"/><path d="M30.4 24c4.2-.5 7-.3 11-.2l-11 .2z" fill="#FFD15A"/><path d="M30.4 26.6a75 75 0 0111-.2c3.4 0 3.4-5 0-5.1a75 75 0 00-11 .2c-3.2.3-3.2 5.5 0 5.1z" fill="#fff"/><path d="M36 24.7c.3 4.7.8 8.8.6 13.5l-.5-13.5z" fill="#FFD15A"/><path d="M33.5 24.7c.2 4.5.6 9 .5 13.5 0 3.3 5.1 3.3 5.2 0 0-4.5-.3-9-.6-13.5-.1-3.3-5.2-3.4-5 0z" fill="#fff"/><path d="M31 37.8c3.8.3 7.5.7 11.2 0H31z" fill="#FFD15A"/><path d="M31 40.4c4 .3 7.9.6 11.9 0 3.2-.6 1.9-5.5-1.4-5-3.5.5-7 .1-10.5-.1-3.3-.2-3.3 4.9 0 5.1zM17.8 15.9c6.4 1.3 23.3 1 29.2.4 2.6-.4 5.1-1 7.7-1.6.7 0 .5-1-.1-1.2C53 13 51.3 12.1 50 12c-10.3-1-17.7-.5-28 1-1.6.4-3.2 1-4.6 1.9-.4.3-.2 1 .4 1" fill="#fff"/><path d="M17.4 17.4a99.4 99.4 0 0020.7 1c3 0 6-.2 8.9-.5 2.7-.3 6.6-.5 9-2.1a1.6 1.6 0 00.7-1.4c-.5-3.6-6.2-4-9-4.2-5.5-.5-11-.4-16.5 0-4.4.5-10 .5-14 3-1.8 1-2.4 4 .6 4.3 2 .2 2-3 0-3.2l1.1 1.6.8-.4c.7-.1 1.3-.6 2-.8a117.7 117.7 0 0123-1.5c1.7 0 3.3.2 5 .4.4 0 3.9 1.2 3.8.8l.8-1.4c-2 1.3-6 1.5-8.3 1.8-2.9.3-5.8.4-8.7.4-6.3.1-12.9.3-19.1-.9-2-.3-2.9 2.8-.9 3.1z" fill="#fff"/><path d="M17 37.2c1.2 6 8.9 11.3 14.7 12 2 .2 2-3 0-3.2-4.5-.5-10.7-5.1-11.6-9.7-.4-2-3.5-1.1-3 .9z" fill="#1E2882"/><path d="M18.4 16.6c.9-3.3 7.7-2.9 10-3.1 4.4-.4 8.7-.5 13-.5 2.1 0 2.1-3.2 0-3.2-6.2-.1-12.5.2-18.6 1-3 .4-6.6 1.8-7.5 5-.5 2 2.6 2.8 3.1.8z" fill="#F68559"/><path d="M48.8 13.5c1.9.1 4.1.2 5.2 2 1.1 1.7 4 0 2.8-1.7-1.8-2.8-4.9-3.3-8-3.5-2-.2-2 3 0 3.2z" fill="#1E2882"/></svg>
              </div>

              <div>
                <h1 className='text-xl mb-2 font-bold'>
                  Make a resume that wins interviews
                </h1>

                <h3 className='text-base font-semibold'>
                  Use our resume maker with its advanced creation tools to tell a professional story that engages recruiters, hiring managers and even CEOs.
                </h3>
              </div>
            </div>

            <div className='max-[884px]:flex'>
              <div className="mb-4     max-[884px]:mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="none"><path d="M27.7 55.4c7.2 2.1 15 1.2 21.5-2.4 1.8-1 .2-3.7-1.6-2.7a25 25 0 01-19 2c-2-.5-2.9 2.6-1 3.1zM25 33A24 24 0 0013 36.6c-1.9 1-.2 3.8 1.6 2.8C17.8 37.6 21.2 36 25 36c2 0 2-3.1 0-3.2z" fill="#B8DDF0"/><path d="M7.6 41c-6.4 7.6-2.5 17.6 6 21.5 8.7 4 19.8 4.7 29.1 3 8-1.3 19.4-5.2 22.8-13.4 1.4-3.3 2-8 0-11.2-2.5-4-7.2-5-11.5-5.5-2-.3-2 3 0 3.2 4.3.5 9.3 1.9 9.5 7a11 11 0 01-3.6 8.9 36.6 36.6 0 01-19.3 8.2c-7.3.9-14.7.3-21.8-1.7-3.5-1-7-2.6-9.2-5.6-2.8-3.9-2.8-8.4.3-12.1 1.3-1.6-1-3.9-2.3-2.3z" fill="#B8DDF0"/><path d="M55.7 34l-3 10a234.9 234.9 0 01-35.4 11 24 24 0 010-4.3c0-.4.1-.7.3-1l.7-.7c2.4-1.8 5-3.3 7.6-4.8 5-3 10.2-6 15.7-8.1A21 21 0 0155 34.6" fill="#FFD15A"/><path d="M54.2 33.6l-3 9.9 1.2-1.1a242.4 242.4 0 01-35.6 11l2 1.6c0-2.2 0-4 1.7-5.5 1-1 2.5-1.7 3.8-2.5l9.1-5.2c6.3-3.4 13.9-7.5 21.2-5.6 2 .5 2.9-2.6.9-3.1-8.5-2.2-17 2.2-24.2 6.2-4 2.2-8.1 4.5-12 7-1 .8-2.5 1.5-3.1 2.7-.9 1.7-.6 4.2-.5 6a1.6 1.6 0 002 1.5 240.7 240.7 0 0031-9.3c1.5-.5 4.1-1 5.2-2.1.9-1 1-2.9 1.4-4l2-6.7c.6-2-2.5-2.8-3.1-.8z" fill="#FFD15A"/><path d="M30 26.4l-5.3 8a65 65 0 00-4.6 7.8 65 65 0 00-2.7 7.3c7.9-3 15-6.2 22-9.5a96.7 96.7 0 0116.5-6.6l-20.2-6c-1.8-.5-3.8-.9-5.7-1" fill="#F68559"/><path d="M28.6 25.5c-5 7.7-9.9 14.9-12.8 23.6-.4 1 .8 2.4 2 2 6.4-2.5 12.7-5.2 18.8-8 6.5-3 12.8-6.1 19.7-8a1.6 1.6 0 000-3.2c-8.5-2.6-17.4-6.2-26.3-7.2-2-.2-2 3 0 3.2 4.4.5 8.7 2 13 3.3L55.4 35v-3C49 33.6 43 36.4 37 39.2c-6.6 3.2-13.3 6-20 8.7l2 2c2.7-8.5 7.5-15.5 12.4-22.9 1-1.7-1.7-3.3-2.8-1.6z" fill="#F68559"/><path d="M34.6 24.5a6.5 6.5 0 00-3 2.8c-.6 1.2-.2 2.7.6 3.8 1 1.7 2.8 2.1 4.8 2.2 2.8.1 5.6 0 8.3-.5a9 9 0 004.1-1.7 4 4 0 001.5-4c-.4-1.3-2.6-2.4-3.9-3.1 1.9-1.2 3.3-3 2.4-4.8-.9-2-4.4-2.4-6.5-3a53 53 0 012.3-3.7c-2.6 1-5 2.5-7 4.4a3.2 3.2 0 00-3.1.6 3.7 3.7 0 00-1.4 2.6 2.8 2.8 0 00.6 2.2c.5.5 1.8 1 2 1.6" fill="#fff"/><path d="M33.8 23.1c-3.4 1.9-5.3 5.2-3 8.8 2.4 3.7 7.7 3.2 11.6 2.9 3.5-.3 8-1 9.7-4.6 1.7-3.8-1.4-5.8-4.3-7.6v2.8c2.3-1.6 4.5-4.1 3-7-1.4-2.6-5-3-7.5-3.7l1 2.3a62 62 0 012.2-3.6c.8-1.2-.5-3-1.8-2.4a23 23 0 00-7.6 4.8l1.6-.4a5.1 5.1 0 00-6.3 3.2 5 5 0 000 3.8c.6 1.3 1.8 1.3 2.4 2.4 1.2 1.7 4 0 2.8-1.7-.4-.5-.8-1-1.4-1.4-1.9-2.1.5-2.3 2.2-3.1 2.6-1.3 4.4-3.4 7.2-4.5l-1.8-2.4a66.1 66.1 0 00-2.5 4.4 1.6 1.6 0 001.2 1.7c2.1.5 8 1.8 3.7 4.8a1.6 1.6 0 000 2.8c1.1.7 3.4 1.5 3.1 3.1-.3 2.4-4.6 2.9-6.4 3-1.7.3-3.5.3-5.3.2-1 0-3 0-3.7-1l-.2-3.6 1.7-1.1c1.8-1 .2-3.8-1.6-2.8z" fill="#fff"/><path d="M38.2 13.7c-5.8.6-9.8 7.4-3.4 10.5v-2.8c-2.7 1.2-5.6 5-5.2 8.2.4 3.1 3.5 5 6.4 5.3 2 .3 2-3 0-3.2-5.1-.6-2.7-6.2.4-7.5 1.1-.5 1-2.3 0-2.8-3-1.4-.5-4.2 1.8-4.5 2-.2 2-3.4 0-3.2z" fill="#1E2882"/><path d="M48.4 25.4c5.5 1.7 2 8.2-2 9.2-2 .4-1.2 3.5.9 3 7.3-1.6 10.5-12.6 2-15.3-2-.6-2.8 2.5-.9 3.1zM39.2 16.7c2.7-2 5.5-3.6 8.3-5.3L45.1 10c-.2 1.6-.8 3-1 4.7-.3 2 2.8 2.9 3 .8.3-1.9 1-3.6 1.2-5.5.1-1.3-1.5-2-2.4-1.4-2.8 1.7-5.7 3.4-8.3 5.3-1.7 1.2 0 4 1.6 2.8z" fill="#F68559"/><path d="M45.6 16.7c1.5 0 3.1.8 3.7 2.2a2.8 2.8 0 01-1.2 3.6c-1.8 1-.2 3.8 1.6 2.8a6 6 0 002.8-7.2c-1-3-3.9-4.5-6.9-4.6-2 0-2 3.1 0 3.2z" fill="#009AFA"/><path d="M44 25.9c.8.1 1.6.2 2.3 0l2-.2a1.6 1.6 0 100-3.2c-1.2 0-2.3.5-3.4.3a1.6 1.6 0 00-2 1 1.6 1.6 0 001.1 2zM54.3 33c-1 3.9-1.8 7.7-2.9 11.6-.6 2 2.5 2.8 3.1.8 1.1-3.8 2-7.7 2.9-11.5.5-2-2.6-2.9-3.1-.9z" fill="#1E2882"/><path d="M17.8 58c6-1.7 12.1-3.2 17.9-5.6 5.7-2.3 11.8-3.7 17.7-5.9 1.9-.7 1-3.8-.9-3-5.8 2-12 3.4-17.7 5.8-5.7 2.4-11.9 4-17.9 5.6-2 .5-1.1 3.6.9 3z" fill="#1E2882"/><path d="M15 52c.4 1.7.5 3.4.8 5 .4 2.1 3.5 1.2 3.1-.8-.3-1.7-.4-3.4-.8-5-.4-2.1-3.4-1.2-3 .8z" fill="#009AFA"/><path d="M15 9.1l1.3 15.5c.2 2 3.4 2 3.2 0L18.2 9c-.2-2-3.4-2-3.2 0zM10.1 19.9l2.2-.4a1.6 1.6 0 001.6-1.6 1.6 1.6 0 00-1.6-1.6l-3 .5a1.6 1.6 0 00-1.1 2 1.6 1.6 0 002 1zM21.8 17.9l2.7-.6a1.6 1.6 0 00-.9-3l-2.6.5a1.6 1.6 0 00.8 3zM32.4 6l-.2.2a1.6 1.6 0 002.3 2.3l.1-.1A1.6 1.6 0 1032.4 6zM9.2 32.2c2 0 2-3.2 0-3.2-2.1 0-2.1 3.2 0 3.2zM61.4 15.8l-.9 8.4c-.2 2 3 2 3.2 0l1-8.4c0-2.1-3.1-2-3.3 0z" fill="#FFD15A"/><path d="M57.5 20.6c1.1.3 2.3.5 3.5.6a1.6 1.6 0 001.6-1.6A1.6 1.6 0 0061 18c-.9 0-1.8-.3-2.7-.5-2-.6-2.8 2.5-.8 3z" fill="#FFD15A"/><path d="M63.6 21.3c1 .1 2 .3 3 .7 2 .6 3-2.5 1-3.1-1.3-.4-2.6-.7-4-.8a1.6 1.6 0 00-1.6 1.6 1.6 1.6 0 001.6 1.6z" fill="#FFD15A"/></svg>
              </div>

              <div>
                <h1 className='text-xl mb-2 font-bold'>
                  Resume writing made easy
                </h1>

                <h3 className='text-base font-semibold'>
                  Resume writing has never been this effortless. Pre-generated text, visual designs and more - all already integrated into the resume maker. Just fill in your details.
                </h3>
              </div>
            </div>

            <div className='max-[884px]:flex'>
              <div className="mb-4     max-[884px]:mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="none"><path d="M62.4 22S56 28 54 30.2c-.5.6 9.5 6.6 9.5 6.6s-9.2 3.1-11.4 2.7c2.6 4.4 4.6 5.2 6.8 9.6-4.1 0-8-1.3-12-1.4.2 4.7 1 6.7 1.2 13.2-2.6-1.6-5-5.4-10-9.3-.8.5-9.1 9.7-9.1 9.7l-2-13.2s-10.4 2.2-13.4 3.3c2.2-5.1 5.2-7.4 6.9-11.1-3.9-2.8-7-5.6-11.5-8.4 4.4-2.2 9.2-1.8 13.2-3.2a53 53 0 01-4.8-14.4c4.4 1.7 7.3 5 11.7 6.6 1.6-3.8 2.3-9 3.8-12.8 2.3 3.9 3.6 7.3 5.9 11.2 2.1-3.5 5.6-6.6 9.5-9.7.7 5.5.6 7 0 13.7 5.7-1.7 14-1.3 14-1.3z" fill="#FFD15A" stroke="#FFD15A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M28.3 38a51 51 0 015.1 4.6c1.6 1.6 3.9 1 5-.7L46 31.5c2.4-3.4-3.2-6.6-5.6-3.3L33 38.7l5-.7a51 51 0 00-5-4.6c-3.3-2.6-7.8 2-4.6 4.5z" fill="#fff"/><path d="M22.3 26.4C21.1 22.2 20 18 19 13.8c-.5-2-3.6-1.1-3.1.9.9 4.2 2 8.3 3.3 12.5.7 2 3.8 1.1 3.1-.8z" fill="#009AFA"/><path d="M7.7 34c3.2 2.2 6.4 4.5 9.5 7 1.6 1.3 3.9-1 2.3-2.3-3.3-2.6-6.7-5.2-10.2-7.5-1.7-1.2-3.4 1.6-1.6 2.7zM25 51c.5 3.6 1.3 7.2 2 10.8.3 2 3.4 1.1 3-.9l-2-10.8c-.3-2-3.4-1.2-3 .9zM38.7 54.9c3 2.2 5.4 5 8.3 7.1 1.6 1.3 3.9-1 2.3-2.2-3.1-2.4-5.8-5.3-9-7.7-1.6-1.3-3.1 1.6-1.6 2.8z" fill="#1E2882"/><path d="M48.9 50c3.3.6 6.7 1 10 1.2 2.1.1 2.1-3.1 0-3.2-3-.1-6.1-.5-9.2-1-2-.5-2.9 2.6-.8 3z" fill="#009AFA"/><path d="M30.4 18.6c1.2-3.1 2.5-6.3 4-9.3.9-1.9-1.9-3.5-2.8-1.7-1.6 3.4-3 6.7-4.3 10.2-.7 2 2.4 2.8 3.1.8z" fill="#F68559"/><path d="M13.8 52.8c2 0 2-3.2 0-3.2s-2 3.2 0 3.2zM42.1 17.9c2-2.8 4.8-4.9 7.3-7.1 1.5-1.4-.7-3.7-2.3-2.3-2.7 2.5-5.5 4.8-7.7 7.8-1.3 1.6 1.5 3.2 2.7 1.6z" fill="#1E2882"/></svg>
              </div>

              <div>
                <h1 className='text-xl mb-2 font-bold'>
                  A recruiter-tested CV maker tool
                </h1>

                <h3 className='text-base font-semibold'>
                  Our resume builder and its pre-generated content are tested by recruiters and IT experts. We help your resume become truly competitive in the hiring process.
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section className='newPhase widthOne'>
          <div className=''>
            <h1 className='heading-one'>The Elevator</h1>
            <p className='text-center w-2/3 mx-auto my-5      max-[428px]:w-full'>Discover our extensive knowledge base, The Elevator, which gives you the best information on improving your resume and resume writing samples taking your career to the next level.</p>
          </div>

          <div className='grid grid-cols-2 mt-20 gap-9      max-[428px]:grid-cols-1'>
            <div className='relative z-10 rounded-xl overflow-hidden max-[884px]:h-[460px]'>
              <img className='w-full h-full bg-contain bg-center' src="./img/resume.avif" alt="" />

              <div className='h-full absolute z-10 bottom-0'>
                <div className='hide-show-text h-full w-full bg-gradient-to-t from-[#493995] from-20% to-transparent p-4 hover:from-100% text-white transition-all ease-linear'>
                  <span className='bg-[#f68559] text-white px-2 text-xs  py-1 rounded-lg font-semibold tracking-wide  inline-block'>FIELD TESTED</span>
                  <div className='h-full flex sec-flex'>
                    <div className='change-height overflow-hidden'>
                      <h1 className='text-3xl font-bold     max-[428px]:text-2xl'>The universal guide on how to write the perfect resume</h1>
                      <h3 className='py-2'>Resume Guide · 52 min read</h3>
                      <p className='transition ease-in-out'>Arm yourself with the golden rules of resume writing: what to include in your resume, which formatting standards to follow, which resume sections are necessary and which are optional, how to present your work experience and much more.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='relative z-10 rounded-xl overflow-hidden max-[884px]:h-[460px]'>
              <img src="./img/cover letter.avif" alt="" />

              <div className='h-full absolute bottom-0'>
                <div className='hide-show-text h-full w-full bg-gradient-to-t from-[#338699] from-20% to-transparent p-4 hover:from-100% text-white transition-all ease-linear'>
                  <span className='bg-[#1a91f0] text-white px-2 text-xs  py-1 rounded-lg font-semibold tracking-wide  inline-block'>HR APPROVED</span>
                  <div className='h-full flex sec-flex'>
                    <div className='change-height overflow-hidden'>
                      <h1 className='text-3xl font-bold     max-[428px]:text-2xl'>A comprehensive guide on how to write a cover letter</h1>
                      <h3 className='py-2'>Cover Letter Guide · 41 min read</h3>
                      <p className='transition ease-in-out'>Our guide on cover letter writing answers all of the most important questions: why do you need a cover letter? What is the purpose of a cover letter? How to use creative writing when describing your job history and professional image?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='newPhase widthOne'>
          <div className='text-center font-semibold'>
            <h3 className='text-[#f68559]'>START BUILDING YOUR CAREER</h3>
            <h1 className='heading-one py-5'>Professional resumes for effective job interviews</h1>
            <p className='mb-5'>A great job application leads to a good interview. An amazing resume is what makes it all possible. Start off strong with the hiring manager by creating a positive professional image. A job interview can be much easier if they have a favorable view of your resume and cover letter.</p>
            <button className='cta-btn'>Get Started Now</button>
          </div>
        </section>
      </main>

    </div>
  )
}

export default Home
