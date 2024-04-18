import React from 'react'
import { FaGithub } from 'react-icons/fa'

const WorkCard = ({ cardTitle, cardText, cardImage, linkTo}) => {
  return (
      <div style={{backgroundImage: `url(${cardImage})`}} className='shadow-lg shadow-black group container rounded flex justify-center items-center mx-auto work-card'>

        {/* Hover effects */}
        <div className='opacity-0 bg-cover w-full h-full group-hover:opacity-100 group-hover:bg-gradient-to-b from-[#0B0C10] to-[#1F2833] group-hover:bg-cover pt-8'>
          <span className='text-2xl font-bold text-white tracking-wider'>

            {cardTitle}

          </span>

          <div className='pt-8 text-center hover:opacity-100'>
            <a href="/">
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
            </a>
            <a href="/">
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
            </a>
          </div>


        </div>

      </div>
  )
}

export default WorkCard