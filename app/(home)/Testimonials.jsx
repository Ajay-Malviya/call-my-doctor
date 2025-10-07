'use client'
import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    image: '/VJ.png',
    name: 'VJ',
    text: 'Had a great experience with the healthcare professional who came home to administer the influenza vaccine. He was punctual, polite, and maintained excellent hygiene throughout the process. The vaccination was quick and painless and the nurse took the time to explain everything clearly. Highly appreciate the convenience and quality of service. Would definitely recommend 10/10.',
    rating: 4,
  },
  {
    id: 2,
    image: '/VJ.png',
    name: 'VJ',
    text: 'Had a great experience with the healthcare professional who came home to administer the influenza vaccine. He was punctual, polite, and maintained excellent hygiene throughout the process. The vaccination was quick and painless and the nurse took the time to explain everything clearly. Highly appreciate the convenience and quality of service. Would definitely recommend 10/10.',
    rating: 4,
  },
  {
    id: 3,
    image: '/VJ.png',
    name: 'VJ',
    text: 'Had a great experience with the healthcare professional who came home to administer the influenza vaccine. He was punctual, polite, and maintained excellent hygiene throughout the process. The vaccination was quick and painless and the nurse took the time to explain everything clearly. Highly appreciate the convenience and quality of service. Would definitely recommend 10/10.',
    rating: 4,
  },
  {
    id: 4,
    image: '/VJ.png',
    name: 'VJ',
    text: 'Had a great experience with the healthcare professional who came home to administer the influenza vaccine. He was punctual, polite, and maintained excellent hygiene throughout the process. The vaccination was quick and painless and the nurse took the time to explain everything clearly. Highly appreciate the convenience and quality of service. Would definitely recommend 10/10.',
    rating: 4,
  },
]

const StarRating = ({ rating }) => {
  return (
    <div className='flex gap-1'>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className={`w-5 h-5 ${star <= rating ? 'fill-yellow-400' : 'fill-gray-300'}`} viewBox='0 0 20 20'>
          <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
        </svg>
      ))}
    </div>
  )
}

