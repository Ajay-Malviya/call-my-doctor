import Image from 'next/image'
import React from 'react'

const benefitsData = [
  {
    icon: '/calender-icon.svg',
    title: 'Instant Appointment',
    desc: 'With our pediatricians by your side, you can get expert care for your child at your home, avoiding the hassle of visiting a hospital or clinic.',
  },
  {
    icon: '/hospital-icon.svg',
    title: 'No Traveling or Waiting',
    desc: 'Give your little one outclass medical care in the relaxation of their home, ensuring a great experience and a speedy recovery.',
  },
  {
    icon: '/care-hand-icon.svg',
    title: 'Expert Pediatric Care',
    desc: 'With our pediatricians by your side, you can get expert care for your child at your home, avoiding the hassle of visiting a hospital or clinic.',
  },
  {
    icon: '/care-hand-icon.svg',
    title: 'Dummy Text New Add',
    desc: 'With our pediatricians by your side, you can get expert care for your child at your home, avoiding the hassle of visiting a hospital or clinic.',
  },
]

const Benefits = () => {
  return (
    <section className='bg-[#004984] py-[72px] relative overflow-hidden'>
      <Image src='/ornament-1.svg' width={155} height={170} alt='ornaments' className='absolute top-3 right-4' />
      <Image src='/ornament-1.svg' width={155} height={170} alt='ornaments' className='absolute bottom-16 -left-20 -rotate-45' />
      <Image src='/ornament-1.svg' width={155} height={170} alt='ornaments' className='absolute top-0 -left-28' />

      <div className='max-w-7xl w-full mx-auto px-4 relative z-10'>
        <div className='flex flex-col gap-6 items-center mb-10 lg:mb-20'>
          <h2 className='font-poppins font-semibold text-2xl md:text-3xl lg:text-5xl leading-[120%] tracking-[0.01em] capitalize text-center text-white'>
            Benefits of Pediatrician at Home Service
          </h2>
          <p className='font-poppins font-normal text-sm md:text-base lg:text-xl leading-[160%] tracking-[0.02em] text-center text-white'>
            At Call My Doctor, your child’s health and safety come first. Every pediatrician in our network is DHA-licensed, experienced, and trained to handle
            urgent and routine cases with the highest standards of medical care.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-[978px] mx-auto'>
          {benefitsData.map((item, idx) => (
            <div key={item.title + idx} className='flex flex-col items-start gap-2 rounded-4xl py-[18px] px-7 bg-white shadow-[0px_24px_32px_-3px_#0309320A]'>
              <div className='flex items-center gap-2'>
                <div className='h-12 w-12 flex items-center justify-center rounded-full bg-[#028650] shadow-[1px_4px_4.8px_0px_#0000003B]'>
                  <Image src={item.icon} height={24} width={24} alt={item.title} />
                </div>
                <h3 className='font-poppins font-semibold text-[#028650] text-base md:text-[18px] align-middle'>{item.title}</h3>
              </div>
              <p className='font-poppins font-light italic text-sm md:text-base text-[#263238]'>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
