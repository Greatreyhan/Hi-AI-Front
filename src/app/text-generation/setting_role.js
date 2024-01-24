import React, { useState } from 'react'
import Slider from 'react-input-slider'
import { IoMdClose } from "react-icons/io";
import { dataRole } from './data_role';

const SettingRole = ({ setParams, params, setInput, setConfig, setMessages }) => {
    const [useRole, setUseRole] = useState({system: "Assistant", example : "Say this is a test", desc: "Let AI be an Assistant", content: "You are a helpful assistant", temperature: 0.7, max_tokens: 64, top_p: 1})
    const [role, setRole] = useState(dataRole)
    return (
        <div className='fixed flex flex-col justify-center items-center w-full h-screen bg-black bg-opacity-80 z-50'>
            
            <div className='px-8 py-8 bg-slate-800 rounded-lg shadow-md w-6/12'>
                <div className='w-full flex justify-end'>
                    <IoMdClose className='text-xl cursor-pointer' onClick={() => setConfig(false)} />
                </div>
                <h1 className='font-semibold text-xl text-center'>Change The Behavior of Chat GPT</h1>

                <div className='flex flex-col my-5 w-full'>
                    <label className='text-sm flex justify-between items-center mx-6' labelFor="temperature"><span className='font-semibold'>Select Role </span></label>
                    <select onChange={(e) => setUseRole(role[e.currentTarget.value])} className="text-sm text-slate-800 cursor-pointer bg-slate-50 mx-6 px-2 py-1 rounded-full mt-2 border">
                        {role ?
                        role.map((system,i)=>{
                            return(<option className='flex flex-col' key={i} value={i}>
                                    <p className='font-bold'>{system.system}</p>
                                    <p> | {system.desc}</p>
                                   </option>)
                        })
                        :null}
                        
                    </select>                
                    </div>

                <div className='flex flex-col my-5 w-full px-6'>
                    <label className='text-sm flex justify-between items-center' labelFor="temperature"><span className='font-semibold'>Customize Role </span></label>   
                    <textarea className='text-slate-800 w-full px-4 py-2 rounded-lg mt-2 h-48 text-sm' value={useRole.content}></textarea>             
                </div>

                <div className='flex justify-end my-5 px-6'>
                    <a onClick={()=>{setInput(useRole.example); setConfig(false); setParams({...params, temperature: useRole.temperature, max_tokens: useRole.max_tokens, top_p: useRole.top_p}); setMessages([{ role: "system", content: useRole.content }]) }} className='px-6 py-1.5 cursor-pointer bg-red-600 text-white font-semibold text-sm inline-block rounded'>Use Example</a>
                </div>

            </div>
        </div>
    )
}

export default SettingRole