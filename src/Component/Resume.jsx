import React from 'react'
import { useState, useRef, useMemo } from 'react'
import JoditEditor from 'jodit-react'
import HTMLReactParser from 'html-react-parser'

const Resume = () => {

    const editor = useRef(null)
    const [content, setContent] = useState('')

  return (
    <div className='w-3/5 mx-auto pt-40     max-[884px]:w-full max-[884px]:px-5'>
        <div>
            <h1 className='text-2xl mb-2 font-semibold'>Personal Details</h1>
            <div className='grid grid-cols-2 gap-x-7 gap-y-3       max-[428px]:grid-cols-1'>
                <label><span className='block w-full text-md mb-1 text-slate-400'>First Name</span><input className='border-b-2 outline-none border-white transition ease-linear rounded-sm py-6  focus:border-blue-400 w-full h-10 text-lg indent-2 bg-slate-200' type="text"/></label>
                <label><span className='block w-full text-md mb-1 text-slate-400'>Last Name</span><input className='border-b-2 outline-none border-white transition ease-linear rounded-sm py-6  focus:border-blue-400 w-full h-10 text-lg indent-2 bg-slate-200' type="text"/></label>
                <label><span className='block w-full text-md mb-1 text-slate-400'>Email</span><input className='border-b-2 outline-none border-white transition ease-linear rounded-sm py-6  focus:border-blue-400 w-full h-10 text-lg indent-2 bg-slate-200' type="email"/></label>
                <label><span className='block w-full text-md mb-1 text-slate-400'>Phone</span><input className='border-b-2 outline-none border-white transition ease-linear rounded-sm py-6  focus:border-blue-400 w-full h-10 text-lg indent-2 bg-slate-200' type="number"/></label>
                <label><span className='block w-full text-md mb-1 text-slate-400'>Country</span><input className='border-b-2 outline-none border-white transition ease-linear rounded-sm py-6  focus:border-blue-400 w-full h-10 text-lg indent-2 bg-slate-200' type="text"/></label>
                <label><span className='block w-full text-md mb-1 text-slate-400'>City</span><input className='border-b-2 outline-none border-white transition ease-linear rounded-sm py-6  focus:border-blue-400 w-full h-10 text-lg indent-2 bg-slate-200' type="text"/></label>
                <label><span className='block w-full text-md mb-1 text-slate-400'>Address</span><input className='border-b-2 outline-none border-white transition ease-linear rounded-sm py-6  focus:border-blue-400 w-full h-10 text-lg indent-2 bg-slate-200' type="text"/></label>
                <label><span className='block w-full text-md mb-1 text-slate-400'>Postal Code</span><input className='border-b-2 outline-none border-white transition ease-linear rounded-sm py-6  focus:border-blue-400 w-full h-10 text-lg indent-2 bg-slate-200' type="number"/></label>
                <label><span className='block w-full text-md mb-1 text-slate-400'>Nationality</span><input className='border-b-2 outline-none border-white transition ease-linear rounded-sm py-6  focus:border-blue-400 w-full h-10 text-lg indent-2 bg-slate-200' type="text"/></label>
                <label><span className='block w-full text-md mb-1 text-slate-400'>Place of Birth</span><input className='border-b-2 outline-none border-white transition ease-linear rounded-sm py-6  focus:border-blue-400 w-full h-10 text-lg indent-2 bg-slate-200' type="text"/></label>
                <label><span className='block w-full text-md mb-1 text-slate-400'>Birth Day</span><input className='border-b-2 outline-none border-white transition ease-linear rounded-sm py-6  focus:border-blue-400 w-full h-10 text-lg indent-2 bg-slate-200' type='date'/></label>
                <label><span className='block w-full text-md mb-1 text-slate-400'>Wanted Job Title</span><input className='border-b-2 outline-none border-white transition ease-linear rounded-sm py-6  focus:border-blue-400 w-full h-10 text-lg indent-2 bg-slate-200' placeholder='e.g. Teacher' type="text"/></label>
            </div>
        </div>

        <div className='pt-20'>
            <div>
                <h1 className='text-2xl mb-2 font-semibold'>Professional Summary</h1>
                <p className='mb-4'>Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills.</p>
            </div>

            <div>
                <JoditEditor ref={editor} value={content} onChange={(newContent) => setContent(newContent)}/>
            </div>
        </div>

        <div className='pt-20'>
            <div>
                <h1 className='text-2xl mb-2 font-semibold'>Employment History</h1>
                <p className='pb-3'>Show your relevant experience. Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z).</p>
            </div>

            <div className='grid grid-cols-2 gap-x-7 gap-y-3       max-[428px]:grid-cols-1'>
                <label><span className='block w-full text-md mb-1 text-slate-400'>Job Title</span><input className='border-b-2 outline-none border-white transition ease-linear rounded-sm py-6  focus:border-blue-400 w-full h-10 text-lg indent-2 bg-slate-200' type="text"/></label>
                <label><span className='block w-full text-md mb-1 text-slate-400'>Employer</span><input className='border-b-2 outline-none border-white transition ease-linear rounded-sm py-6  focus:border-blue-400 w-full h-10 text-lg indent-2 bg-slate-200' type="text"/></label>
                <label><span className='block w-full text-md mb-1 text-slate-400'>Start & End Date</span>
                    <div className='grid grid-cols-2 gap-x-7 gap-y-3       max-[428px]:grid-cols-1'>
                        <input className='border-b-2 outline-none border-white transition ease-linear rounded-sm py-6 focus:border-blue-400 w-full h-10 text-lg indent-2 bg-slate-200' type="date"/>
                        <input className='border-b-2 outline-none border-white transition ease-linear rounded-sm py-6 focus:border-blue-400 w-full h-10 text-lg indent-2 bg-slate-200' type="date"/>
                    </div>
                </label>
                <label><span className='block w-full text-md mb-1 text-slate-400'>City</span><input className='border-b-2 outline-none border-white transition ease-linear rounded-sm py-6  focus:border-blue-400 w-full h-10 text-lg indent-2 bg-slate-200' type="text"/></label>
            </div>

            <div className='my-5'>
                <JoditEditor ref={editor} value={content} onChange={(newContent) => setContent(newContent)}/>
            </div>
        </div>

        <div className='pt-20'>
            <div>
                <h1 className='text-2xl mb-2 font-semibold'>Eduation</h1>
                <p className='pb-3'>A varied education on your resume sums up the value that your learnings and background will bring to job.</p>
            </div>

            <div className='grid grid-cols-2 gap-x-7 gap-y-3       max-[428px]:grid-cols-1'>
                <label className='block w-full text-md mb-1 text-slate-400'><span>School</span><input className='border-b-2 outline-none border-white transition ease-linear rounded-sm py-6  focus:border-blue-400 w-full h-10 text-lg indent-2 bg-slate-200' type="text"/></label>
                <label className='block w-full text-md mb-1 text-slate-400'><span>Degree</span><input className='border-b-2 outline-none border-white transition ease-linear rounded-sm py-6  focus:border-blue-400 w-full h-10 text-lg indent-2 bg-slate-200' type="text"/></label>
                <label className='block w-full text-md mb-1 text-slate-400'><span>Start&End Date</span><input className='border-b-2 outline-none border-white transition ease-linear rounded-sm py-6  focus:border-blue-400 w-full h-10 text-lg indent-2 bg-slate-200' type="text"/></label>
                <label className='block w-full text-md mb-1 text-slate-400'><span>City</span><input className='border-b-2 outline-none border-white transition ease-linear rounded-sm py-6  focus:border-blue-400 w-full h-10 text-lg indent-2 bg-slate-200' type="text"/></label>
            </div>

            <div className='my-5'>
                <JoditEditor ref={editor} value={content} onChange={(newContent) => setContent(newContent)}/>
            </div>
        </div>

        <div className='pt-20'>
            <div>
                <h1 className='text-2xl mb-2 font-semibold'>Website & Social Links</h1>
                <p className='pb-3'>You can add links to websites you want hiring managers to see! Perhaps It will be  a link to your portfolio, LinkedIn profile, or personal website</p>
            </div>

            <div className='grid grid-cols-2 gap-x-7 gap-y-3       max-[428px]:grid-cols-1'>
                <label className='block w-full text-md mb-1 text-slate-400'><span>Website</span><input className='border-b-2 outline-none border-white transition ease-linear rounded-sm py-6  focus:border-blue-400 w-full h-10 text-lg indent-2 bg-slate-200' type="text"/></label>
                <label className='block w-full text-md mb-1 text-slate-400'><span>Link</span><input className='border-b-2 outline-none border-white transition ease-linear rounded-sm py-6  focus:border-blue-400 w-full h-10 text-lg indent-2 bg-slate-200' type="text"/></label>
            </div>

            <div className='grid grid-cols-2 gap-x-7 gap-y-3       max-[428px]:grid-cols-1'>
                <label className='block w-full text-md mb-1 text-slate-400'><span>X</span><input className='border-b-2 outline-none border-white transition ease-linear rounded-sm py-6  focus:border-blue-400 w-full h-10 text-lg indent-2 bg-slate-200' type="text"/></label>
                <label className='block w-full text-md mb-1 text-slate-400'><span>Link</span><input className='border-b-2 outline-none border-white transition ease-linear rounded-sm py-6  focus:border-blue-400 w-full h-10 text-lg indent-2 bg-slate-200' type="text"/></label>
            </div>

            <div className='grid grid-cols-2 gap-x-7 gap-y-3       max-[428px]:grid-cols-1'>
                <label className='block w-full text-md mb-1 text-slate-400'><span>Facebook</span><input className='border-b-2 outline-none border-white transition ease-linear rounded-sm py-6  focus:border-blue-400 w-full h-10 text-lg indent-2 bg-slate-200' type="text"/></label>
                <label className='block w-full text-md mb-1 text-slate-400'><span>Link</span><input className='border-b-2 outline-none border-white transition ease-linear rounded-sm py-6  focus:border-blue-400 w-full h-10 text-lg indent-2 bg-slate-200' type="text"/></label>
            </div>

            <div className='grid grid-cols-2 gap-x-7 gap-y-3       max-[428px]:grid-cols-1'>
                <label className='block w-full text-md mb-1 text-slate-400'><span>Linked In</span><input className='border-b-2 outline-none border-white transition ease-linear rounded-sm py-6  focus:border-blue-400 w-full h-10 text-lg indent-2 bg-slate-200' type="text"/></label>
                <label className='block w-full text-md mb-1 text-slate-400'><span>Link</span><input className='border-b-2 outline-none border-white transition ease-linear rounded-sm py-6  focus:border-blue-400 w-full h-10 text-lg indent-2 bg-slate-200' type="text"/></label>
            </div>

            <div className='grid grid-cols-2 gap-x-7 gap-y-3       max-[428px]:grid-cols-1'>
                <label className='block w-full text-md mb-1 text-slate-400'><span>Git Hub</span><input className='border-b-2 outline-none border-white transition ease-linear rounded-sm py-6  focus:border-blue-400 w-full h-10 text-lg indent-2 bg-slate-200' type="text"/></label>
                <label className='block w-full text-md mb-1 text-slate-400'><span>Link</span><input className='border-b-2 outline-none border-white transition ease-linear rounded-sm py-6  focus:border-blue-400 w-full h-10 text-lg indent-2 bg-slate-200' type="text"/></label>
            </div>
        </div>

        <a href="/" className="cta-btn my-20">Get Resume</a>
    </div>
  )
}

export default Resume
