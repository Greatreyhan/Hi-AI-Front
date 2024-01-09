import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='fixed w-full bg-slate-900 bg-opacity-30 backdrop-blur-xl z-50'>
      <nav className='flex justify-between items-center w-10/12 mx-auto py-1'>
        <Link href={'/'}>
          <Image src="/Logo.png" width={150} height={100} />
        </Link>
        <div className="shadow-lg rounded-2xl bg-slate-800 py-2 px-4">
          <div className="flex-row gap-4 flex justify-center items-center">
              <p>Credit</p>
              <span className="text-sm text-gray-400">
                $ 8.79
              </span>
          </div>
        </div>
        <div className="shadow-lg rounded-2xl bg-slate-800 py-2 px-4">
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
        {/* <Link href="/" className='bg-red-500 px-8 py-2 font-semibold rounded-md shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:shadow-none'>Login</Link> */}
      </nav>
    </div>
  )
}

export default Navbar