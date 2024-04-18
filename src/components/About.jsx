import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-[#0B0C10] to-[#1F2833] text-[#C5C6C7]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#66FCF1]'>
                      About
                    </p>
                </div>
                <div></div>
            </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div>
                      <p className='sm:text-right text-4xl font-bold inline'>Hi. I'm Tapani, welcome. Take a look at my site.</p>
                    </div>
                    <div>
                      <p>Some text about my iterests about web development and what not</p>
                    </div>
                </div>
            
        </div>
    </div>
  )
}

export default About