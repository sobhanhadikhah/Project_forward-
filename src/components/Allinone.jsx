import React from 'react'
import { CheckIcon } from "@heroicons/react/outline";
import Datanotfe from '../API/Data';
function Allinone() {
    return (
        <div name="platform" className='w-full my-32' >
            <div className='max-w-[1240px] mx-auto px-2' >
                <h2 className='text-5xl font-bold text-center' >Allin one platfor</h2>
                <p className='text-2xl  p-8  text-center ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. In iusto sit sapiente. Non pariatur, voluptates ipsum consectetur assumenda deleniti cumque?</p>
                <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4 ' >
                    {Datanotfe.map((data, index) => (
                        <div key={index} >
                            <div className='flex'  >
                                <div>
                                    <CheckIcon className='w-7 mr-4  text-green-600 ' />

                                </div>
                                <div>
                                    <h3 className='font-bold text-lg' >
                                        Notigiction
                                    </h3>
                                    <p className='text-lg pt-2 pb-4'  >
                                        {data.notif}
                                    </p>

                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Allinone 