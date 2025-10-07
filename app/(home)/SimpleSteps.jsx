import Image from 'next/image'
import React from 'react'

const steps = [
  {
    icon: '/call.svg',
    gradient: 'bg-[linear-gradient(45deg,#028650_0%,#028650_50%,#039C65_50%,#039C65_100%)]',
    title: 'Call Us 24/7 To Schedule A Pediatrician Home Visit',
    desc: 'You can directly call or WhatsApp us anytime to book a pediatrician to visit your home at your desired time.',
  },
  {
    icon: '/location.svg',
    gradient: 'bg-[linear-gradient(45deg,#07569E_0%,#07569E_50%,#1274C1_50%,#1274C1_100%)]',
    title: 'Share Your Location & Doctor Will Reach In 30 Mins',
    desc: 'Share your correct home address and contact info, and our pediatrician will reach you after 30 minutes of booking.',
  },
  {
    icon: '/care.svg',
    gradient: 'bg-[linear-gradient(45deg,#028650_0%,#028650_50%,#039C65_50%,#039C65_100%)]',
    title: 'Give Your Child Quality Pediatric Care',
    desc: 'After the appointment confirmation, our pediatrician will arrive to provide your child with excellent medical care.',
  },
]

const SimpleSteps = () => {
  return (
    <section className='bg-[#E7FFE7] py-14 lg:py-24 relative'>
      <Image src='/topographic-2.svg' alt='Steps' width={300} height={300} className='max-lg:hidden select-none pointer-events-none absolute top-0 left-0' />
      <Image src='/topographic-1.svg' alt='Steps' width={600} height={600} className='max-lg:hidden select-none pointer-events-none absolute top-0 right-0' />

      <Image src='/topographic-2.svg' alt='Steps' width={100} height={100} className='lg:hidden select-none pointer-events-none absolute bottom-2/5 left-0' />
      <Image src='/topographic-1.svg' alt='Steps' width={300} height={300} className='lg:hidden select-none pointer-events-none absolute top-0 right-0' />
      <div className='max-w-7xl w-full mx-auto px-4'>
        <div className='flex flex-col gap-6 items-center mb-20'>
          <h2 className='font-poppins font-semibold text-3xl md:text-4xl lg:text-5xl leading-[120%] tracking-[0.01em] capitalize text-center text-[#028650]'>
            Book A Pediatrician at Home in 3 Simple Steps
          </h2>
          <p className='font-poppins font-normal text-sm md:text-base lg:text-xl leading-[160%] tracking-[0.02em] text-center text-[#028650]'>
            Avoid the waiting rooms of crowded hospitals and give your little one the luxury of being cured with the best pediatricians in Dubai at your home.
            Follow these three quick and easy steps to book a pediatrician’s visit at home.
          </p>
        </div>
        <div className='w-full flex flex-col md:flex-row gap-y-20 lg:gap-8 mt-8 items-center justify-between relative overflow-hidden'>
          {steps.map((step, idx) => (
            <React.Fragment key={step.title}>
              <div className='flex-1 max-w-xs flex flex-col items-center text-center'>
                <div className={`mb-6 w-18 h-18 lg:w-24 lg:h-24 flex items-center justify-center rounded-3xl rounded-bl-none ${step.gradient}`}>
                  <Image src={step.icon} alt={step.title} width={48} height={48} />
                </div>
                <h3 className='font-poppins font-semibold text-base leading-[100%] tracking-[0em] capitalize text-center text-[#028650] mb-4'>{step.title}</h3>
                <p className='font-poppins font-normal text-sm leading-[24px] tracking-[0em] text-center text-[#028650]'>{step.desc}</p>
              </div>
              {/* XL arrow between steps, not after last */}
              {idx < steps.length - 1 && (
                <div
                  className='hidden xl:block absolute left-0 right-0 z-10 pointer-events-none w-full'
                  style={{ left: idx === 0 ? '20%' : '58%', top: idx === 0 ? 18 : 36 }}
                >
                  <Image height={30} width={280} src={idx === 0 ? '/arrow-1.svg' : '/arrow-2.svg'} alt={`arrow-${idx + 1}`} />
                </div>
              )}
              {/* Large arrow, not after last */}
              {idx < steps.length - 1 && (
                <div
                  className='hidden lg:block xl:hidden absolute left-0 right-0 z-10 pointer-events-none w-full'
                  style={{ left: idx === 0 ? '25%' : '58%', top: idx === 0 ? 18 : 36 }}
                >
                  <Image height={30} width={180} src={idx === 0 ? '/arrow-1.svg' : '/arrow-2.svg'} alt={`arrow-${idx + 1}`} />
                </div>
              )}
              {/* Tablet arrow, not after last */}
              {idx < steps.length - 1 && (
                <div
                  className='hidden md:block lg:hidden absolute left-0 right-0 z-10 pointer-events-none w-full'
                  style={{ left: idx === 0 ? '25%' : '58%', top: idx === 0 ? 18 : 36 }}
                >
                  <Image height={30} width={120} src={idx === 0 ? '/arrow-1.svg' : '/arrow-2.svg'} alt={`arrow-${idx + 1}`} />
                </div>
              )}
              {/* Mobile arrow, rotated 90deg, shown only on mobile */}
              {idx < steps.length - 1 && (
                <div className='flex md:hidden justify-center items-center pointer-events-none w-full my-2'>
                  <Image height={30} width={160} src={idx === 0 ? '/arrow-1.svg' : '/arrow-2.svg'} alt={`arrow-${idx + 1}`} className='rotate-90' />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SimpleSteps
