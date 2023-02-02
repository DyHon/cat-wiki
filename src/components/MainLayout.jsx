import React from 'react'

function MainLayout({children}) {
  return (
    <div className='px-16 flex flex-col'>
      {/* Header */}
      <div className='p-4'>
        <img src="/src/assets/CatwikiLogo.svg" alt="logo" />
      </div>
      {/* Content */}
      {children}
      {/* Footer */}
      <div className='flex justify-center'>
        <div className='bg-black p-4 w-full rounded-t-3xl text-white flex justify-between'>
          <img src='/src/assets/CatwikiLogoFooter.svg' alt='' />
          <span className='flex items-center text-xs md:text-base'>© created by DyHon - devChallenge.io 2021</span>
        </div>
      </div>
    </div>
  )
}

export default MainLayout