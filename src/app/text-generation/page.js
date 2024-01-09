import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { IoMdArrowDropdown } from "react-icons/io";
import { SiOpenaigym } from "react-icons/si";

const TextGeneration = () => {
  return (
    <div className='h-screen bg-slate-900 flex fixed w-full'>
      {/* Left Nav Menu */}
      <div className='w-44 bg-slate-950 h-full border-r border-opacity-5 border-white pt-12'>
        <nav className='flex flex-col'>
          <p className='px-2 text-xs text-slate-200'>Configuration</p>
          <Link href="/" className='flex items-center py-3 px-2 border-b border-opacity-5 border-white'><SiOpenaigym className='text-xl' /><span className='ml-2 text-md text-slate-100 text-opacity-100'>Setting Model</span></Link>
        </nav>
      </div>

      {/* Main Board */}
      <div className='flex-1 h-screen flex flex-col'>

        {/* Header Menu */}
        <div className='flex justify-between items-center w-11/12 mx-auto py-1'>
          <div className="shadow-lg rounded-2xl bg-slate-800 py-2 px-4">
            <div className="flex-row gap-4 flex justify-center items-center">
              <p>Model Used</p>
              <span className="text-sm text-gray-400">
                Chat GPT 4.0
              </span>
              <IoMdArrowDropdown />
            </div>
          </div>
          <div className="shadow-lg rounded-2xl bg-slate-800 py-2 px-4">
            <div className="flex-row gap-4 flex justify-center items-center">
              <p>Credit</p>
              <span className="text-sm text-gray-400">
                $ 8.79
              </span>
            </div>
          </div>
          <div className="shadow-lg rounded-full bg-slate-800 py-2 pr-6 pl-2">
            <div className="flex-row gap-4 flex justify-center items-center">
              <div className="flex-shrink-0">
                <a href="#" className="relative block">
                  <Image alt="profil" src="/profile.jpg" className="mx-auto object-cover rounded-full h-11 w-11" width={50} height={50} />
                </a>
              </div>
              <div className=" flex flex-col">
                <span className="text-md font-medium text-gray-600 dark:text-white">
                  Charlie Puth
                </span>
                <span className="text-xs text-gray-400">
                  Beginner Plan
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Chat */}
        <div className='flex-1 mt-2'>
          <div className='w-10/12 my-2 mx-auto bg-slate-800 rounded-xl px-6 py-4 flex flex-col'>
            <div className='flex items-center justify-start'>
              <Image alt="profil" src="/profile.jpg" className="object-cover rounded-full h-8 w-8" width={50} height={50} />
              <p className='ml-2 text-md font-semibold'>Charlie Puth</p>
            </div>
            <p className='mt-2 text-slate-200'>Say this is a test</p>
          </div>
          <div className='w-10/12 my-2 mx-auto bg-slate-800 rounded-xl px-6 py-4 flex flex-col'>
            <div className='flex items-center justify-start'>
              <Image alt="profil" src="/Openai.png" className="object-cover rounded-full h-8 w-8" width={50} height={50} />
              <p className='ml-2 text-md font-semibold'>System</p>
            </div>
            <p className='mt-2 text-slate-200'>This is a test</p>
          </div>
        </div>

        {/* Prompt Start */}
        <form className='justify-center flex gap-x-3 items-center py-3 h-16'>
          <a href="#" className="relative block">
            <Image alt="profil" src="/profile.jpg" className="mx-auto object-cover rounded-full h-10 w-10" width={50} height={50} />
          </a>
          <input type="text" className='bg-slate-800 mx-1 w-8/12 px-6 py-2 rounded-full text-slate-50' placeholder='Say what you want to say...' />
        </form>
      </div>

    </div>
  )
}

export default TextGeneration