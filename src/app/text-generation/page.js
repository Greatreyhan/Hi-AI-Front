"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import axios from 'axios';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import a11yDark from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";
import { SiOpenaigym } from "react-icons/si";
import { MdOutlineSettingsInputComponent, MdAccountTree, MdCode, MdContentPaste, MdSend } from "react-icons/md";
import ReactLoading from 'react-loading';
import Params from './params';
import SettingModel from './setting_role';
import History from './history';
import Cookies from 'js-cookie'


const TextGeneration = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [UID, setUID] = useState('')
  const [userToken, setUserToken] = useState('')
  const [messages, setMessages] = useState([{ role: "system", content: "You are a helpful assistant" }])
  const [input, setInput] = useState("");
  const [models, setModels] = useState(['gpt-4-1106-preview', 'gpt-4-0613', 'gpt-4', 'gpt-3.5-turbo-16k-0613', 'gpt-3.5-turbo-16k', 'gpt-3.5-turbo-1106', 'gpt-3.5-turbo-0613', 'gpt-3.5-turbo-0301', 'gpt-3.5-turbo'])
  const [loading, setLoading] = useState(false)
  const [inputModel, setInputModel] = useState(models[0])
  const [config, setConfig] = useState("")
  const [sessionId, setSessionId] = useState("")


  // Get Cookies
  useEffect(() => {
    const data = Cookies.get();
    setUsername(data.name)
    setEmail(data.email)
    setUserToken(data.token)
    setUID(data.uid)

    const chatId = sessionStorage.getItem(('chatID'));
    if (chatId) {
      setSessionId(chatId);
    }

    // Create New Chat Session
    else {
      const endpoint = 'http://localhost:4000/v1' + '/chat';

      const fecthData = async () => {
        try {
          setLoading(true)
          const timestamp = new Date().getTime()
          const response = await axios.post(endpoint, {
            "session": data.uid + timestamp,
            "messages": [
              { "system": "Assistant", "content": "You are a helpful Assistantee" }
            ]
          },
            {
              headers: {
                Authorization: data.token
              }
            });
          if (response) {
            setLoading(false)
            sessionStorage.setItem('chatID', response.data.data.id)
          }
        } catch (error) {
          setLoading(false)
          console.error('Error posting data:', error);
          throw error;
        }
      }

      fecthData();
    }
  })

  // Params
  const [params, setParams] = useState({
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  })

  // Chat Completion
  const sendRequest = async (e) => {
    e.preventDefault();

    // Send Request to OPENAI API
    const newMessage = [...messages]
    newMessage.push({ role: "user", content: input })
    setMessages(newMessage)
    setInput("")
    const endpointChat = 'http://localhost:4000/v1'+'/text-generation';
    try {
      setLoading(true)
      const response = await axios.post(endpointChat, {
        "messages": newMessage,
        "model": inputModel,
        "temperature": params.temperature,
        "max_token": params.max_tokens,
        "top_p": params.top_p,
        "frequency_penalty": params.frequency_penalty,
        "presence_penalty": params.presence_penalty
      },
        {
          headers: {
            Authorization: userToken
          }
        });
      if (response) {
        newMessage.push(response.data.data.completion.choices[0].message)
        setMessages(newMessage)
        setLoading(false)
      }
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }

    // Update Message in Database
    const endpointDB = 'http://localhost:4000/v1'+'/chat/update';
    try {
      const response = await axios.patch(endpointDB, {
        "id"      : sessionId,
        "messages": newMessage,
      },
        {
          headers: {
            Authorization: userToken
          }
        });
      if (response) {
        console.log(response)
      }
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  };


  return (
    <div className='h-screen bg-slate-900 flex fixed w-full'>

      {/* Modal Box */}
      {config == 'parameters' ?
        <Params setParams={setParams} params={params} setConfig={setConfig} />
        : config == 'setting_model' ?
          <SettingModel setParams={setParams} params={params} setInput={setInput} setConfig={setConfig} setMessages={setMessages} />
          : config == 'history' ? 
          <History setConfig={setConfig} setSessionId={setSessionId} setMessages={setMessages} token={userToken} />
            : null}


      {/* Left Nav Menu */}
      <div className='w-44 bg-slate-950 h-full border-r border-opacity-5 border-white pt-8'>
        <nav className='flex flex-col'>
          <Image className='mb-6 w-full px-6' src="/Logo.png" width={120} height={100} />
          <p className='px-2 text-xs text-slate-200 mb-1'>Configuration</p>
          <p onClick={() => setConfig('setting_model')} className='flex cursor-pointer items-center py-3 hover:border-l-4 px-2 border-b border-opacity-5 border-white hover:bg-white hover:bg-opacity-5'><SiOpenaigym className='text-lg' /><span className='ml-2 text-sm text-slate-100 text-opacity-100'>Setting Role</span></p>
          <p onClick={() => setConfig('parameters')} className='flex cursor-pointer items-center py-3 hover:border-l-4 px-2 border-b border-opacity-5 border-white hover:bg-white hover:bg-opacity-5'><MdOutlineSettingsInputComponent className='text-lg' /><span className='ml-2 text-sm text-slate-100 text-opacity-100'>Parameters</span></p>
          {/* <p onClick={()=>setConfig('')} className='flex items-center py-3 hover:border-l-4 px-2 border-b border-opacity-5 border-white hover:bg-white hover:bg-opacity-5'><MdAccountTree className='text-lg' /><span className='ml-2 text-sm text-slate-100 text-opacity-100'>Tools</span></p> */}
          {/* <p onClick={()=>setConfig('')} className='flex items-center py-3 hover:border-l-4 px-2 border-b border-opacity-5 border-white hover:bg-white hover:bg-opacity-5'><MdCode className='text-lg' /><span className='ml-2 text-sm text-slate-100 text-opacity-100'>Token</span></p> */}
          <p onClick={() => setConfig('history')} className='flex cursor-pointer items-center py-3 hover:border-l-4 px-2 border-b border-opacity-5 border-white hover:bg-white hover:bg-opacity-5'><MdContentPaste className='text-lg' /><span className='ml-2 text-sm text-slate-100 text-opacity-100'>History</span></p>
        </nav>
      </div>

      {/* Main Board */}
      <div className='flex-1 h-screen flex flex-col'>

        {/* Header Menu */}
        <div className='flex justify-between items-center w-11/12 mx-auto py-1'>
          <div className="shadow-lg rounded-2xl bg-slate-800 py-2 px-4">
            <div className="flex-row gap-4 flex justify-center items-center">
              <p>Model Used</p>

              <select onChange={e => setInputModel(e.currentTarget.value)} className="text-sm text-gray-400 bg-slate-800">
                {models ?
                  models.map((md, i) => {
                    return (<option key={i} value={md}>{md}</option>)
                  })
                  : null}
              </select>
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
                <span className="text-md capitalize font-medium text-gray-600 dark:text-white">
                  {username}
                </span>
                <span className="text-xs text-gray-400">
                  {email}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Chat */}
        <div className='flex-1 mt-2 flex flex-col items-center overflow-auto'>
          {messages ? messages.map((msg, i) => {
            if (i !== 0) {
              if (msg.role == 'user') {
                return (<div key={i} className='w-10/12 my-2 mx-auto bg-slate-800 rounded-xl px-6 py-3 flex flex-col'>
                  <div className='flex items-center justify-start'>
                    <Image alt="profil" src="/profile.jpg" className="object-cover rounded-full h-5 w-5" width={50} height={50} />
                    <p className='ml-2 text-sm font-semibold'>Charlie Puth</p>
                  </div>
                  <p className='mt-2 text-slate-200'>{msg.content}</p>
                </div>);
              }
              else {
                return (<div key={i} className='w-10/12 my-2 mx-auto bg-slate-800 rounded-xl px-6 py-3 flex flex-col'>
                  <div className='flex items-center justify-start'>
                    <Image alt="profil" src="/Openai.png" className="object-cover rounded-full h-5 w-5" width={50} height={50} />
                    <p className='ml-2 text-sm font-semibold'>System</p>
                  </div>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    className='mt-2'
                    children={msg.content}
                    components={{
                      code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        return !inline && match ? (
                          <SyntaxHighlighter
                            className="rounded-lg px-8 py-2 text-sm my-2 border border-slate-50 border-opacity-20"
                            children={String(children).replace(/\n$/, "")}
                            language={match[1]}
                            style={a11yDark}
                            {...props}
                          />
                        ) : (
                          <code className={className} {...props}>
                            {children}
                          </code>
                        );
                      },
                    }}
                  />
                </div>);
              }
            }
          }) : null}
          {loading ?
            (<div className='bg-slate-800 px-4 rounded-full'>
              <ReactLoading type="bubbles" color="#ffffff" height={30} width={30} />
            </div>)
            : null}
        </div>

        {/* Prompt Start */}
        <form onSubmit={(e) => sendRequest(e)} className='justify-center flex gap-x-2 items-center py-3 h-16'>
          <a href="#" className="relative block">
            <Image alt="profil" src="/profile.jpg" className="mx-auto object-cover rounded-full h-10 w-10" width={50} height={50} />
          </a>
          <input type="text" className='bg-slate-800 mx-1 w-8/12 px-6 py-2 rounded-full text-slate-50' name="input" value={input} onChange={(e) => setInput(e.currentTarget.value)} placeholder='Say what you want to say...' />
          {loading ?
            <button className='p-2 bg-white text-slate-900 rounded-full text-xl' disabled>
              <MdSend />
            </button>
            :
            <button className='p-2 bg-white text-slate-900 rounded-full text-xl'>
              <MdSend />
            </button>
          }

        </form>
      </div>

    </div>
  )
}

export default TextGeneration