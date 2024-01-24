'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLayoutEffect } from 'react'
import Cookies from 'js-cookie'
import { useRouter, usePathname } from 'next/navigation';
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";

const Navbar = () => {

  const router = useRouter()
  const pathname = usePathname()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [dropdown, setDropdown] = useState(false)

  useLayoutEffect(() => {
    const data = Cookies.get();
    if (!data.token) router.push('/auth/login')
  }, [])

  useEffect(() => {
    const data = Cookies.get();
    setUsername(data.name)
    setEmail(data.email)
  })

  const handleLogout = () =>{
    // delete cookie
    Cookies.remove('uid');
    Cookies.remove('email');
    Cookies.remove('name');
    Cookies.remove('token');

    // delete session
    sessionStorage.clear();

    // redirect to login
    router.push('/auth/login');
  }

  if (pathname != '/') {
    return (<></>)
  }

  return (
    <div className='fixed w-full bg-slate-900 bg-opacity-30 backdrop-blur-xl z-50'>
      <nav className='flex justify-between items-center w-10/12 mx-auto py-1'>
        {/* Logo */}
        <Link href={'/'}>
          <Image src="/Logo.png" width={150} height={100} />
        </Link>

        {/* Profile */}
        <a onClick={() => setDropdown(!dropdown)} className="shadow-lg relative cursor-pointer rounded-2xl bg-slate-800 hover:bg-slate-700 py-2 px-4">
          <div className="flex-row gap-4 flex justify-center items-center">
            <div className="flex-shrink-0">
              <div className="relative block">
                <Image alt="profil" src="/profile.jpg" className="mx-auto object-cover rounded-full h-11 w-11" width={50} height={50} />
              </div>
            </div>
            <div className=" flex flex-col">
              <span className="text-md capitalize font-medium text-white">
                {username}
              </span>
              <span className="text-xs text-gray-400">
                {email}
              </span>
            </div>
          </div>

          {/* Drop Down */}
          {dropdown ?
            (<ul className='absolute left-0 bg-slate-800 w-full mt-4 rounded-lg px-4 py-2'>
              <li className='text-sm my-1 py-1 hover:font-bold '><a className='flex items-center'><CgProfile /><span className='ml-2'>Profile</span></a></li>
              <li onClick={handleLogout} className='text-sm my-1 py-1 hover:font-bold '><a className='flex items-center'><MdLogout /><span className='ml-2'>Logout</span></a></li>
            </ul>)
            :
            null}

        </a>

        {/* <Link href="/" className='bg-red-500 px-8 py-2 font-semibold rounded-md shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:shadow-none'>Login</Link> */}
      </nav>
    </div>
  )
}

export default Navbar