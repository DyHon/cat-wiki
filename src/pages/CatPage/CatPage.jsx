import React, {useState, useEffect} from 'react'
import MainLayout from '../../components/MainLayout'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { catPageQuery } from '../../api/cat'
import RatingPoint from '../../components/CatPage/RatingPoint'

function CatPage() {
  const params = useParams()
  const { data: catInfos, isLoading } = useQuery(catPageQuery(params.breedId))
  console.log(catInfos)
  
  if (isLoading) return <div>isLoading...</div>
  return (
    <MainLayout>
      <div className='flex md:flex-row flex-col mt-20 justify-evenly'>
        <div className='md:w-[30%]'>
          <img src={catInfos[0].url} alt="" className='w-full h-64 object-cover rounded-2xl' />
        </div>
        <div className='md:w-[60%] flex flex-col space-y-5 font-medium'>
          <div className='text-[#291507] text-2xl md:text-3xl font-bold'>{catInfos[0].breeds[0].name}</div>
          <div>
            { catInfos[0].breeds[0].description }
          </div>
          <div>
            <span className='font-bold'>Temperament: </span>
            { catInfos[0].breeds[0].temperament }
          </div>
          <div>
            <span className='font-bold'>Origin: </span>
            { catInfos[0].breeds[0].origin }
          </div>
          <div>
            <span className='font-bold'>Life Span: </span>
            { catInfos[0].breeds[0].life_span }
          </div>
            
          <RatingPoint propName='Adaptability' ratingPoint={catInfos[0].breeds[0].adaptability} />
          <RatingPoint propName='Affection level' ratingPoint={catInfos[0].breeds[0].affection_level} />
          <RatingPoint propName='Child friendly' ratingPoint={catInfos[0].breeds[0].child_friendly} />
          <RatingPoint propName='Grooming' ratingPoint={catInfos[0].breeds[0].grooming} />
          <RatingPoint propName='Intelligence' ratingPoint={catInfos[0].breeds[0].intelligence} />
          <RatingPoint propName='Health issues' ratingPoint={catInfos[0].breeds[0].health_issues} />
          <RatingPoint propName='Social needs' ratingPoint={catInfos[0].breeds[0].social_needs} />
          <RatingPoint propName='Stranger friendly' ratingPoint={catInfos[0].breeds[0].stranger_friendly} />
        </div>
      </div>
        <div className='space-y-6 my-12'>
          <div className='text-[#291507] text-2xl md:text-3xl font-bold'>Other photos</div>
          <div className='grid grid-cols-4 gap-10'>
            {catInfos?.slice(1, catInfos.length + 1).map(cat => 
              <img src={cat.url} alt="" key={cat.id} className='w-full h-64 object-cover rounded-2xl' />
            )}
          </div>
        </div>
    </MainLayout>
  )
}

export default CatPage