const Card = ({ testimonial }) => {
  return (
    <div className='bg-white rounded-2xl shadow-md overflow-hidden h-full flex flex-col xl:flex-row p-4 gap-6'>
      <img src={testimonial.image} alt={testimonial.name} className='h-42 sm:h-52 lg:h-64 object-cover rounded-2xl' />
      <div className='flex flex-col gap-4'>
        <p className='font-poppins font-normal text-sm xl:text-[18px] leading-[24px] flex-1'>{testimonial.text}</p>
        <p className='font-bold text-gray-900 text-xs'>{testimonial.name}</p>
        <StarRating rating={testimonial.rating} />
      </div>

      <div className='text-[#028650] text-5xl flex items-start'>
        <svg width='37' height='27' viewBox='0 0 37 27' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M28.5905 10.7675C29.0018 10.7675 29.3965 10.8289 29.7894 10.8848C29.6621 10.4663 29.5312 10.0407 29.3209 9.65832C29.1106 9.1028 28.7823 8.62124 28.4558 8.13607C28.1828 7.61122 27.7014 7.25591 27.3473 6.80681C26.9765 6.37034 26.4711 6.07996 26.0709 5.71743C25.678 5.33868 25.1634 5.1493 24.7539 4.88236C24.326 4.64248 23.9534 4.37735 23.5549 4.2511L22.5608 3.8507L21.6865 3.49539L22.581 0L23.6822 0.259719C24.0345 0.346292 24.4643 0.447294 24.9531 0.568135C25.4529 0.658316 25.986 0.905411 26.5799 1.13086C27.1665 1.38697 27.8453 1.56012 28.4761 1.97134C29.1106 2.36453 29.8429 2.69279 30.4885 3.21944C31.1137 3.76232 31.8682 4.23307 32.4252 4.92385C33.0339 5.56954 33.6352 6.24769 34.1019 7.01964C34.6423 7.75551 35.0094 8.56353 35.3967 9.36252C35.7472 10.1615 36.0294 10.9786 36.2599 11.7721C36.6971 13.3629 36.8926 14.8743 36.9682 16.1675C37.0309 17.4625 36.994 18.5393 36.9166 19.3184C36.8889 19.6864 36.8373 20.0435 36.8004 20.2906L36.7543 20.5936L36.7063 20.5828C36.3782 22.0813 35.623 23.4583 34.528 24.5546C33.433 25.651 32.0429 26.4217 30.5186 26.7778C28.9943 27.1339 27.3981 27.0608 25.9145 26.5668C24.431 26.0729 23.1207 25.1783 22.1354 23.9867C21.1501 22.795 20.5299 21.3549 20.3466 19.833C20.1633 18.3111 20.4244 16.7695 21.0997 15.3866C21.7749 14.0037 22.8368 12.836 24.1624 12.0186C25.4881 11.2012 27.0233 10.7674 28.5905 10.7675ZM8.30085 10.7675C8.71218 10.7675 9.1069 10.8289 9.49978 10.8848C9.37251 10.4663 9.24155 10.0407 9.03128 9.65832C8.821 9.1028 8.49268 8.62124 8.1662 8.13607C7.89322 7.61122 7.4118 7.25591 7.05765 6.80681C6.68691 6.37034 6.18151 6.07996 5.78125 5.71743C5.38837 5.33868 4.87376 5.1493 4.46428 4.88236C4.03635 4.64248 3.66376 4.37735 3.26534 4.2511L2.27115 3.8507L1.39685 3.49539L2.29144 0L3.39262 0.259719C3.74492 0.346292 4.17468 0.447294 4.66348 0.568135C5.16334 0.658316 5.69641 0.905411 6.29034 1.13086C6.87505 1.38878 7.55567 1.56012 8.18649 1.97315C8.821 2.36633 9.55327 2.69459 10.1989 3.22124C10.8241 3.76413 11.5785 4.23487 12.1356 4.92385C12.7443 5.56954 13.3456 6.24769 13.8122 7.01964C14.3527 7.75551 14.7197 8.56353 15.1071 9.36252C15.4576 10.1615 15.7398 10.9786 15.9703 11.7721C16.4075 13.3629 16.603 14.8743 16.6786 16.1675C16.7413 17.4625 16.7044 18.5393 16.627 19.3184C16.5993 19.6864 16.5477 20.0435 16.5108 20.2906L16.4647 20.5936L16.4167 20.5828C16.0886 22.0813 15.3334 23.4583 14.2384 24.5546C13.1434 25.651 11.7533 26.4217 10.229 26.7778C8.70473 27.1339 7.10848 27.0608 5.62492 26.5668C4.14137 26.0729 2.83113 25.1783 1.84579 23.9867C0.860451 22.795 0.240261 21.3549 0.0569687 19.833C-0.12632 18.3111 0.134773 16.7695 0.810055 15.3866C1.48533 14.0037 2.54721 12.836 3.87283 12.0186C5.19845 11.2012 6.73366 10.7674 8.30085 10.7675Z'
            fill='#028650'
          />
        </svg>
      </div>
    </div>
  )
}

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className='bg-[#E7FFE7] px-2 py-20 overflow-hidden'>
      <div className='flex flex-col items-center gap-3 2xl:flex-row 2xl:pl-[143px]'>
        <div className='shrink-0 max-w-md max-2xl:text-center max-2xl:mb-8'>
          <h2 className='font-poppins font-semibold text-[#028650] text-2xl md:text-3xl lg:text-5xl lg:leading-[60px] capitalize'>
            Our Client’s Success Stories
          </h2>
        </div>

        {/* Carousel */}
        <div className='relative w-full'>
          <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex'>
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className='flex-none w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] xl:w-[calc(60%-1rem)] 2xl:w-[calc(80%-1rem)] [@media(min-width:1700px)]:w-[calc(70%-1rem)] [@media(min-width:2200px)]:w-[calc(45%-1rem)] px-2'
                >
                  <Card testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Carousel controls */}
      <div className='flex items-center justify-center gap-x-10 lg:gap-24 mt-8 px-4'>
        <button onClick={scrollPrev} className='cursor-pointer flex items-center justify-center text-[#028650]' aria-label='Previous testimonial'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={4} d='M15 19l-7-7 7-7' />
          </svg>
        </button>

        <div className='flex gap-2'>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === selectedIndex ? 'bg-[#028650] w-8' : 'bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button onClick={scrollNext} className='cursor-pointer flex items-center justify-center text-[#028650]' aria-label='Next testimonial'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={4} d='M9 5l7 7-7 7' />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default Testimonials
