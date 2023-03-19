import React, {useEffect} from 'react'
import MainLayout from '../../components/MainLayout'
import CatBlogSection from './CatBlogSection'
import MostSearched from './MostSearched'
import SearchSection from './SearchSection'
import useSWR from 'swr'
import { fetcher } from '../../utils/fetcher'
import { useCatsStore } from '../../store/catsStore'

function HomePage() {
  const { data: cats, isLoading } = useSWR(`${import.meta.env.VITE_API_ENDPOINT}/breeds?api_key=${import.meta.env.VITE_API_KEY}`, fetcher)
  const setCats = useCatsStore((state) => state.setCats)
  setCats(cats)
  
  if(isLoading) return <div>Loading</div>
  return (
    <>
      <MainLayout>
        <SearchSection />
        <MostSearched />
        <CatBlogSection />
      </MainLayout>
    </>
  )
}

export default HomePage