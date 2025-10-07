import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='relative overflow-hidden flex flex-col-reverse'>
      {/* Background Image */}
      <div className='lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-2/5 xl:w-1/2 lg:z-0'>
        <Image
          src='/hero-bg.jpg'
          alt='close-up-family-discussing-with-therapist'
          className='object-cover object-center lg:object-[30%] w-full h-full'
          sizes='(max-width: 768px) 100vw, 50vw'
          width={1600}
          height={900}
          priority
        />
      </div>

      {/* Overlay */}
      <div className='absolute inset-0 w-full h-full pointer-events-none bg-[linear-gradient(180deg,_#E5E4E8_0%,_rgba(235,234,239,0)_50%)] lg:bg-[linear-gradient(90deg,_#E5E4E8_20%,_rgba(235,234,239,0)_80%)] ' />

      {/* Content */}
      <div className='max-w-7xl w-full mx-auto relative z-20 px-4'>
        <div className='flex flex-col gap-6 py-10 lg:py-20 items-center lg:items-start'>
          <h1 className='max-w-[650px] font-poppins font-semibold text-center lg:text-start text-3xl md:text-5xl lg:text-[64px] lg:leading-[120%] lg:tracking-[0.01em] capitalize text-[#028650]'>
            Pediatrician Home Visit in Dubai – 24/7 Expert Child Care at Your Doorstep
          </h1>
          <p className='max-w-[600px] font-poppins text-center lg:text-start md:text-[18px] lg:leading-[160%] lg:tracking-[0.02em] text-[#028650]'>
            If your child is unwell, skip the hospital waiting rooms. Call My Doctor provides licensed pediatricians at home, 24/7 across Dubai—bringing expert
            care, comfort, and peace of mind directly to your family.
          </p>
          <button
            className='bg-[#028650] text-white py-3 px-6 w-full md:w-auto md:py-4 md:px-10 rounded-2xl shadow-[0px_8px_23px_0px_rgba(48,178,48,0.235)] cursor-pointer transition-all duration-150
                hover:bg-[#02653c] hover:shadow-[0px_12px_32px_0px_rgba(48,178,48,0.30)]
                active:bg-[#014c2c] active:shadow-[0px_4px_12px_0px_rgba(48,178,48,0.18)]'
          >
            Book a Pediatrician at Home
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
