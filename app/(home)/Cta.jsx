import Image from 'next/image'
import React from 'react'

const Cta = () => {
  return (
    <section className='relative'>
      <div className='absolute left-0 right-0 top-1/2 -translate-y-1/2  z-10'>
        <div className='max-w-7xl w-full mx-auto px-4'>
          <div className='relative bg-[#004984] rounded-xl px-4 py-8 md:px-9 md:py-12 flex flex-col md:flex-row justify-between md:items-center gap-10 overflow-hidden'>
            <Image
              src='/ellipse-left.svg'
              width={200}
              height={200}
              alt='Ellipse Left'
              className='max-lg:hidden pointer-events-none select-none absolute top-0 bottom-0 left-0 z-0'
            />
            <Image
              src='/ellipse-right.svg'
              width={150}
              height={150}
              alt='Ellipse Right'
              className='pointer-events-none select-none absolute top-0 bottom-0 right-0 z-0'
            />
            <div className='flex flex-col gap-4 z-10'>
              <h2 className='font-poppins font-semibold text-[#EBEBEB] text-2xl lg:text-3xl leading-[100%] tracking-[-0.01em] capitalize'>
                Book a pediatrician home visit in Dubai today.
              </h2>
              <p className='font-poppins font-normal text-[#EBEBEB] text-base lg:text-xl leading-[100%] tracking-[-0.01em]'>
                Your child deserves the best care without the stress of hospitals.
              </p>
            </div>
            <div className='z-10'>
              <button
                type='button'
                className='cursor-pointer whitespace-nowrap px-2 sm:px-[70px] py-3 sm:py-4 rounded-full bg-white text-[#01437C] font-poppins font-semibold text-base max-sm:w-full lg:text-lg shadow-md transition-colors duration-150'
              >
                Book now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta
