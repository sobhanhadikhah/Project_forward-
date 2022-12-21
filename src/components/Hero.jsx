import React from 'react';
import { cyber } from "../assets";
import { Button } from "../components"
import { ServerIcon, PaperAirplaneIcon, DatabaseIcon, CloudUploadIcon } from "@heroicons/react/outline"
function Hero() {
    return (
        <div name="home" className='w-full h-screen bg-zinc-200 flex flex-col justify-between ' >
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto' >
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8' >
                    <p className='text-2xl' > Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold ' >
                        Cloude management
                    </h1>
                    <p className='text-2xl' > this is our tech brand. </p>
                    <Button text={`Get started`} newstyle={`py-3 px-6  sm:w-[60%] my-4 `} />
                </div>
                <div>
                    <img className='w-full' src={cyber} alt="server" />
                </div>
                <>

                    <div className='absolute flex flex-col py-8 md:min-w-[760px]
                     bottom-[-5%]  md:bottom-0 mx-3 md:left-1/2
                      transform md:-translate-x-1/2 drop-shadow
                       bg-zinc-200 border border-slate-300   rounded-xl text-center shadow-xl ' >
                        <p>Data services</p>
                        <div className='flex justify-between  flex-wrap  px-4' >
                            <p className='flex px-4 py-2 text-indigo-600' ><CloudUploadIcon className='h-6' /> App Security</p>
                            <p className='flex px-4 py-2 text-indigo-600' ><DatabaseIcon className='h-6' /> Dashboard Desighn</p>
                            <p className='flex px-4 py-2 text-indigo-600' ><ServerIcon className='h-6' /> cloude Data</p>
                            <p className='flex px-4 py-2 text-indigo-600' ><PaperAirplaneIcon className='h-6' /> API</p>
                        </div>
                    </div>

                </>
            </div>
        </div>
    )
}

export default Hero