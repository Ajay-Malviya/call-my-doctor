import Image from 'next/image'
import React from 'react'
import { IoLogoWhatsapp } from 'react-icons/io5'

const whyChooseUsList = [
  {
    strong: '24/7 Availability',
    text: 'Doctors available round the clock, including weekends and holidays.',
  },
  {
    strong: 'Faster Access',
    text: 'Pediatricians typically reach within 30–60 minutes, depending on location.',
  },
  {
    strong: 'Trusted DHA-Certified Doctors',
    text: 'Licensed professionals with pediatric expertise.',
  },
  {
    strong: 'Comfort of Home',
    text: 'No stress of travel, queues, or crowded waiting rooms.',
  },
  {
    strong: 'Comprehensive Care',
    text: 'From fever & infections to routine check-ups and follow-up care.',
  },
]

const WhyChooseUs = () => {
  return (
    <section className='bg-[linear-gradient(1.33deg,#004984_38.52%,#028650_101.37%)] py-14 lg:py-24'>
      <div className='max-w-7xl w-full mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-20 items-center'>
          <div className='relative rounded-4xl w-full aspect-[3/2] md:h-full bg-white overflow-hidden order-2 md:order-1'>
            <Image
              src='/ill-girl-being-examined-by-doctor.jpg'
              fill
              alt='Girl being examined by doctor'
              className='object-cover md:object-center transform -scale-x-100'
            />
          </div>
          <div className='flex flex-col items-start gap-y-6 text-white order-1 md:order-2'>
            <h2 className='font-poppins font-semibold text-3xl md:text-4xl lg:text-5xl leading-[120%] tracking-[0.01em] capitalize align-middle'>
              Why Choose Our Pediatric Home Visits?
            </h2>
            <ul>
              {whyChooseUsList.map((item, idx) => (
                <li key={item.strong + idx} className='font-poppins text-sm md:text-base lg:text-[18px] leading-[160%] align-middle mb-2'>
                  <strong className='font-poppins font-semibold text-sm md:text-base lg:text-[18px] leading-[160%] align-middle'>{item.strong}</strong>
                  {` – ${item.text}`}
                </li>
              ))}
            </ul>

            <button
              className='flex bg-[#028650] text-white py-4 px-7 rounded-2xl shadow-[0px_8px_23px_0px_#4184F73D] cursor-pointer transition-all duration-150
              hover:bg-[#02653c] hover:shadow-[0px_12px_32px_0px_#4184F780] active:bg-[#014c2c] active:shadow-[0px_4px_12px_0px_#4184F740]'
            >
              <IoLogoWhatsapp size={24} stroke='white' className='mr-2' /> Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
