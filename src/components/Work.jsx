import React from 'react'

import WorkCard from './reusable/WorkCard'

import portfolioPageImg from '../assets/workimg.png'
import placeholderImg from '../assets/placehoderwork.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-gradient-to-b from-[#0B0C10] to-[#1F2833] text-[#C5C6C7]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#66FCF1]'>Work</p>
                <p className='py-4'>Here is my work, feel free to check them out!</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-center py-8'>

            <WorkCard
                cardTitle={
                    'Portfolio'
                } cardText={
                    'My portfolio/resume page'
                } cardImage={portfolioPageImg}
            />
            <WorkCard
                cardTitle={
                    'Otsikko'
                } cardText={
                    'Tekstiä ja tekstiä'
                } cardImage={placeholderImg}
            />
            <WorkCard
                cardTitle={
                    'Kortti 3'
                } cardText={
                    'Tekstiä ja tekstiä'
                } cardImage={placeholderImg}
            />
            <WorkCard
                cardTitle={
                    'Kortti 4'
                } cardText={
                    'Tekstiä ja tekstiä'
                } cardImage={placeholderImg}
            />
            
            </div>
        </div>

    </div>
  )
}

export default Work