import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

function CatBlogSection() {
  return (
    <div className='flex flex-col space-y-10 py-8 lg:flex-row items-center justify-evenly lg:p-16'>
      <div className='flex flex-col space-y-8 md:w-[40%]'>
        <div className='relative text-[#291507] text-2xl md:text-4xl font-bold'>
          Why should you have a cat?
          <div className='absolute left-0 top-[-1rem] border-t-[3px] border-[#4D270C] w-1/4'></div>
        </div>
        <div>
          Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves
        </div>
        <button className='flex flex-row w-28 text-sm border-none font-semibold text-[rgba(41,21,7,0.6)] p-0 hover:cursor-pointer'>
          READ MORE <ArrowRightIcon className='h-4 mt-0.5' />
        </button>
      </div>
      <div className='flex flex-row md:w-[40%]'>
        <div>
          <img src="/src/assets/image 2.png" alt="" />
          <img src="/src/assets/image 1.png" alt="" />
        </div>
        <div className='flex items-center'>
          <img src="/src/assets/image 3.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default CatBlogSection