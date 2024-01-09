import Image from 'next/image'
import Link from 'next/link';
import { IoMdText } from "react-icons/io";
import {MdFormatPaint, MdOutlineSettingsApplications, MdOutlineTextRotationNone, MdOutlineSettingsSuggest} from 'react-icons/md'
import { GrGraphQl } from "react-icons/gr";
import { RiSpeakFill } from "react-icons/ri";


const Home = ()=> {
  return (
    <main className="flex bg-slate-900 min-h-screen flex-col items-center p-16">
      {/* Main Function */}
      <h1 className='font-mono text-xl'>Welcome to <span className='font-semibold underline'>Hi-AI</span> lab</h1>
      <p className='font-mono text-sm'>We Bring Advancement in OpenAI function with Pay-As-You-Go Payment</p>
      <div className='flex flex-wrap justify-center mt-8 w-11/12 gap-5'>
        <Link href={'/text-generation'} className='px-10 py-6 w-80 rounded-lg bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500'>
          <h2 className='font-bold text-lg text-center flex items-center'><span>Text Generation</span><IoMdText className='ml-2 text-xl' /></h2>
          <p className='text-sm mt-2'>Can be used across a great variety of tasks including content or code generation, summarization, conversation, creative writing, and more</p>
        </Link>
        <Link href={'/'} className='px-10 py-6 w-80 rounded-lg bg-gradient-to-br from-green-300 via-blue-500 to-purple-600'>
          <h2 className='font-bold text-lg text-center flex items-center'><span>Embeddings</span><GrGraphQl className='ml-2 text-xl' /></h2>
          <p className='text-sm mt-2'>Can be used across a great variety of tasks including content or code generation, summarization, conversation, creative writing, and more</p>
        </Link>
        <Link href={'/'} className='px-10 py-6 w-80 rounded-lg bg-gradient-to-br from-red-800 via-yellow-600 to-yellow-500'>
          <h2 className='font-bold text-lg text-center flex items-center'><span>Image Generation</span><MdFormatPaint className='ml-2 text-xl' /></h2>
          <p className='text-sm mt-2'>Can be used across a great variety of tasks including content or code generation, summarization, conversation, creative writing, and more</p>
        </Link>
        <Link href={'/'} className='px-10 py-6 w-80 rounded-lg bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900'>
          <h2 className='font-bold text-lg text-center flex items-center'><span>Text to Speech</span><RiSpeakFill className='ml-2 text-xl' /></h2>
          <p className='text-sm mt-2'>Can be used across a great variety of tasks including content or code generation, summarization, conversation, creative writing, and more</p>
        </Link>
        <Link href={'/'} className='px-10 py-6 w-80 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-300'>
          <h2 className='font-bold text-lg text-center flex items-center'><span>Prompt Engineering</span><MdOutlineSettingsApplications className='ml-2 text-xl' /></h2>
          <p className='text-sm mt-2'>Can be used across a great variety of tasks including content or code generation, summarization, conversation, creative writing, and more</p>
        </Link>
        <Link href={'/'} className='px-10 py-6 w-80 rounded-lg bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-500 via-purple-500 to-blue-500'>
          <h2 className='font-bold text-lg text-center flex items-center'><span>Speech to text</span><MdOutlineTextRotationNone className='ml-2 text-xl' /></h2>
          <p className='text-sm mt-2'>Can be used across a great variety of tasks including content or code generation, summarization, conversation, creative writing, and more</p>
        </Link>
        <Link href={'/'} className='px-10 py-6 w-80 rounded-lg bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-500 to-indigo-700'>
          <h2 className='font-bold text-lg text-center flex items-center'><span>Fine-Tuning</span><MdOutlineSettingsSuggest className='ml-2 text-xl' /></h2>
          <p className='text-sm mt-2'>Can be used across a great variety of tasks including content or code generation, summarization, conversation, creative writing, and more</p>
        </Link>
        <Link href={'/'} className='px-10 py-6 w-80 rounded-lg bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-amber-900 to-yellow-300'>
          <h2 className='font-bold text-lg text-center flex items-center'><span>Vision</span><IoMdText className='ml-2 text-xl' /></h2>
          <p className='text-sm mt-2'>Can be used across a great variety of tasks including content or code generation, summarization, conversation, creative writing, and more</p>
        </Link>

      </div>
    </main>
  )
}

export default Home