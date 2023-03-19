import React, { useState } from 'react';
import { useCatsStore } from '../../store/catsStore';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { catPageQuery } from '../../api/cat';

function SearchSection() {
  const [openSearch, setOpenSearch] = useState(false);
  const [displayNames, setDisplayNames] = useState(null);

  const data = useCatsStore((state) => state.cats);
  const catNames = data.map((cat) => ({
      id: cat.id,
      name: cat.name.toLowerCase()
    }
  ));
  
  const handleSearchChange = (e) => {
    setOpenSearch(true)
    const searchInput = e.target.value
    setDisplayNames(catNames.filter(catName => { return catName.name.search(searchInput) != -1 }))
  }

  return (
    <div
      className='md:h-[32rem] mt-20
      bg-[url(/src/assets/HeroImagesm.png)] 
      md:bg-[url(/src/assets/HeroImagelg.png)] 
      bg-top md:bg-center bg-cover bg-no-repeat 
      py-24 px-16 rounded-t-[3rem] inline-block'
    >
      <div className='flex flex-col md:w-1/2 w-full'>
        {/* Logo */}
        <img className='h-1/2 w-1/2' src="/assets/CatwikiLogoFooter.svg" alt="" />
        {/* Title */}
        <div className='text-xl md:text-2xl text-white mt-4'>Get to know more about your cat breed</div>
        {/* Search Box */}
        <div className='flex items-center mt-8 relative'>
          <input
            type="text"
            className="border-none focus:outline-none w-3/4 py-3 pl-6 pr-8 rounded-full text-xl -mr-8"
            placeholder="Enter your breed"
            onChange={handleSearchChange}
            onBlur={() => setTimeout(() =>setOpenSearch(false), 100)}
          />
          <button className="border-none" type='button'>
            <svg className="h-6 w-6 fill-black" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
          </button>
          {/* Search Bar */}
          {openSearch &&
            <section
              className='bg-white absolute top-16 w-[80%] rounded-2xl z-10 overflow-y-scroll h-48'>
              {displayNames?.map((displayName) =>
                <Link reloadDocument key={displayName.id} to={`breed/${displayName.id}`}
                >
                  <div className='hover:bg-[rgba(151,151,151,0.3)] hover:cursor-pointer p-4'>
                    {displayName.name}
                  </div>
                </Link>
                // <a key={displayName.id} href={`breed/${displayName.id}`}
                // >
                //   <div className='hover:bg-[rgba(151,151,151,0.3)] hover:cursor-pointer p-4'>
                //     {displayName.name}
                //   </div>
                // </a>
              )}
            </section>
          }
        </div>
      </div>
    </div>
  )
}

export default SearchSection