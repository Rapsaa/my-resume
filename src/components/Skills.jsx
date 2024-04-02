import React from 'react'

import CSS from '../assets/css.png'
import Csharp from '../assets/csharp.png'
import HTML from '../assets/html.png'
import GitHub from '../assets/github.png'
import JavaScript from '../assets/javascript.png'
import Node from '../assets/node.png'
import ReactImg from '../assets/react.png'
import TypeScript from '../assets/typescript.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-gradient-to-b from-[#1F2833] to-[#0B0C10] text-[#C5C6C7]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#66FCF1]'>Skills</p>
                <p className='py-4'>These are some common technologies I've worked with.</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

                <div className='bg-gradient-to-t from-[#1F2833] hover:scale-110 duration-500 rounded-b'>
                    <img className='w-20 mx-auto' src={JavaScript}/>
                    <p>JavaScript</p>
                </div>
                <div className='bg-gradient-to-t from-[#1F2833] hover:scale-110 duration-500 rounded-b'>
                    <img className='w-20 mx-auto' src={Csharp}/>
                    <p>C#</p>
                </div>
                <div className='bg-gradient-to-t from-[#1F2833] hover:scale-110 duration-500 rounded-b'>
                    <img className='w-20 mx-auto' src={ReactImg}/>
                    <p>ReactJS</p>
                </div>
                <div className='bg-gradient-to-t from-[#1F2833] hover:scale-110 duration-500 rounded-b'>
                    <img className='w-20 mx-auto' src={TypeScript}/>
                    <p>TypeScript</p>
                </div>
                <div className='bg-gradient-to-t from-[#1F2833] hover:scale-110 duration-500 rounded-b'>
                    <img className='w-20 mx-auto' src={HTML}/>
                    <p>HTML</p>
                </div>
                <div className='bg-gradient-to-t from-[#1F2833] hover:scale-110 duration-500 rounded-b'>
                    <img className='w-20 mx-auto' src={CSS}/>
                    <p>CSS</p>
                </div>
                <div className='bg-gradient-to-t from-[#1F2833] hover:scale-110 duration-500 rounded-b'>
                    <img className='w-20 mx-auto' src={GitHub}/>
                    <p>GitHub</p>
                </div>
                <div className='bg-gradient-to-t from-[#1F2833] hover:scale-110 duration-500 rounded-b'>
                    <img className='w-20 mx-auto' src={Node}/>
                    <p>Node.js</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills