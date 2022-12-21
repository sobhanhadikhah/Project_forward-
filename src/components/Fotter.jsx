
import React from 'react'
import { FaTwitch, FaFacebook, FaGithub, FaInstagram, FaTwitter, } from "react-icons/fa";
import Button from './Button';

function Fotter() {
    return (
        <div className='w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2 ' >
            <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8  ' >
                <div>
                    <h6 className='font-bold uppercase pt-2' >solotions</h6>
                    <ul className='capitalize' >
                        <li className='py-2 ' >Markting</li>
                        <li className='py-2 ' >all file</li>
                        <li className='py-2 ' >onlyfans</li>
                        <li className='py-2 ' >mamad</li>
                        <li className='py-2 ' >irna</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold uppercase pt-2' >solotions</h6>
                    <ul className='capitalize' >
                        <li className='py-2 ' >Markting</li>
                        <li className='py-2 ' >all file</li>
                        <li className='py-2 ' >onlyfans</li>
                        <li className='py-2 ' >mamad</li>
                        <li className='py-2 ' >irna</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold uppercase pt-2' >solotions</h6>
                    <ul className='capitalize' >
                        <li className='py-2 ' >Markting</li>
                        <li className='py-2 ' >all file</li>
                        <li className='py-2 ' >onlyfans</li>
                        <li className='py-2 ' >mamad</li>
                        <li className='py-2 ' >irna</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold uppercase pt-2' >solotions</h6>
                    <ul className='capitalize' >
                        <li className='py-2 ' >Markting</li>
                        <li className='py-2 ' >all file</li>
                        <li className='py-2 ' >onlyfans</li>
                        <li className='py-2 ' >mamad</li>
                        <li className='py-2 ' >irna</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold uppercase pt-2' >solotions</h6>
                    <ul className='capitalize' >
                        <li className='py-2 ' >Markting</li>
                        <li className='py-2 ' >all file</li>
                        <li className='py-2 ' >onlyfans</li>
                        <li className='py-2 ' >mamad</li>
                        <li className='py-2 ' >irna</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold uppercase pt-2' >solotions</h6>
                    <ul className='capitalize' >
                        <li className='py-2 ' >Markting</li>
                        <li className='py-2 ' >all file</li>
                        <li className='py-2 ' >onlyfans</li>
                        <li className='py-2 ' >mamad</li>
                        <li className='py-2 ' >irna</li>
                    </ul>
                </div>
                <div className='col-span-2 pt-8 md:pt-2' >
                    <p className='uppercase font-bold ' > subscribe to social clubes </p>
                    <p className='py-4' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, sint!</p>
                    <form className='flex flex-col md:flex-row' >
                        <input className='w-full p-2 mr-4 rounded-md mb-4  ' placeholder='Email' type="email" />
                        <Button text={`Submite`} newstyle={`p-2 mb-4 transition duration-300 ease-in-out  `} />
                    </form>
                </div>
            </div>
            <div className='felx flex-col max-w-[1240px] m-auto py-4 justify-between sm:flex-row text-center text-gray-500 ' >
                <p>2022  sobhanhadikhah LLC. All right reseve </p>
                <div className='flex justify-between  sm:w-[300px]  pt-4 text-2xl  '  >
                    <FaFacebook className='text-blue-700' />
                    <FaGithub className='text-white' />
                    <FaTwitch className='text-purple-500' />
                    <FaTwitter className='text-blue-400' />
                </div>
            </div>
        </div>
    )
}

export default Fotter