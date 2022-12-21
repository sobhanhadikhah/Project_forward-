import React from 'react'

function About() {
    return (
        <div className='w-full my-32' name="about" >

            <div className='max-w-[1240px] mx-auto ' >
                <div className='text-center  ' >
                    <h2 className='md:text-5xl font-bold  text-5xl ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, iste.</h2>
                    <p className='text-3xl py-6 text-gray-500 capitalize  ' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptates illo nam. Libero quod magni delectus ipsa fugiat omnis neque.</p>
                </div>
                <div className='grid md:grid-cols-3 px-2 text-center ' >
                    <div className='border py-8 rounded-xl shadow-xl  '  >
                        <p className='text-6xl font-bold text-indigo-600' >100%</p>
                        <p className='text-gray-400 mt-2  ' >Completion</p>

                    </div>
                    <div className='border py-8 rounded-xl shadow-xl  ' >
                        <p className='text-6xl font-bold text-indigo-600' >24/7</p>
                        <p className='text-gray-400 mt-2  ' >Deleviry</p>

                    </div>
                    <div className='border py-8 rounded-xl shadow-xl  '  >
                        <p className='text-6xl font-bold text-indigo-600'  >100K</p>
                        <p className='text-gray-400 mt-2  '  >transtion </p>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default About