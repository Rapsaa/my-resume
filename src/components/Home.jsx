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
                I work as a Game Developer, but have also done software development. 
                I am also very interested in the cloud and starting a cloud career.</p>
        </div>

    </div>
  )
}

export default Home