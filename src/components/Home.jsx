import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {

    let color1 = '#0B0C10';
    let color2 = '#1F2833';
    let color3 = '#C5C6C7';
    let color4 = '#66FCF1';
    let color5 = '#45A29E';

  return (
    <div name='home' className={`w-full h-screen bg-gradient-to-b from-[#1F2833] to-[#0B0C10]`}>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className={`text-[#45A29E]`}>Hi, my name is</p>
            <h1 className={`text-4xl sm:text-6xl font-bold text-[#C5C6C7]`}>Tapani Kolehmainen</h1>
            <h2 className={`text-4xl sm:text-6xl font-bold text-[#66FCF1]`}>I'm a Software Developer</h2>
            <p className={`text-[#45A29E] py-4 max-w-[700px]`}>
                I work as a Game Developer, but I have also done software development. 
                I am also very interested in the cloud and starting a cloud career.</p>

            <div>
            <button className='text-[#C5C6C7] border-[#C5C6C7] group border-2 px-6 py-3 my-2 flex items-center rounded-sm hover:border-[#66FCF1] hover:text-[#66FCF1] hover:shadow-xl hover:shadow-[#66FCF1]/50'>Resume
            <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
            </span>
            </button>
        </div>   
        </div>

        

    </div>
  )
}

export default Home