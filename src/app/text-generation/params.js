import React from 'react'
import Slider from 'react-input-slider'
import { IoMdClose } from "react-icons/io";

const Params = ({ setParams, params, setConfig }) => {
    return (
        <div className='fixed flex flex-col justify-center items-center w-full h-screen bg-black bg-opacity-80 z-50'>

            <div className='px-8 py-8 bg-slate-800 rounded-lg shadow-md w-6/12'>
                <div className='w-full flex justify-end'>
                    <IoMdClose className='text-xl cursor-pointer' onClick={()=>setConfig(false)} />
                </div>
                <h1 className='font-semibold text-xl text-center'>Settings Parameter Whatever You Want</h1>
                <div className='flex justify-around mx-auto'>
                    <div className='m-4'>
                    <div className='flex w-48 flex-col my-5'>
                        <label className='text-sm flex justify-between items-center' labelFor="temperature"><span className='font-semibold'>Temperature </span><span>{params.temperature}</span></label>
                        <Slider className="my-2" axis='x' xmax={2} xmin={0} xstep={0.01} x={params.temperature} onChange={({ x }) => setParams({ ...params, temperature: x.toFixed(2) })} styles={{
                            track: {
                                backgroundColor: '#334155'
                            },
                            active: {
                                backgroundColor: '#E2E8F0'
                            },
                            thumb: {
                                width: 15,
                                height: 15
                            },
                            disabled: {
                                opacity: 0.5
                            }
                        }} />
                    </div>

                    <div className='flex w-48 flex-col my-5'>
                        <label className='text-sm flex justify-between items-center' labelFor="max_length"><span className='font-semibold'>Maximum Length</span><span>{params.max_tokens}</span></label>
                        <Slider className="my-2" id="max_length" axis='x' xmax={4095} xmin={1} xstep={1} x={params.max_tokens} onChange={({ x }) => setParams({ ...params, max_tokens: x })} styles={{
                            track: {
                                backgroundColor: '#334155'
                            },
                            active: {
                                backgroundColor: '#E2E8F0'
                            },
                            thumb: {
                                width: 15,
                                height: 15
                            },
                            disabled: {
                                opacity: 0.5
                            }
                        }} />
                    </div>

                    <div className='flex w-48 flex-col my-5'>
                        <label className='text-sm flex justify-between items-center' labelFor="top_p"><span className='font-semibold'>Top P</span><span>{params.top_p}</span></label>
                        <Slider className="my-2" id="top_p" axis='x' xmax={1} xmin={0} xstep={0.01} x={params.top_p} onChange={({ x }) => setParams({ ...params, top_p: x.toFixed(2) })} styles={{
                            track: {
                                backgroundColor: '#334155'
                            },
                            active: {
                                backgroundColor: '#E2E8F0'
                            },
                            thumb: {
                                width: 15,
                                height: 15
                            },
                            disabled: {
                                opacity: 0.5
                            }
                        }} />
                    </div>
                    </div>
                    
                    <div className='m-4'>
                    <div className='flex w-48 flex-col my-5'>
                        <label className='text-sm flex justify-between items-center' labelFor="freq_penalty"><span className='font-semibold'>Frequency Penalty</span><span>{params.frequency_penalty}</span></label>
                        <Slider className="my-2" id="freq_penalty" axis='x' xmax={2} xmin={0} xstep={0.01} x={params.frequency_penalty} onChange={({ x }) => setParams({ ...params, frequency_penalty: x.toFixed(2) })} styles={{
                            track: {
                                backgroundColor: '#334155'
                            },
                            active: {
                                backgroundColor: '#E2E8F0'
                            },
                            thumb: {
                                width: 15,
                                height: 15
                            },
                            disabled: {
                                opacity: 0.5
                            }
                        }} />
                    </div>

                    <div className='flex w-48 flex-col my-5'>
                        <label className='text-sm flex justify-between items-center' labelFor="presence_penalty"><span className='font-semibold'>Presence Penalty</span><span>{params.presence_penalty}</span></label>
                        <Slider className="my-2" id="presence_penalty" axis='x' xmax={2} xmin={0} xstep={0.01} x={params.presence_penalty} onChange={({ x }) => setParams({ ...params, presence_penalty: x.toFixed(2) })} styles={{
                            track: {
                                backgroundColor: '#334155'
                            },
                            active: {
                                backgroundColor: '#E2E8F0'
                            },
                            thumb: {
                                width: 15,
                                height: 15
                            },
                            disabled: {
                                opacity: 0.5
                            }
                        }} />
                    </div>
                    </div>

    
                </div>
                
            </div>
        </div>
    )
}

export default Params