import React from 'react'

import Workimg from '../assets/workimg.png'

const Work = () => {
  return (
    <div name='skills' className='w-full h-screen bg-gradient-to-b from-[#0B0C10] to-[#1F2833] text-[#C5C6C7]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#66FCF1]'>Work</p>
                <p className='py-4'>Here is my work, feel free to check them out!</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center py-8'>

            <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={Workimg} alt="" />
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">My portfolio page</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </a>
            
            </div>
        </div>

    </div>
  )
}

export default Work