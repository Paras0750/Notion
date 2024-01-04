import TitleSection from '@/components/landing-page/title-section'
import React from 'react'

const HomePage = () => {
  return (
    <section className='overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center'>
      <TitleSection pill='✨ Your Workspace Perfected'
        title="All-In-One Platform"
      />
      <div
        className='bg-white
        p-[2px] rounded-xl
        mt-[6]
        bg-gradient-to-r
        from-primary
        to-brand-primaryBlue
        sm:w-[300px]
        '
      >
        <button
          // variant="btn-secondary"
          className=" w-full
            rounded-[10px]
            p-6
            text-2xl
            bg-background
          "
        >
          Get Cypress Free
        </button>,
      </div>
    </section>
  )
}

export default HomePage


46: 20
