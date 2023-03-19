import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import useSWR from "swr"
import { fetcher } from '../../utils/fetcher'

function MostSearched() {
  const { data: catImages } = useSWR(`${import.meta.env.VITE_API_ENDPOINT}/breeds?api_key=${import.meta.env.VITE_API_KEY}&limit=4`, fetcher)

  return (
    <div className='bg-[#E3E1DC] py-4 md:py-9 px-8 md:px-20 text-[#291507] space-y-6 rounded-b-[3rem]'>
      {/* Title */}
      <div className='relative w-full md:w-1/5'>
        Most Searched Breeds
        <div className='absolute left-0 bottom-0 border-b-[3px] border-[#4D270C] w-1/4'></div>
      </div>
      {/* Title */}
      <div className='flex flex-col md:flex-row space-y-2'>
        <div className='w-full md:w-1/2 text-2xl md:text-4xl font-bold'>
          66+ Breeds For you to discover
        </div>
        <div className='w-1/2 flex md:justify-end'>
          <div
            className='border-none font-semibold text-opacity-60 p-0 hover:cursor-pointer flex flex-col md:justify-end'
          >
            <span className='flex'>
              SEE MORE <ArrowRightIcon className='h-4 mt-1 ml-1' />
            </span>
          </div>
        </div>
      </div>
      {/* Example Breeds */}
      <div className='flex flex-row flex-wrap justify-around'>
        {catImages?.map(image =>
          <div className='w-[45%] lg:w-[22%]' key={image.id}>
            <img className='w-full h-40 lg:h-60 rounded-3xl' src={image.image.url} alt="" />
            <div className='text-sm md:text-base font-semibold md:mt-3'>{ image.name }</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MostSearched