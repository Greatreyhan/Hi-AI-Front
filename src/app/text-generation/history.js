import React, { useEffect, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import axios from 'axios';

const History = ({ setConfig, setSessionId, setMessages, token }) => {
    const [dataChat, setDataChat] = useState([])
    useEffect(() => {

        const endpoint = 'http://localhost:4000/v1' + '/chat/history';

        const fecthData = async () => {
            try {
                const response = await axios.get(endpoint,
                    {
                        headers: {
                            Authorization: token
                        }
                    });
                if (response) {
                    setDataChat(response.data.data)
                }
            } catch (error) {
                console.error('Error get data:', error);
                throw error;
            }
        }
        if(token) fecthData();
    }, [])

    const handleSession = (e) =>{
        // get message and session
        const id_session = e.currentTarget.id.split('-')[0]
        const messages = dataChat[e.currentTarget.id.split('-')[1]].messages

        // change session
        setSessionId(id_session);
        sessionStorage.clear();
        sessionStorage.setItem('chatID', id_session);

        // change message
        setMessages(messages);

        // close windows
        setConfig(false)
    }
    return (
        <div className='fixed flex flex-col justify-center items-center w-full h-screen bg-black bg-opacity-80 z-50'>

            <div className='px-8 py-8 bg-slate-800 rounded-lg shadow-md w-6/12 overflow-auto my-16'>
                <div className='w-full flex justify-end'>
                    <IoMdClose className='text-xl cursor-pointer' onClick={() => setConfig(false)} />
                </div>
                <h1 className='font-semibold text-xl text-center mb-8'>Your Chat History</h1>
                <ul className='flex flex-col justify-around mx-auto'>
                    {dataChat != [] ? 
                    dataChat.map((chat,i)=>{
                        
                        const dateObject = new Date(chat.updatedAt);
                        return(<li onClick={e=>handleSession(e)} className='my-1 cursor-pointer flex justify-between items-center px-4 py-1 bg-slate-700 rounded-lg' key={i} id={chat._id+'-'+i}><span className='text-md'>{chat.messages[chat.messages.length-1].content.slice(0, 40)}...</span> <span className='text-xs text-slate-400'>{dateObject.toLocaleDateString()}</span></li>)
                    })
                    : null}
                </ul>

            </div>
        </div>
    )
}

export default History