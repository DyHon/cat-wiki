import React from 'react'
import MainLayout from '../../components/MainLayout'
import CatBlogSection from './CatBlogSection'
import MostSearched from './MostSearched'
import SearchSection from './SearchSection'

function HomePage() {
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