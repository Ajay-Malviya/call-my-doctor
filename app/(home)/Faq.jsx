'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const data = [
  { q: 'What services are covered through the pediatrician at home service?', a: '' },
  { q: 'Does the pediatrician treat newborns at home?', a: '' },
  {
    q: 'Can your pediatrician handle emergencies at home?',
    a: 'While our pediatrician at home in Dubai is perfect for non-emergency medical requirements, for urgent or serious situations, we recommend visiting the nearest hospital. Our expert pediatrician can assist with various health problems, but severe emergencies may necessitate',
  },
  { q: 'What should I do before the pediatrician reaches my home?', a: '' },
  { q: 'When soon should I schedule a pediatric home visit for ongoing care?', a: '' },
]

function Accordion({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={`border border-[#D2EAEF] rounded-2xl px-7 py-4 mb-4 ${
        open ? 'bg-[#E7FFE7] shadow-[0px_8px_23px_0px_#30B2303D] 2xl:translate-x-8' : 'bg-white'
      } `}
    >
      <button className='flex justify-between lg:items-center gap-3 w-full text-left' onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <h3 className='font-poppins font-medium text-base lg:text-[18px] lg:leading-[32px] tracking-[0em] align-middle'>{question}</h3>
        <span className={`${!open ? 'text-[#307BC4]' : 'text-[#028650]'}`}>
          <svg
            width='28'
            height='28'
            viewBox='0 0 28 28'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
            className={`transform transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          >
            <path d='M14 0C6.28053 0 0 6.28053 0 14C0 21.7195 6.28053 28 14 28C21.7195 28 28 21.7195 28 14C28 6.28053 21.7195 0 14 0ZM14 1.75C20.7548 1.75 26.25 7.24522 26.25 14C26.25 20.7548 20.7548 26.25 14 26.25C7.24522 26.25 1.75 20.7548 1.75 14C1.75 7.24522 7.24522 1.75 14 1.75ZM14.6186 8.13137L18.9936 12.5064C19.1645 12.6772 19.25 12.9012 19.25 13.125C19.25 13.3488 19.1645 13.5728 18.9936 13.7436C18.6517 14.0855 18.0981 14.0855 17.7564 13.7436L14.875 10.8622V19.25C14.875 19.7332 14.4837 20.125 14 20.125C13.5163 20.125 13.125 19.7332 13.125 19.25V10.8622L10.2436 13.7436C9.90172 14.0855 9.34806 14.0855 9.00637 13.7436C8.66469 14.0855 8.66447 12.8481 9.00637 12.5064L14.6186 8.13137Z' />
          </svg>
        </span>
      </button>
      {open && <p className='font-poppins text-sm lg:text-base leading-[26px] align-middle mt-4'>{answer}</p>}
    </div>
  )
}

const Faq = () => {
  return (
    <section className='bg-[#EFF5EF] pt-[118px] pb-[224px] relative overflow-hidden'>
      <Image src='/circle.svg' alt='Circle' width={940} height={885} className='absolute -top-32 left-0 z-0' />
      <Image src='/blob.svg' alt='Blob' width={600} height={990} className='max-2xl:hidden absolute -top-56 right-0 z-0' />
      <div className='px-4 max-2xl:max-w-7xl max-2xl:mx-auto 2xl:pl-[308px] 2xl:pr-[150px] w-full flex flex-col lg:flex-row items-center justify-between 2xl:justify-center gap-14 relative z-10'>
        <div>
          <div className='mb-10'>
            <h2 className='font-poppins font-semibold text-[#028650] text-2xl md:text-3xl lg:text-5xl leading-[120%] tracking-[0.01em] capitalize align-middle'>
              Frequently Asked Questions
            </h2>
          </div>
          <div className='max-w-[850px] w-full flex flex-col gap-2 lg:gap-5'>
            {data.map((item, idx) => (
              <Accordion key={item.q + idx} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
        <div className='rounded-[30px] flex overflow-hidden'>
          <Image src='/doctor.jpg' alt='Doctor' width={526} height={655} className='object-cover' />
        </div>
      </div>
    </section>
  )
}

export default Faq
